(ns warehouse.index
  (:require
   [warehouse.search.db :as search-db]
   [reagent.core :as r]
   [re-frame.db :as db]
   [re-frame.core :refer [dispatch subscribe]]))

(defn update-index [components]
  (search-db/update-index (map (fn [[_ component]]
                                 {:id (:id component)
                                  :name (:name component)
                                  :tags (:tags component)})
                               components)))

(defn reset-infinite-scroll []
  (let [visible-components @(subscribe [:visible-components])]
    (dispatch [:reset-infinite-scroll])))

(defn update-search []
  (let [components @(subscribe [:components])]
    (update-index components)
    (dispatch [:filter-refresh])))

(defn initialize []
  (search-db/initialize ["name" "tags"])
  (r/track! reset-infinite-scroll)
  (r/track! update-search))
