(ns warehouse.subs
  (:require
    [warehouse.util :as util]
    [re-frame.core :refer [reg-sub]]))

(reg-sub
  :processes
  (fn
    [db _]
    (:processes db)))

(reg-sub
  :show-nav
  (fn
    [db _]
    (:show-nav db)))

(reg-sub
  :visible-components
  (fn
    [db _]
    (if (clojure.string/blank? (get-in db [:filter :val]))
      (:components db)
      (select-keys (:components db) (map #(get % "ref") (get-in db [:filter :search]))))))

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

(reg-sub
  :state-data-uri
  (fn
    [db _]
    (->> db
         (util/state->document)
         (clj->js)
         (.stringify js/JSON)
         (.encodeURIComponent js/window)
         (str "data:text/json;charset=utf-8,"))))

(reg-sub
  :change-sets
  (fn
    [db _]
    (:change-sets db)))

