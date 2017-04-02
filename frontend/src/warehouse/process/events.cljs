(ns warehouse.process.events
  (:require
   [warehouse.process.db :as db]
   [warehouse.util :as util]
   [re-frame.core :refer [reg-event-db reg-fx reg-event-fx]]))

(defn get-current-datetime []
  (.toLocaleString (js/Date.)))

(defn create-process
  "Create process model. Process is a map with keys: :title, :url, :type, :data, :name"
  [{:keys [db]} [_ process]]
  (let [k (util/next-key (:processes db))
        p (assoc process
                 :id k
                 :state :pending
                 :created-at (get-current-datetime))]
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

(reg-event-db
 :process-finished
 (fn [db [_ process-id new-state]]
   (let [process (get-in db [:processes process-id])
         updated-process (assoc process
                            :state new-state
                            :finished-at (get-current-datetime))]
     (assoc-in db [:processes process-id] updated-process))))
