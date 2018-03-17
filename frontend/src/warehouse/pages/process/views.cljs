(ns warehouse.pages.process.views
  (:require
   [re-frame.core :refer [subscribe]]
   [warehouse.pages.process.events]
   [warehouse.pages.process.subs]))

(def process-data
  [["Title" #(:title %)]
   ["State" #(:state %)]
   ["Created at" #(:created-at %)]
   ["Finished at" #(:finished-at %)]])

(defn process [p]
  [:tr
   (map-indexed (fn [i [_ f]]
                  ^{:key i} [:td (f p)]) process-data)])

(defn processes []
  (let [data (subscribe [:processes])]
    (fn []
      [:table.processes
       [:thead
        [:tr
         (map-indexed (fn [i [title _]]
                        ^{:key i} [:th title]) process-data)]]
       [:tbody
        (for [[_ p] @data]
          ^{:key (:id p)} [process p])]])))
