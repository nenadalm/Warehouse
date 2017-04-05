(ns warehouse.process.events
  (:require
   [warehouse.process.db :as db]
   [warehouse.util :as util]
   [re-frame.core :refer [reg-event-db reg-fx reg-cofx reg-event-fx inject-cofx]]))

(reg-cofx
 :current-datetime
 (fn [cofx _]
   (assoc cofx :current-datetime (.toLocaleString (js/Date.)))))

(defn create-process
  "Create process model. Process is a map with keys: :title, :url, :type, :data, :name"
  [{:keys [db current-datetime]} [_ process]]
  (let [k (util/next-key (:processes db))
        p (assoc process
                 :id k
                 :state :pending
                 :created-at current-datetime)]
    {:db (dissoc (assoc-in db [:processes k] p)
                 :import-form)
     :process p}))

(reg-fx
  :process
  (fn [process]
    (db/run-process process)))

(reg-event-fx
 :process-create
 [(inject-cofx :current-datetime)]
  create-process)

(reg-event-fx
 :process-finished
 [(inject-cofx :current-datetime)]
 (fn [{:keys [db current-datetime]} [_ process-id new-state]]
   (let [process (get-in db [:processes process-id])
         updated-process (assoc process
                                :state new-state
                                :finished-at current-datetime)]
     {:db (assoc-in db [:processes process-id] updated-process)})))
