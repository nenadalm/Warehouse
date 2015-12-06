(ns warehouse.storage.local
  (:require [alandipert.storage-atom :refer [local-storage]]))

(defonce app-state (local-storage (atom {:components []}) :app-state))

(defn store-state [state]
  (reset! app-state state))

(defn load-state [handler error-handler]
  (handler @app-state))

