(ns warehouse.index
  (:require
    lunr
    [re-frame.db :as db]
    [re-frame.core :refer [dispatch]]))

(defonce index (.lunr js/window (fn []
                                  (this-as this
                                           (.field this "name")
                                           (.field this "tags")))))

(defn update-index [index ns]
  (doseq [[k component] (:components ns)]
    (.update index (clj->js {:id (:id component)
                             :name (:name component)
                             :tags (:tags component)}))))

(defn initialize []
  (doseq [[k component] (:components @db/app-db)]
    (.add index (clj->js {:id (:id component)
                          :name (:name component)
                          :tags (:tags component)})))
  (add-watch db/app-db :indexer (fn [k r os ns]
                                  (when-not (identical? (:components os) (:components ns))
                                    (update-index index ns)
                                    (dispatch [:filter-update (get-in ns [:filter :val]) index])))))

