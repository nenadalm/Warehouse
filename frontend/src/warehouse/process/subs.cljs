(ns warehouse.process.subs
  (:require
   [re-frame.core :refer [reg-sub]]))

(reg-sub
  :processes
  (fn
    [db _]
    (:processes db)))
