(ns warehouse.notifications.views
  (:require
   [warehouse.notifications.subs]
   [warehouse.notifications.events]
   [re-frame.core :refer [dispatch subscribe]])
  (:require-macros
   [warehouse.macro :as m]))

(defn notification [n k]
  (let [type (:type n)
        message (:message n)]
    [:div {:class (str "notification notification-" (name type))}
     [:div {:class "message"} message]
     [:button {:type "button"
               :class "close"
               :on-click (m/handler-fn
                          (dispatch [:notification-close k]))} "X"]]))

(defn notifications []
  (let [notifications (subscribe [:notifications])]
    (fn
      []
      (when (not (empty? @notifications))
        [:div {:class "notifications"}
         (for [[k n] @notifications]
           ^{:key k} [notification n k])]))))

