(ns warehouse.routes
  (:require
   [re-frame.core :refer [dispatch]]
   [bidi.bidi :as bidi]
   [goog.history.EventType :as EventType]
   [goog.History]
   [goog.events]))

(def routes ["" {#{""  "/"} :index
                 "/processes" :processes
                 true :not-found}])

(defn path-for [page]
  (bidi/path-for routes page))

(defn handler [{:keys [handler]}]
  (dispatch [:page-change handler]))

(defn init []
  (defonce history (doto (goog.History.)
                     (goog.events/listen EventType/NAVIGATE #(handler (bidi/match-route routes (.-token %))))
                     (.setEnabled true)))

  (defn nav! [token]
    (.setToken history token)))
