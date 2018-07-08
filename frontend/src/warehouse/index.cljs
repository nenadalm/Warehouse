(ns warehouse.index
  (:require
   [re-frame.core :refer [dispatch subscribe]]))

(defn reset-infinite-scroll []
  (dispatch [:reset-infinite-scroll]))

(defn initialize []
  #_(r/track! reset-infinite-scroll))
