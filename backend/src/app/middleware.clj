(ns app.middleware)

(defn wrap-component-handler [component-handler]
  (fn [request]
    (let [components (component-handler request)
          response (if (empty? components)
                     {:status 404}
                     {:status 200
                      :body components})]
      (assoc-in response [:headers "Access-Control-Allow-Origin"] "*"))))

