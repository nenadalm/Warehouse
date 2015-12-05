(ns warehouse.storage
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

(def endpoint (str (:scheme parameters)
     "://"
     (:server parameters)
     ":"
     (:port parameters)))

(defn store-state [state]
  (POST (str endpoint "/document/" (:db parameters)) {:params {:components (:components state)
                                                               "@class" "AppState"}
                                                     :format :json
                                                     :keywords? true
                                                     :headers {"Accept-Encoding" "gzip,deflate"
                                                               "Content-Type" "application/json"
                                                               "Authorization" (str "Basic " (base64/encodeString (str (:user parameters) ":" (:password parameters))))}}))

(defn load-state [handler error-handler]
  (GET (str endpoint "/query/" (:db parameters) "/SQL/SELECT FROM AppState/1") {:handler (fn [response]
                                                                                           (handler (first (:result response))))
                                                                                :error-handler error-handler
                                                                                :keywords? true
                                                                                :response-format :json
                                                                                :headers {"Content-Type" "application/json"
                                                                                         "Authorization" (str "Basic " (base64/encodeString (str (:user parameters) ":" (:password parameters))))}}))

