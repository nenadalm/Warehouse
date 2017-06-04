(ns warehouse.index
  (:require
   lunr
   [warehouse.search.db :as search-db]
   [re-frame.db :as db]
   [re-frame.core :refer [dispatch]]))

(defn update-index [ns]
  (search-db/update-index (map (fn [[_ component]]
                                 {:id (:id component)
                                  :name (:name component)
                                  :tags (:tags component)})
                               (:components ns))))

(defn initialize []
  (search-db/initialize ["name" "tags"])
  (update-index @db/app-db)
  (add-watch db/app-db :indexer (fn [k r os ns]
                                  (when-not (identical? (:components os) (:components ns))
                                    (update-index ns)))))

