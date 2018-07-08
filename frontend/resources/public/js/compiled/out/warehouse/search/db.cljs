(ns warehouse.search.db
  (:require
   [clojure.string :as string]))

(defn filter-active? [db]
  (not (string/blank? (get-in db [:filter :val]))))

(defn filter-search [db]
  (get-in db [:filter :search]))
