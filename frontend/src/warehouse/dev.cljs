(ns ^:figwheel-always warehouse.dev
  (:require
   [re-frisk.core :refer [enable-re-frisk!]]
   [warehouse.storage.storage :as storage]
   [warehouse.storage.test :as test-storage]
   [warehouse.events :refer [default-state]]
   [warehouse.core]))

(defn main []
  (enable-console-print!)
  (enable-re-frisk!)
  (set! default-state (assoc default-state
                             :backend-url "http://localhost:3000"
                             :notifications {1 {:type :error
                                                :message "Something bad happened"}
                                             2 {:type :success
                                                :message "Something good happened"}})))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(main)
(warehouse.core/main)

