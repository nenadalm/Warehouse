(ns warehouse.storage.local
  (:require
   [alandipert.storage-atom :refer [local-storage]]))

(defonce app-state (local-storage (atom {:components []}) :app-state))

(def storage {:store-state (fn [state]
                             (reset! app-state state))
              :load-state (fn []
                            @app-state)})

