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

(defmulti where-cond (fn [db v] (first v)))

(defmethod where-cond nil [db v]
  (let [store (:idb/store db)
        request (.count store)]
    (set! (.-onsuccess request)
          (fn [e]
            (let [cnt (.-target.result e)
                  q (:idb/q db)
                  result (volatile! [])
                  advanced (volatile! (= 0 (:offset q)))
                  request (.openCursor store)]
              (set! (.-onsuccess request)
                    (fn [e]
                      (if-let [cursor (.-target.result e)]
                        (if @advanced
                          (do
                            (vswap! result conj (.-value cursor))
                            (if (= (count @result) (:limit q))
                              (go (>! (:idb/ch db) {:count cnt
                                                    :data @result}))
                              (.continue cursor)))
                          (do
                            (.advance cursor (:offset q))
                            (vreset! advanced true)))
                        (go (>! (:idb/ch db) {:count cnt
                                              :data @result}))))))))))

(defmethod where-cond 'in [db v]
  (let [[_ _ values] v]
    (if (seq values)
      (let [store (:idb/store db)
            result (volatile! [])
            remaining (volatile! (count values))]
        (doseq [value values]
          (let [request (.get store value)]
            (set! (.-onsuccess request)
                  (fn [e]
                    (when-let [res (.-target.result e)]
                      (vswap! result conj res))
                    (vswap! remaining dec)
                    (when (= 0 @remaining)
                      (go (>! (:idb/ch db) @result))))))))
      (go (>! (:idb/ch db) [])))))

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
              (go (>! (:idb/ch db) @result)))))))

(defmethod where-cond 'and [db v]
  (let [conds (rest v)
        n (count conds)
        results (volatile! [])
        ch (a/chan n)]
    (doseq [cond conds]
      (where-cond (assoc db :idb/ch ch) cond))
    (a/go-loop []
      (vswap! results conj (set (<! ch)))
      (if (= n (count @results))
        (let [result (vec (apply clojure.set/intersection @results))]
          (>! (:idb/ch db) result))
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
