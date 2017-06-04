(ns warehouse.routes
  (:require
   [re-frame.core :refer [dispatch]]
   [secretary.core :as secretary :refer-macros [defroute]]))

(secretary/set-config! :prefix "#")

(defroute homepage "/" []
  (dispatch [:page-change "index"]))
(defroute processes "/processes" []
  (dispatch [:page-change "processes"]))

