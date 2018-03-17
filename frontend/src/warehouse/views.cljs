(ns warehouse.views
  (:require
   [warehouse.routes :as routes]
   [warehouse.notifications.views :refer [notifications]]
   [warehouse.pages.process.views :refer [processes]]
   [warehouse.pages.list.views :refer [component-list]]
   [warehouse.events :as events]
   [re-frame.core :refer [subscribe dispatch]]))

(def nav-items [{:title "List"
                 :url (routes/homepage)}
                {:title "Processes"
                 :url (routes/processes)}])

(defn nav []
  [:ul.menu
   (for [item nav-items]
     ^{:key (:title item)} [:li [:a {:href "#"
                                     :on-click #(dispatch [::events/navigate (:url item)])} (:title item)]])])

(defn page []
  (let [active-tab (subscribe [:active-tab])]
    (fn []
      [:div
       [notifications]
       [nav]
       (case @active-tab
         :index [component-list]
         :processes [processes]
         :not-found [:div "404 Page not found"])])))

