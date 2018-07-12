(ns warehouse.storage.indexeddb
  (:require
   [warehouse.storage.local :as local]
   [cljs.core.async :as a :refer [<! >!]]
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

    ;; migration from local storage to indexeddb
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
  (go (let [res (<! (indexeddb/query db {:select :idb/value
                                         :from :components
                                         :limit n
                                         :offset 0}))]
        {:count (:count res)
         :components (mapv obj->component (:data res))})))

(defn load-components
  "Returns channel receiving components for the page"
  [limit offset]
  (go (let [res (<! (indexeddb/query db {:select :idb/value
                                         :from :components
                                         :limit limit
                                         :offset offset}))]
        {:count (:count res)
         :components (mapv obj->component (:data res))})))

(defn load-components-by-ids
  "Returns channel receiving components by `ids`"
  [ids]
  (go (let [res (<! (indexeddb/query db {:select :idb/value
                                         :from :components
                                         :where `(~'in :idb/key ~ids)}))]
        (->> res
             (sort-by #(.-id %))
             (mapv obj->component)))))

(defn filter-ids-by-keyword
  "Returns channel receiving ids of components filtered by `keyword`"
  [keyword]
  (indexeddb/query db {:select :idb/key
                       :from :components
                       :where `(~'= :by_keyword ~(normalize-keyword keyword))}))

(defn filter-ids
  "Takes query `q` and returns channel receiving ids of components
  matching the `q`"
  [q]
  (let [col (filter (complement empty?) (string/split q " "))
        conds (map (fn [kw] `(~'= :by_keyword ~(normalize-keyword kw)))
                   col)]
    (if (seq conds)
      (indexeddb/query db {:select :idb/key
                           :from :components
                           :where `(~'and ~@conds)})
      (go []))))

(defn store-components
  "Returns channel receiving `true` once update completed."
  [components]
  (indexeddb/store db :components (map component->obj components)))

(defn store-component
  "Returns channel receiving `true` once update completed."
  [component]
  (indexeddb/store db :components (component->obj component)))

