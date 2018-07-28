(ns warehouse.indexeddb
  (:require
   [cljs.core.async :as a :refer [<! >!]]
   [clojure.set :as clojure.set])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(defn- open-request [db f]
  "Calls `f` with channel and indexeddb successful request"
  (let [ch (a/chan 1)
        request (.indexedDB.open js/window (:name db) (:version db))]
    (set! (.-onupgradeneeded request) (:on-upgrade db))
    (set! (.-onsuccess request) #(f request ch))
    ch))

(defn store [db store data]
  "Returns channel receiving `true` once update completed."
  (open-request db (fn [request ch]
                     (let [db (.-result request)
                           store-name (name store)
                           tx (.transaction db store-name "readwrite")
                           store (.objectStore tx store-name)]
                       (if (coll? data)
                         (doseq [v data]
                           (.put store v))
                         (.put store data))
                       (set! (.-oncomplete tx)
                             #(go (>! ch true)))))))

(defn- cursor->value-fn [select]
  (condp = select
    :idb/key (fn [cursor] (.-key cursor))
    :idb/value (fn [cursor] (.-value cursor))))

(defn- store-get-fn [select store]
  (.bind
   (condp = select
     :idb/key (.-getKey store)
     :idb/value (.-get store))
   store))

(defn- open-cursor-fn [select store]
  (.bind
   (condp = select
     :idb/key (.-openKeyCursor store)
     :idb/value (.-openCursor store))
   store))

(defn- count-records [source f]
  (let [request (.count source)]
    (set! (.-onsuccess request)
          (fn [e] (f (.-target.result e))))))

(defn- send-cursor-result [db request source]
  (let [q (:idb/q db)
        result (volatile! [])
        advanced (volatile! (= 0 (:offset q 0)))
        cursor->value (cursor->value-fn (:select q))
        complete-result (fn [result]
                          (count-records source
                                         (fn [cnt] (go (>! (:idb/ch db) {:count cnt :data result})))))]
    (set! (.-onsuccess request)
          (fn [e]
            (if-let [cursor (.-target.result e)]
              (if @advanced
                (do
                  (vswap! result conj (cursor->value cursor))
                  (if (= (count @result) (:limit q))
                    (complete-result @result)
                    (.continue cursor)))
                (do
                  (.advance cursor (:offset q))
                  (vreset! advanced true)))
              (complete-result @result))))))

(defmulti where-cond (fn [db v] (first v)))

(defmethod where-cond nil [db v]
  (let [q (:idb/q db)
        store (:idb/store db)
        open-cursor (open-cursor-fn (:select q) store)
        request (open-cursor)]
    (send-cursor-result db request store)))

(defmethod where-cond 'in [db v]
  (let [[_ _ values] v]
    (if (seq values)
      (let [q (:idb/q db)
            store (:idb/store db)
            store-get (store-get-fn (:select q) store)
            result (volatile! [])
            remaining (volatile! (count values))]
        (doseq [value values]
          (let [request (store-get value)]
            (set! (.-onsuccess request)
                  (fn [e]
                    (when-let [res (.-target.result e)]
                      (vswap! result conj res))
                    (vswap! remaining dec)
                    (when (= 0 @remaining)
                      (go (>! (:idb/ch db) {:count (count @result) :data @result}))))))))
      (go (>! (:idb/ch db) {:count 0 :data []})))))

(defmethod where-cond '= [db v]
  (let [[_ x y] v
        [column value] (if (keyword? x) [x y] [y x])
        index (.index (:idb/store db) (name column))
        key-range (.bound js/IDBKeyRange value (str value "z"))
        result (volatile! [])
        request (.openCursor index key-range)]
    (set! (.-onsuccess request)
          (fn [e]
            (if-let [cursor (.-target.result e)]
              (do (vswap! result conj (.-value.id cursor))
                  (.continue cursor))
              (go (>! (:idb/ch db) {:data @result})))))))

(defmethod where-cond 'and [db v]
  (let [conds (rest v)
        n (count conds)
        results (volatile! [])
        ch (a/chan n)]
    (doseq [cond conds]
      (where-cond (assoc db :idb/ch ch) cond))
    (a/go-loop []
      (vswap! results conj (set (:data (<! ch))))
      (if (= n (count @results))
        (let [result (vec (apply clojure.set/intersection @results))]
          (>! (:idb/ch db) {:data result}))
        (recur)))))

(defn query [db q]
  (open-request db (fn [request ch]
                     (let [store-name (name (:from q))
                           idb (.-result request)
                           tx (.transaction idb store-name "readonly")
                           store (.objectStore tx store-name)
                           cond-db (assoc db
                                          :idb/store store
                                          :idb/ch ch
                                          :idb/q q)]
                       (where-cond cond-db (:where q))))))
