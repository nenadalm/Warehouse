(ns warehouse.indexeddb
  (:require
   [cljs.core.async :as a :refer [<! >!]])
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
                           tx (.transaction db store "readwrite")
                           store (.objectStore tx store)]
                       (if (coll? data)
                         (doseq [v data]
                           (.put store v))
                         (.put store data))
                       (set! (.-oncomplete tx)
                             #(go (>! ch true)))))))

(defn load-page [db store {:keys [offset limit]}]
  (open-request db (fn [request ch]
                     (let [db (.-result request)
                           tx (.transaction db store "readonly")
                           store (.objectStore tx store)
                           request (.count store)]
                       (set! (.-onsuccess request)
                             (fn [e]
                               (let [cnt (.-target.result e)
                                     result (atom [])
                                     advanced (atom (= 0 offset))
                                     request (.openCursor store)]
                                 (set! (.-onsuccess request)
                                       (fn [e]
                                         (if-let [cursor (.-target.result e)]
                                           (if (true? @advanced)
                                             (do
                                               (swap! result conj (.-value cursor))
                                               (if (= (count @result) limit)
                                                 (go (>! ch {:count cnt
                                                             :data @result}))
                                                 (.continue cursor)))
                                             (do
                                               (.advance cursor offset)
                                               (reset! advanced true)))
                                           (go (>! ch {:count cnt
                                                       :data @result}))))))))))))

(defn load-by-ids [db store {:keys [ids]}]
  (if (empty? ids)
    (go [])
    (open-request db (fn [request ch]
                       (let [db (.-result request)
                             tx (.transaction db store "readonly")
                             store (.objectStore tx store)
                             components (atom [])
                             remaining (atom (count ids))]
                         (doseq [id ids]
                           (let [request (.get store id)]
                             (set! (.-onsuccess request)
                                   (fn [e]
                                     (when-let [value (.-target.result e)]
                                       (swap! components conj value))
                                     (swap! remaining dec)
                                     (when (= 0 @remaining)
                                       (go (>! ch @components))))))))))))

(defn load-ids-by-string-index [db store {:keys [index-name q]}]
  (open-request db (fn [request ch]
                     (let [db (.-result request)
                           tx (.transaction db store "readonly")
                           store (.objectStore tx store)
                           index (.index store index-name)
                           keyRange (.bound js/IDBKeyRange q (str q "z"))
                           keys (atom [])
                           request (.openCursor index keyRange)]
                       (set! (.-onsuccess request)
                             (fn [e]
                               (if-let [cursor (.-target.result e)]
                                 (do
                                   (swap! keys conj (js->clj (.-value.id cursor)))
                                   (.continue cursor))
                                 (go (>! ch @keys)))))))))
