(ns warehouse.search.views
  (:require
    [warehouse.search.events]
    [re-frame.core :refer [dispatch]])
  (:require-macros
    [warehouse.macro :as m]))

(defn search []
  [:label "Search: "
   [:input {:name "search"
            :type "search"
            :on-change (m/handler-fn (dispatch [:filter-update (.-target.value e)]))}]])

