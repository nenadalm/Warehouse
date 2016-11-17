(ns warehouse.core
  (:require [clojure.data.json :as json])
  (:use [ring.middleware.params :refer [wrap-params]]
        [ring.middleware.json :refer [wrap-json-params]]
        [clj-webdriver.taxi]))

(set-driver! {:browser :phantomjs})
(set-finder! xpath-finder)

(defn ges-handler [request]
  (try
    (let [params (assoc (:params request)
                        "login-url" "https://www.ges.cz/cz/prihlasit/")]
      (to (get params "login-url"))
      (input-text "//input[@name='nickname']" (get params "username"))
      (input-text "//input[@name='password']" (get params "password"))
      (click "//input[@name='login']")

      (to (get params "url"))
      (map (fn [element]
             {:name (text (find-element-under element {:xpath "td[2]"}))
              :amount (Integer/parseInt (text (find-element-under element {:xpath "td[3]"})))})
           (elements "//table[@class='final-cart']//tr[not(@class='line')]")))
    (catch Exception e '())))

(defn post-handler [request]
  (let [components (ges-handler request)]
    (if (empty? components)
      {:status 404}
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/write-str components)})))

(defn options-handler [request]
  {:status 200
   :headers {"Access-Control-Allow-Headers" "Content-Type"}})

(defn handler [request]
  (let [response (condp = (:request-method request)
                   :post (post-handler request)
                   :options (options-handler request)
                   {:status 404})]
    (assoc-in response [:headers "Access-Control-Allow-Origin"] "*")))

(def app (-> handler
             (wrap-json-params)
             (wrap-params)))

