(ns warehouse.storage.orientdb
  (:require [ajax.core :refer [GET POST PUT]]
            [goog.crypt.base64 :as base64]))
;db setup:
;=========
;
;CREATE CLASS AppState EXTENDS V
;CREATE VERTEX AppState CONTENT {"components": []}

(def parameters {:server "localhost"
                 :port "2480"
                 :scheme "http"
                 :db "warehouse-dev"
                 :user "root"
                 :password "root"})

(def rid nil)

(def endpoint (str (:scheme parameters)
     "://"
     (:server parameters)
     ":"
     (:port parameters)))

(defn store-state [state]
  (PUT (str endpoint "/document/" (:db parameters)) {:params {"@rid" rid
                                                              :components (:components state)
                                                              "@class" "AppState"}
                                                     :format :json
                                                     :keywords? true
                                                     :headers {"Content-Type" "application/json"
                                                               "Authorization" (str "Basic " (base64/encodeString (str (:user parameters) ":" (:password parameters))))}}))

(defn load-state [handler error-handler]
  (GET (str endpoint "/query/" (:db parameters) "/SQL/SELECT FROM AppState/1") {:handler (fn [response]
                                                                                           (let [document (first (:result response))]
                                                                                             (def rid ((keyword "@rid") document))
                                                                                             (handler document)))
                                                                                :error-handler error-handler
                                                                                :keywords? true
                                                                                :response-format :json
                                                                                :headers {"Content-Type" "application/json"
                                                                                         "Authorization" (str "Basic " (base64/encodeString (str (:user parameters) ":" (:password parameters))))}}))

