(ns app.middleware)

(defn options-middleware [handler]
  (fn [request]
    (if (= :options (:request-method request))
      {:status 200
       :headers {"Access-Control-Allow-Origin" "*"
                 "Access-Control-Allow-Headers" "Content-Type"}}
      (let [response (handler request)]
        (assoc-in response [:headers "Access-Control-Allow-Origin"] "*")))))

(defn wrap-component-handler [component-handler]
  (fn [request]
    (let [components (component-handler request)
          response (if (empty? components)
                     {:status 404}
                     {:status 200
                      :body components})]
      response)))
