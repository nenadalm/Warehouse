(ns ^:figwheel-always warehouse.core
  (:require
    [reagent.core :as reagent :refer [atom]]
    [warehouse.util :as util]
    [secretary.core :as secretary]
    [re-frame.core :refer [reg-event-db dispatch-sync]]
    [re-frame.db :as db]
    [warehouse.subs]
    [warehouse.events]
    [warehouse.views :as view]
    [warehouse.index :as index]
    [warehouse.change-set :as change-set])
  (:require-macros [warehouse.macro :as m]))

(enable-console-print!)

(secretary/dispatch! (.-hash js/location))
(.addEventListener js/window "hashchange" (fn [e]
                                            (secretary/dispatch! (.-hash js/location))))


(dispatch-sync [:initialize-db])
(reagent/render-component [view/page]
                          (.getElementById js/document "app"))

(index/initialize)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

