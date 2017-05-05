(ns app.provider.ges
  (:require [schema.core :as s])
  (:use [compojure.api.sweet]
        [clj-webdriver.taxi]
        [app.schema]
        [app.middleware]
        [app.provider]))

(s/defschema Request {:username s/Str
                      :password s/Str
                      :url s/Str})

(defn- testing-ges-handler- [request]
  (let [params (:params request)]
    [{:name (:username params)
      :amount 1}]))

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

(defn- create-handler- [handler]
  (POST "/ges"
        []
        {:summary "Retrieves components from http://www.ges.cz"
         :description "Retrieves components from http://www.ges.cz"
         :body [params (s/maybe Request)]
         :responses {200 {:schema [Component]
                          :description "Components to be returned"}
                     404 {:description "No components found"}}}
        (wrap-component-handler handler)))

(defn ges-description [host]
  {:type "ges"
   :homepage "http://www.ges.cz"
   :icon "http://www.ges.cz/favicon.ico"
   :action (str host "/handler/ges")
   :params [{:name "username"
             :type "string"
             :secret false}
            {:name "password"
             :type "string"
             :secret true}
            {:name "url"
             :type "string"
             :secret false}]})

(defrecord Ges []
  Provider
  (get-description [_ host] (ges-description host))
  (create-handler [_] (create-handler- ges-handler-))
  (create-handler-mocked [_] (create-handler- testing-ges-handler-)))

