(ns warehouse.core
  (:require [clojure.data.json :as json])
  (:use [ring.middleware.params]
        [clj-webdriver.taxi]))

(set-driver! {:browser :phantomjs})
(set-finder! xpath-finder)

(defn ges-handler [request]
  (try
    (let [params (assoc (:form-params request)
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

(defn handler [request]
  (let [components (ges-handler request)]
    (if (empty? components)
      {:status 404}
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/write-str components)})))

(def app (-> handler
             wrap-params))

