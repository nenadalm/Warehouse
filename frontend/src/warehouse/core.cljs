(ns warehouse.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [secretary.core :as secretary]
   [warehouse.subs]
   [warehouse.events]
   [re-frame.core :refer [dispatch-sync]]
   [warehouse.views :as view]
   [warehouse.index :as index]
   [warehouse.routes :as routes]))

(defn main []
  (routes/init)
  (dispatch-sync [:initialize-db])
  (reagent/render-component [view/page]
                            (.getElementById js/document "app"))

  (index/initialize))

