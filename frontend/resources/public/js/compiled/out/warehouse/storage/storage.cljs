(ns warehouse.storage.storage
  (:require [warehouse.storage.local :as local-storage]))

(def storage local-storage/storage)

(defn set-storage! [val]
  (set! storage val))

