(ns warehouse.process.views
  (:require
   [re-frame.core :refer [subscribe]]
   [warehouse.process.events]
   [warehouse.process.subs]))

(defn process [p]
  [:tr
   [:td (:title p)]
   [:td (:state p)]
   [:td (:created-at p)]])

(defn processes []
  (let [data (subscribe [:processes])]
    (fn []
      [:table.processes
       [:thead
        [:tr
         [:th "Title"]
         [:th "State"]
         [:th "Created at"]]]
       [:tbody
        (for [[_ p] @data]
          ^{:key (:id p)} [process p])]])))
