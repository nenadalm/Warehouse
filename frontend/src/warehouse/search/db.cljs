(ns warehouse.search.db
  (:require cljsjs.lunrjs))

(defn filter-active? [db]
  (not (clojure.string/blank? (get-in db [:filter :val]))))

(defn filter-search [db]
  (get-in db [:filter :search]))
