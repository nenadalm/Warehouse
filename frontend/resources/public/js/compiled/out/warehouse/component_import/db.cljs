(ns warehouse.component-import.db
  (:require
   [re-frame.core :refer [dispatch]]))

(defn load-providers [db]
  (dispatch [:load-providers])
  (assoc db :component-providers []))
