(ns warehouse.process.db
  (:require
   [ajax.core :refer [POST]]
   [re-frame.core :refer [dispatch]]))

(defmulti run-process #(:type %))

(defmethod run-process :xhr [process]
  (POST (:url process)
        :params (:data process)
        :format :json
        :response-format :json
        :keywords? true
        :headers {"Content-Type" "application/json"}
        :handler (fn [response]
                   (dispatch [:success "Import succeeded"])
                   (dispatch [:import-document {:components response}]))
        :error-handler #(dispatch [:error "Import failed"])))
