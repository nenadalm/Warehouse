(ns warehouse.events
  (:require
    [warehouse.util :as util]
    [warehouse.index :as index]
    [re-frame.core :refer [reg-event-db reg-cofx reg-event-fx inject-cofx]]))

(reg-event-db
  :state-loaded
  (fn
    [db [_ response]]
    (util/document->state response db)))

(reg-event-db
  :item-save
  (fn
    [db [_ k item]]
    (assoc-in
      db
      [:components k]
      (assoc
        item
        :tags
        (util/string->array (:tags item))))))

(reg-event-db
  :item-create
  (fn
    [db [_ item]]
    (let [k (or (inc (apply max (keys (:components db)))) 1)]
      (assoc-in db
                [:components k]
                (assoc item :id k :tags (util/string->array (:tags item)))))))

(reg-event-db
  :notification-close
  (fn
    [db [_ notification-key]]
    (assoc db :notifications (concat
                               (subvec (:notifications db) 0 notification-key)
                               (subvec (:notifications db) (inc notification-key))))))

(reg-event-db
  :revert-change
  (fn
    [db [_ type metadata data]]
    (case type
      :create (assoc-in db [:components (:id metadata) :amount] 0)
      :update (assoc-in db
                        [:components (:id metadata)]
                        (util/revert-changes
                          (get-in db [:components (:id metadata)])
                          data)))))

(reg-event-db
  :page-change
  (fn
    [db [_ page]]
    (assoc db :page page)))

(reg-cofx
  :search-result
  (fn [cofx _]
    (assoc cofx :search-result (js->clj (.search index/index (second (:event cofx)))))))

(reg-event-fx
  :filter-update
  [(inject-cofx :search-result)]
  (fn
    [cofx [_ val]]
    {:db (assoc (:db cofx) :filter {:val val
                                    :search (:search-result cofx)})}))

