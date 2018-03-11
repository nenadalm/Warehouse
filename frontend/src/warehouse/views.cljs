(ns warehouse.views
  (:require
   [warehouse.routes :as routes]
   [warehouse.notifications.views :refer [notifications]]
   [warehouse.process.views :refer [processes]]
   [warehouse.pages.list.views :refer [component-list]]
   [re-frame.core :refer [subscribe]]))

(defn nav []
  [:ul.menu
   [:li [:a {:href (routes/homepage)} "List"]]
   [:li [:a {:href (routes/processes)} "Processes"]]])

(defn page []
  (let [active-tab (subscribe [:active-tab])]
    (fn []
      [:div
       [notifications]
       [nav]
       (case @active-tab
         "index" [component-list]
         "processes" [processes])])))

