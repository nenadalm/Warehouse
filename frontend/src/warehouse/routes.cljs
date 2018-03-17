(ns warehouse.routes
  (:require
   [re-frame.core :refer [dispatch]]
   [secretary.core :as secretary :refer-macros [defroute]]
   [goog.history.EventType :as EventType]
   [goog.History]
   [goog.events]))

(defroute homepage "/" []
  (dispatch [:page-change :index]))

(defroute processes "/processes" []
  (dispatch [:page-change :processes]))

(defroute not-found "*" []
  (dispatch [:page-change :not-found]))

(defn init []
  (defonce history (doto (goog.History.)
                     (goog.events/listen EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
                     (.setEnabled true)))

  (defn nav! [token]
    (.setToken history token)))
