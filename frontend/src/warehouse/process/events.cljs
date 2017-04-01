(ns warehouse.process.events
  (:require
   [warehouse.process.db :as db]
   [warehouse.util :as util]
   [re-frame.core :refer [reg-fx reg-event-fx]]))

(defn create-process
  "Create process model. Process is a map with keys: :title, :url, :type, :data, :name"
  [{:keys [db]} [_ process]]
  (let [k (util/next-key (:processes db))
        p (assoc process
                 :id k
                 :state :pending)]
    {:db (dissoc (assoc-in db [:processes k] p)
                 :import-form)
     :process p}))

(reg-fx
  :process
  (fn [process]
    (db/run-process process)))

(reg-event-fx
  :process-create
  create-process)
