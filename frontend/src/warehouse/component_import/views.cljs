(ns warehouse.component-import.views
  (:require
   [warehouse.component-import.subs]
   [warehouse.component-import.events]
   [warehouse.util :as util]
   [re-frame.core :refer [dispatch subscribe]])
  (:require-macros [warehouse.macro :as m]))

(defn- file-input [name f]
  [:button
   [:label
    [:input {:type "file"
             :on-change f}]
    name]])

(defn- component-provider [provider]
  [:li
   [:button {:on-click (m/handler-fn
                        (dispatch [:import provider]))}
    "From " (:type provider)]])

(defn import-button []
  (let [component-providers (subscribe [:component-providers])]
    (fn []
      [:div.dropdown
       {:on-click (fn [e]
                    (when (not= (.-tagName (.-target e)) "INPUT")
                      (.toggle (.-classList (.-currentTarget e)) "open")))}
       [:button "Import"]
       [:ul
        [:li
         [file-input "From file" (fn [e]
                                   (let [reader (js/FileReader.)
                                         this (aget e "currentTarget")]
                                     (aset reader
                                           "onload"
                                           (fn [reader-event]
                                             (dispatch
                                              [:import-document
                                               (->> (.-target.result reader-event)
                                                    (.parse js/JSON)
                                                    (#(js->clj % :keywordize-keys true)))])
                                             (aset this "value" "")))
                                     (.readAsText reader (aget e "target" "files" "0"))))]]
        (for [provider @component-providers]
          ^{:key (:type provider)} [component-provider provider])]])))

(defn import-form [data]
  [:form.import
   (for [item (:fields data)]
     ^{:key (:name item)} [:div
                           [:label (:label item) ": "
                            [:input {:type (:type item)
                                     :name (:name item)}]]])
   [:button {:type "button"
             :on-click (m/handler-fn
                        (let [process-data (->> "form.import"
                                                (.querySelector js/document)
                                                (new js/FormData)
                                                (util/iterator->map))]
                          (dispatch [:process-create {:type :xhr
                                                      :url (:action data)
                                                      :title "Import"
                                                      :name :import
                                                      :data process-data}])))}
    "Save"]
   [:button {:type "button"
             :on-click (m/handler-fn (dispatch [:import-cancel]))}
    "Cancel"]])

