(ns warehouse.search.views
  (:require
   [warehouse.search.events]
   [re-frame.core :refer [dispatch]]))

(defn search []
  [:label "Search: "
   [:input {:name "search"
            :type "search"
            :on-change (fn [e] (dispatch [:filter-update (.-target.value e)]))}]])

