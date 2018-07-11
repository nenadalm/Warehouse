(ns warehouse.storage.indexeddb
  (:require
   [warehouse.storage.local :as local]
   [cljs.core.async :as a :refer [<! >!]]
   [clojure.set :as clojure.set]
   [clojure.string :as string]
   [warehouse.indexeddb :as indexeddb])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(defn normalize-keyword [keyword]
  (string/lower-case keyword))

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

(def db {:name "app-state"
         :version 1
         :on-upgrade on-upgrade})

(defn load-initial-data
  "Returns channel receiving first `n` components"
  [n]
  (go (let [res (<! (indexeddb/load-page db "components" {:offset 0
                                                          :limit n}))]
        {:count (:count res)
         :components (mapv obj->component (:data res))})))

(defn load-components
  "Returns channel receiving components for the page"
  [limit offset]
  (go (let [res (<! (indexeddb/load-page db "components" {:offset offset
                                                          :limit limit}))]
        {:count (:count res)
         :components (mapv obj->component (:data res))})))

(defn load-components-by-ids
  "Returns channel receiving components by `ids`"
  [ids]
  (go (let [res (<! (indexeddb/load-by-ids db "components" {:ids ids}))]
        (->> res
             (sort-by #(.-id %))
             (mapv obj->component)))))

(defn filter-ids-by-keyword
  "Returns channel receiving ids of components filtered by `keyword`"
  [keyword]
  (indexeddb/load-ids-by-string-index db "components" {:index-name "by_keyword"
                                                       :q (normalize-keyword keyword)}))

(defn filter-ids
  "Takes query `q` and returns channel receiving ids of components
  matching the `q`"
  [q]
  (let [col (filter (complement empty?) (string/split q " "))
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

(defn store-components
  "Returns channel receiving `true` once update completed."
  [components]
  (indexeddb/store db "components" (map component->obj components)))

(defn store-component
  "Returns channel receiving `true` once update completed."
  [component]
  (indexeddb/store db "components" (component->obj component)))

