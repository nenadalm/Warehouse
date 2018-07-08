(ns warehouse.notifications.db
  (:require [warehouse.util :as util]))

(defn add-notification [db notification]
  (let [k (util/next-key (:notifications db))]
    (assoc-in db [:notifications k] notification)))

(defn remove-notification [db notification-key]
  (if (:notifications db)
    (assoc db
           :notifications
           (dissoc (:notifications db) notification-key))
    db))

