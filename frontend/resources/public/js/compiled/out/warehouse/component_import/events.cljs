(ns warehouse.component-import.events
  (:require
   [warehouse.util :as util]
   [warehouse.storage.indexeddb :as indexeddb]
   [re-frame.core :refer [reg-event-db reg-event-fx reg-fx dispatch]]
   [ajax.core :refer [GET]]
   [cljs.core.async :as a :refer [<!]]
   [clojure.string :as string])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(defn- handler-item->form-type [{:keys [secret type]}]
  (cond
    (and secret (= "string" type)) "password"
    (= "string" type) "text"))

(defn- handler-item->form-item [{:keys [name] :as handler-item}]
  {:name name
   :type (handler-item->form-type handler-item)
   :label (string/capitalize name)})

(defn- handler->form [provider]
  {:action (:action provider)
   :fields (mapv handler-item->form-item (:params provider))})

(reg-event-fx
 :load-providers
 (fn [{:keys [db]} _]
   {:dispatch [:process-create {:type :xhr
                                :url (str (:backend-url db) "/handler")
                                :title "Getting list of import handlers"
                                :name :import-handlers}]}))

(reg-event-db
 :import-providers
 (fn [db [_ providers]]
   (assoc db :component-providers providers)))

(reg-event-db
 :import
 (fn [db [_ provider]]
   (assoc db
          :import-form
          (handler->form provider))))

(reg-event-db
 :import-cancel
 (fn [db _]
   (dissoc db :import-form)))

(reg-event-fx
 :import-document
 (fn
   [{:keys [db]} [_ document]]
   {:component-import/load-components-by-ids [(map :id (:components document)) document]}))

(reg-fx
 :component-import/load-components-by-ids
 (fn [[ids document]]
   (let [ch (indexeddb/load-components-by-ids ids)]
     (go (if-let [components (<! ch)]
           (dispatch [:component-import/components-loaded components document]))))))

(reg-event-fx
 :component-import/components-loaded
 (fn [_ [_ existing-components document]]
   (let [merged (util/merge-documents {:components existing-components} document)
         old-components (:components (util/document->state {:components existing-components} {}))
         new-components (:components (util/document->state merged {}))]
     {:store-components (:components merged)
      :dispatch [:components-change old-components new-components]})))

(reg-fx
 :store-components
 (fn [components]
   (let [ch (indexeddb/store-components components)]
     (go (<! ch)
         (dispatch [:filter-refresh])))))
