(ns warehouse.component-import.events
  (:require
    [warehouse.util :as util]
    [re-frame.core :refer [reg-event-db reg-event-fx]]))

(reg-event-db
  :import
  (fn [db [_ type]]
   (assoc db
          :import-form
          [{:name "username"
            :type "text"
            :label "Username"}
           {:name "password"
            :type "password"
            :label "Password"}
           {:name "url"
            :type "text"
            :label "Url"}])))

(reg-event-db
  :import-cancel
  (fn [db _]
    (dissoc db :import-form)))

(reg-event-fx
  :import-document
  (fn
    [cofx [_ document]]
    (let [db (:db cofx)
          new-db (util/document->state (util/merge-documents (util/state->document db) document) db)
          old-components (:components db)
          new-components (:components new-db)]
      {:db new-db
       :dispatch [:components-change old-components new-components]})))

