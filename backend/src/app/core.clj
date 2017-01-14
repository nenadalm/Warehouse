(ns app.core
  (:require [clojure.data.json :as json]
            [schema.core :as s]
            [app.provider.ges])
  (:use [ring.middleware.params :refer [wrap-params]]
        [ring.middleware.json :refer [wrap-json-params]]
        [compojure.api.sweet]
        [clj-webdriver.taxi]
        [app.provider]
        [app.schema])
  (:import [app.provider.ges Ges]))

(set-driver! {:browser :phantomjs})
(set-finder! xpath-finder)

(defn options-handler [request]
  {:status 200
   :headers {"Access-Control-Allow-Origin" "*"
             "Access-Control-Allow-Headers" "Content-Type"}})

(def providers {:ges (Ges.)})

(defapi app-api
  (swagger-routes)
  (context "/handler" []
           (GET "/"
                []
                {:summary "Retrieves list of components providers"
                 :description "Retrieves list of components providers"
                 :responses {200 {:schema [ProviderDescription]
                                  :description "List of components providers"}}}
                {:status 200
                 :body [(get-description (:ges providers))]})
           (OPTIONS "/:type"
                    []
                    :no-doc true
                    options-handler)
           (create-handler (:ges providers))))

(def app (-> app-api
             (wrap-json-params)
             (wrap-params)))

