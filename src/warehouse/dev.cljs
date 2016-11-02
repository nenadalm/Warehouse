(ns ^:figwheel-always warehouse.dev
  (:require
    [warehouse.storage.storage :as storage]
    [warehouse.storage.test :as test-storage]
    [warehouse.events :refer [default-state]]
    [warehouse.core]))

(defn main []
  (enable-console-print!)
  (storage/set-storage! test-storage/storage)
  (set! default-state (assoc default-state :notifications [{:type :error
                                                            :message "Something bad happened"}
                                                           {:type :success
                                                            :message "Something good happened"}])))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

(main)
(warehouse.core/main)

