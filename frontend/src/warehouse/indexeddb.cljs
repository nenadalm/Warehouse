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
    :idb/key (fn [cursor] (.-primaryKey cursor))
    :idb/value (fn [cursor] (.-value cursor))))

(defn- open-cursor-fn [select store]
  (.bind
   (condp = select
     :idb/key (.-openKeyCursor store)
     :idb/value (.-openCursor store))
   store))

(defn- count-records [source query f]
  (let [request (.count source query)]
    (set! (.-onsuccess request)
          (fn [e] (f (.-target.result e))))))

(defn- send-cursor-result
  ([db request source]
   (send-cursor-result db request source nil))
  ([db request source query]
   (let [q (:idb/q db)
         result (volatile! [])
         advanced (volatile! (= 0 (:offset q 0)))
         cursor->value (cursor->value-fn (:select q))
         complete-result (fn [result]
                           (count-records source
                                          query
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
               (complete-result @result)))))))

(defmulti where-cond (fn [db v] (first v)))

(defmethod where-cond nil [db v]
  (let [q (:idb/q db)
        store (:idb/store db)
        open-cursor (open-cursor-fn (:select q) store)
        request (open-cursor)]
    (send-cursor-result db request store)))

(defn- take-n
  "Returns channel that will return, at most, `n` items from `ch`."
  [ch n]
  (let [results (atom [])]
    (a/go-loop []
      (if (= n (count @results))
        @results
        (do (swap! results conj (<! ch))
            (recur))))))

(defmethod where-cond 'in [db v]
  (let [[_ col values] v
        n (count values)
        ch (a/chan n)]
    (doseq [value values]
      (where-cond (assoc db :idb/ch ch) (list '= col value)))
    (go
      (let [results (<! (take-n ch n))
            result (vec (apply clojure.set/union (map #(set (:data %)) results)))]
        (>! (:idb/ch db) {:count (count result) :data result})))))

(defmethod where-cond '= [db v]
  (let [[_ x y] v
        [column value] (if (keyword? x) [x y] [y x])
        q (:idb/q db)
        store (:idb/store db)
        index (if (= :idb/key column) store (.index (:idb/store db) (name column)))
        key-range (if (= :idb/key column) value (.only js/IDBKeyRange value))
        open-cursor (open-cursor-fn (:select q) index)
        request (open-cursor key-range)]
    (send-cursor-result db request index key-range)))

(defmethod where-cond 'starts-with [db v]
  (let [[_ x y] v
        [column value] (if (keyword? x) [x y] [y x])
        q (:idb/q db)
        store (:idb/store db)
        index (if (= :idb/key column) store (.index (:idb/store db) (name column)))
        key-range (.bound js/IDBKeyRange value (str value "z"))
        open-cursor (open-cursor-fn (:select q) index)
        request (open-cursor key-range)]
    (send-cursor-result db request index key-range)))

(defn- intersection
  "Returns intersection of given records from indexeddb."
  [& records]
  (let [record->record-id (if (object? (ffirst records))
                            #(.-id %)
                            identity)
        record-ids (map (fn [rows]
                          (set (map record->record-id rows)))
                        records)
        common-ids (apply clojure.set/intersection record-ids)]
    (filter #(contains? common-ids (record->record-id %))
            (first records))))

(defmethod where-cond 'and [db v]
  (let [conds (rest v)
        n (count conds)
        ch (a/chan n)]
    (doseq [cond conds]
      (where-cond (assoc db :idb/ch ch) cond))
    (go
      (let [results (<! (take-n ch n))
            result (vec (apply intersection (map :data results)))]
        (>! (:idb/ch db) {:count (count result) :data result})))))

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
