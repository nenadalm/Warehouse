(ns warehouse.change-set
  (:require
    [re-frame.db :as db]
    [warehouse.util :as util]
    [alandipert.storage-atom :refer [local-storage]]))

(defonce change-sets (local-storage (atom []) :app-change-sets))

(defn initialize-watches []
  (add-watch db/app-db :change-set (fn [k r os ns]
                                     (let [cs (util/get-change-set (:components os) (:components ns))]
                                       (when-not (empty? cs)
                                         (swap! change-sets #(take 10 (conj % cs))))))))

