(ns warehouse.component-import.subs
  (:require
    [re-frame.core :refer [reg-sub]]))

(def component-providers [{:type :ges
                           :action "http://localhost:3000/handler/ges"
                           :params [{:name "username"
                                     :type "string"
                                     :secret false}
                                    {:name "password"
                                     :type "string"
                                     :secret true}
                                    {:name "url"
                                     :type "string"
                                     :secret false}]}])

(reg-sub
  :component-providers
  (fn
    [db _]
    (if (:show-nav db)
      component-providers
      [])))

(reg-sub
  :import-form
  (fn
    [db _]
    (:import-form db)))

