(ns warehouse.subs
  (:require
    [re-frame.core :refer [reg-sub]]))

(reg-sub
  :visible-components
  (fn
    [db _]
    (if (clojure.string/blank? (get-in db [:filter :val]))
      (:components db)
      (select-keys (:components db) (map #(get % "ref") (get-in db [:filter :search]))))))

(reg-sub
  :notifications
  (fn
    [db _]
    (:notifications db)))

(reg-sub
  :active-tab
  (fn
    [db _]
    (:page db)))

(reg-sub
  :state
  (fn
    [db _]
    db))

