(ns warehouse.storage.indexeddb
  (:require
   [warehouse.storage.local :as local]
   [cljs.core.async :as a :refer [<! >!]]
   [clojure.set :as clojure.set])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(def db-name "app-state")

(defn normalize-keyword [keyword]
  (clojure.string/lower-case keyword))

(defn component->obj [c]
  (let [keywords (->> (conj (:tags c) (:name c))
                      (map normalize-keyword)
                      (set))]
    (clj->js (assoc c :keywords keywords))))

(defn obj->component [o]
  (dissoc (js->clj o :keywordize-keys true) :keywords))

(defn on-upgrade [e]
  (let [db (.-target.result e)]

    ; migration from local storage to indexeddb
    (when (< (.-oldVersion e) 1)
      (let [store (.createObjectStore db "components" #js {"keyPath" "id"})]
        (doseq [component (:components @local/app-state)]
          (.put store (component->obj component)))
        (.createIndex store "by_keyword" "keywords" #js {:multiEntry true})))))

(defn on-success
  ([f n e]
   (on-success f n e 0))
  ([f n e offset]
   (let [db (.-target.result e)
         tx (.transaction db "components" "readonly")
         store (.objectStore tx "components")
         request (.count store)]
     (set! (.-onsuccess request)
           (fn [e]
             (let [cnt (.-target.result e)
                   request (.openCursor store)
                   components (atom [])
                   advanced (atom (= 0 offset))]
               (set! (.-onsuccess request)
                     (fn [e]
                       (if-let [cursor (.-target.result e)]
                         (let [component (.-value cursor)]
                           (if cursor
                             (if (true? @advanced)
                               (do
                                 (swap! components conj (obj->component (.-value cursor)))
                                 (if (= (count @components) n)
                                   (f {:count cnt
                                       :components @components})
                                   (.continue cursor)))
                               (do
                                 (.advance cursor offset)
                                 (reset! advanced true)))
                             (f {:count cnt
                                 :components @components})))
                         (f {:count cnt
                             :components @components}))))))))))

(defn on-success-filter
  ([f n q e]
   (on-success-filter f n e 0 q))
  ([f n e offset q]
   (let [db (.-target.result e)
         tx (.transaction db "components" "readonly")
         store (.objectStore tx "components")
         index (.index store "by_keyword")
         keyRange (.bound js/IDBKeyRange
                          (clj->js "component1")
                          (clj->js "component1"))
         request (.count index keyRange)]
     (set! (.-onsuccess request)
           (fn [e]
             (let [cnt (.-target.result e)
                   components (atom [])
                   advanced (atom (= 0 offset))
                   request (.openCursor index keyRange)]
               (set! (.-onsuccess request)
                     (fn [e]
                       (if-let [cursor (.-target.result e)]
                         (let [component (.-value cursor)]
                           (if cursor
                             (if (true? @advanced)
                               (do
                                 (swap! components conj (js->clj (.-value cursor) :keywordize-keys true))
                                 (if (= (count @components) n)
                                   (f {:count cnt
                                       :components @components})
                                   (.continue cursor)))
                               (do
                                 (.advance cursor offset)
                                 (reset! advanced true)))
                             (f {:count cnt
                                 :components @components})))
                         (f {:count cnt
                             :components @components}))))))))))

(defn filter-keys [f q e]
  (let [db (.-target.result e)
        tx (.transaction db "components" "readonly")
        store (.objectStore tx "components")
        index (.index store "by_keyword")
        keyRange (.bound js/IDBKeyRange q (str q "z"))
        keys (atom [])
        request (.openCursor index keyRange)]
    (set! (.-onsuccess request)
          (fn [e]
            (if-let [cursor (.-target.result e)]
              (let [component (.-value cursor)]
                (if cursor
                  (do
                    (swap! keys conj (js->clj (.-value.id cursor)))
                    (.continue cursor))
                  (f @keys)))
              (f @keys))))))

(defn filter-components [ids f e]
  (let [db (.-target.result e)
        tx (.transaction db "components" "readonly")
        store (.objectStore tx "components")
        components (atom [])
        prev-idx (atom 0)
        sorted-ids (sort ids)
        keyRange (.bound js/IDBKeyRange (first sorted-ids) (last sorted-ids))
        request (.openCursor store keyRange)]
    (set! (.-onsuccess request)
          (fn [e]
            (if-let [cursor (.-target.result e)]
              (let [component (.-value cursor)]
                (do
                  (swap! components conj (obj->component (.-value cursor)))
                  (let [current-idx (swap! prev-idx inc)]
                    (if-let [next-id (nth sorted-ids current-idx nil)]
                      (.continue cursor next-id) ;; this needs to be fixed in case of spaces between existing keys
                      (f @components)))))
              (f @components))))))

(defn load-initial-data
  "Returns channel receiving first `n` components"
  [n]
  (let [ch (a/chan 1)
        request (.indexedDB.open js/window db-name 1)]
    (set! (.-onupgradeneeded request) on-upgrade)
    (set! (.-onsuccess request) (partial on-success
                                         (fn [res]
                                           (go (>! ch res)
                                               (a/close! ch)))
                                         n))
    ch))

(defn load-page
  "Returns channel receiving components for the page"
  [offset limit]
  (let [ch (a/chan 1)
        request (.indexedDB.open js/window db-name 1)]
    (set! (.-onupgradeneeded request) on-upgrade)
    (set! (.-onsuccess request) #(on-success (fn [res]
                                               (go (>! ch res)
                                                   (a/close! ch)))
                                             limit
                                             %
                                             offset))
    ch))

(defn load-by-ids
  "Returns channel receiving components by `ids`"
  [ids]
  (let [ch (a/chan 1)]
    (if (empty? ids)
      (go (>! ch []))
      (let [request (.indexedDB.open js/window db-name 1)]
        (set! (.-onupgradeneeded request) on-upgrade)
        (set! (.-onsuccess request) (partial filter-components ids (fn [res]
                                                                     (go (>! ch res)
                                                                         (a/close! ch)))))))
    ch))

(defn filter-ids-by-keyword
  "Returns channel receiving ids of components filtered by `keyword`"
  [keyword]
  (let [ch (a/chan 1)
        request (.indexedDB.open js/window db-name 1)]
    (set! (.-onupgradeneeded request) on-upgrade)
    (set! (.-onsuccess request) (partial filter-keys
                                         (fn [res]
                                           (go (>! ch res)
                                               (a/close! ch)))
                                         (normalize-keyword keyword)))
    ch))

(defn filter-ids
  "Takes query `q` and returns channel receiving ids of components
matching the `q`"
  [q]
  (let [col (filter (complement empty?) (clojure.string/split q " "))
        n (count col)
        ch (a/merge (map filter-ids-by-keyword col))
        key-sets (atom [])
        out (a/chan 1)]
    (go (dotimes [i n] (->> (<! ch)
                            (#(swap! key-sets conj (set %)))))
        (a/close! ch)
        (let [res (if (empty? @key-sets)
                    []
                    (into [] (apply clojure.set/intersection @key-sets)))]
          (>! out res)
          (a/close! out)))
    out))

(defn load-components [limit offset]
  (load-page offset limit))

(def load-components-by-ids load-by-ids)

(defn store-components
  "Returns channel receiving `true` once update completed."
  [components]
  (let [ch (a/chan 1)
        request (.indexedDB.open js/window db-name 1)]
    (set! (.-onupgradeneeded request) on-upgrade)
    (set! (.-onsuccess request)
          (fn [e]
            (let [db (.-result request)
                  tx (.transaction db "components" "readwrite")
                  store (.objectStore tx "components")]
              (doseq [component components]
                (.put store (component->obj component)))
              (set! (.-oncomplete tx)
                    #(go (>! ch true))))))
    ch))

(defn store-component
  "Returns channel receiving `true` once update completed."
  [component]
  (let [ch (a/chan 1)
        request (.indexedDB.open js/window db-name 1)]
    (set! (.-onupgradeneeded request) on-upgrade)
    (set! (.-onsuccess request)
          (fn [e]
            (let [db (.-result request)
                  tx (.transaction db "components" "readwrite")
                  store (.objectStore tx "components")]
              (.put store (component->obj component))
              (set! (.-oncomplete tx)
                    #(go (>! ch true))))))
    ch))

