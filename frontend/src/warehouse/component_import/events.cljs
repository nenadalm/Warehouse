(ns warehouse.component-import.events
  (:require
    [warehouse.util :as util]
    [re-frame.core :refer [reg-event-db reg-event-fx dispatch]]
    [ajax.core :refer [GET]]))

(defn- handler-item->form-type [{:keys [secret type]}]
  (cond
    (and secret (= "string" type)) "password"
    (= "string" type) "text"))

(defn- handler-item->form-item [{:keys [name] :as handler-item}]
  {:name name
   :type (handler-item->form-type handler-item)
   :label (clojure.string/capitalize name)})

(defn- handler->form [provider]
  {:action (:action provider)
   :fields (mapv handler-item->form-item (:params provider))})

(reg-event-db
 :load-providers
 (fn [db _]
   (GET "http://localhost:3000/handler"
        :format :json
        :response-format :json
        :keywords? true
        :headers {"Content-Type" "application/json"}
        :handler (fn [response]
                   (dispatch [:success "Loading of import providers succeeded"])
                   (dispatch [:import-providers response]))
        :error-handler #(dispatch [:error "Loading of import providers failed"]))
   db))

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
    [cofx [_ document]]
    (let [db (:db cofx)
          new-db (util/document->state (util/merge-documents (util/state->document db) document) db)
          old-components (:components db)
          new-components (:components new-db)]
      {:db new-db
       :dispatch [:components-change old-components new-components]})))

