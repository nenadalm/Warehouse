(ns warehouse.core
  (:require [clojure.data.json :as json]
            [schema.core :as s])
  (:use [ring.middleware.params :refer [wrap-params]]
        [ring.middleware.json :refer [wrap-json-params]]
        [compojure.api.sweet]
        [clj-webdriver.taxi]))

(set-driver! {:browser :phantomjs})
(set-finder! xpath-finder)

(s/defschema Component {:name s/Str
                        :amount s/Int})

(s/defschema ProviderDescription {:type s/Str
                                  :homepage s/Str
                                  :icon s/Str
                                  :params [{:name s/Str
                                            :type s/Str
                                            :secret s/Bool}]})

(defn wrap-component-handler [component-handler]
  (fn [request]
    (let [components (component-handler request)
          response (if (empty? components)
                     {:status 404}
                     {:status 200
                      :body components})]
      (assoc-in response [:headers "Access-Control-Allow-Origin"] "*"))))

(defn options-handler [request]
  {:status 200
   :headers {"Access-Control-Allow-Origin" "*"
             "Access-Control-Allow-Headers" "Content-Type"}})

;;; START GES
(s/defschema Request {:username s/Str
                      :password s/Str
                      :url s/Str})

(defn- ges-handler- [request]
  (try
    (let [params (assoc (:params request)
                        :login-url "https://www.ges.cz/cz/prihlasit/")]
      (to (:login-url params))
      (input-text "//input[@name='nickname']" (:username params))
      (input-text "//input[@name='password']" (:password params))
      (click "//input[@name='login']")

      (to (:url params))
      (mapv (fn [element]
             {:name (text (find-element-under element {:xpath "td[2]"}))
              :amount (Integer/parseInt (text (find-element-under element {:xpath "td[3]"})))})
           (elements "//table[@class='final-cart']//tr[not(@class='line')]")))
    (catch Exception e [])))

(def ges-handler (POST "/ges"
                       []
                       {:summary "Retrieves components from http://www.ges.cz"
                        :description "Retrieves components from http://www.ges.cz"
                        :body [params (s/maybe Request)]
                        :responses {200 {:schema [Component]
                                         :description "Components to be returned"}
                                    404 {:description "No components found"}}}
                       (wrap-component-handler ges-handler-)))

(def ges-description {:type "ges"
                      :homepage "http://www.ges.cz"
                      :icon "http://www.ges.cz/favicon.ico"
                      :params [{:name "user"
                                :type "string"
                                :secret false}
                               {:name "password"
                                :type "string"
                                :secret true}
                               {:name "url"
                                :type "string"
                                :secret false}]})
;;; END GES

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
                 :body [ges-description]})
           (OPTIONS "/:type"
                    []
                    :no-doc true
                    options-handler)
           ges-handler))

(def app (-> app-api
             (wrap-json-params)
             (wrap-params)))

