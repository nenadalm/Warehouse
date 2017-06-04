(ns warehouse.change-set
  (:require
   [alandipert.storage-atom :refer [local-storage]]))

(defonce change-sets (local-storage (atom []) :app-change-sets))

