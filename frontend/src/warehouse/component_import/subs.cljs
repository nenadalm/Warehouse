(ns warehouse.component-import.subs
  (:require
   [re-frame.core :refer [reg-sub]]))

(reg-sub
 :component-providers
 (fn
   [db _]
   (if (:show-nav db)
     (or (:component-providers db) [])
     [])))

(reg-sub
 :import-form
 (fn
   [db _]
   (:import-form db)))

