(ns warehouse.index
  (:require
   [warehouse.search.db :as search-db]
   [reagent.core :as r]
   [re-frame.db :as db]
   [re-frame.core :refer [dispatch subscribe]]))

(defn reset-infinite-scroll []
  (let [visible-components @(subscribe [:visible-components])]
    (dispatch [:reset-infinite-scroll])))

(defn initialize []
  #_(r/track! reset-infinite-scroll))
