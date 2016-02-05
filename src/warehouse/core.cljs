(ns ^:figwheel-always warehouse.core
  (:require
    [reagent.core :as reagent :refer [atom]]
    [warehouse.storage.test :as storage]
    [alandipert.storage-atom :refer [local-storage]]
    lunr
    [warehouse.util :as util]))

(enable-console-print!)

(defonce app-state (atom {:components {}
                          :filter {:val ""
                                   :search []}
                          :notifications [{:type :error
                                           :message "Something bad happened"}
                                          {:type :success
                                           :message "Something good happened"}]}))

(defonce change-sets (local-storage (atom []) :app-change-sets))

(defonce index (.lunr js/window (fn []
                                  (this-as this
                                           (.field this "name")
                                           (.field this "tags")))))

(defn update-index [index ns]
  (doseq [[k component] (:components ns)]
    (.update index (clj->js {:id (:id component)
                             :name (:name component)
                             :tags (:tags component)}))))

(defn- on-state-load [response]
  (reset! app-state (util/document->state response @app-state)))

(storage/load-state (fn [response]
                      (on-state-load response)
                      (add-watch app-state :change-set (fn [k r os ns]
                                                         (let [cs (util/get-change-set (:components os) (:components ns))]
                                                           (if-not (empty? cs)
                                                             (swap! change-sets conj cs))))))
                    nil)


(add-watch app-state :storeer (fn [k r os ns]
                                (storage/store-state (util/state->document ns))))

(defn form [item]
  [:div
   [:label "Name: "
    [:input {:name "name"
             :type "text"
             :value (:name @item)
             :on-change (fn [e]
                          (swap! item assoc :name (.-target.value e)))}]]
   [:div
    [:label "Tags: "
     [:input {:name "tags"
              :type "text"
              :value (:tags @item)
              :on-change (fn [e]
                           (swap! item assoc :tags (.-target.value e)))}]]]
   [:div
    [:label "Amount: "
     [:input {:name "amount"
              :type "number"
              :value (:amount @item)
              :on-change (fn [e]
                           (swap! item assoc :amount (.-target.value e)))}]]]])

(defn item [data k]
  (let [editing (atom false)]
    (fn [data k]
      [:div
       [:ul {:class (when @editing "hide")}
        [:li
         [:span.label "Name: "]
         [:span.value (:name data)]]
        [:li
         [:span.label "Tags: "]
         [:span.value (util/array->string (:tags data))]]
        [:li
         [:span.label "Amount: "]
         [:span.value (:amount data)]]
        [:button {:on-click #(reset! editing true)} "Edit"]]
       (when @editing
         (let [edited-item (atom (assoc data :tags (util/array->string (:tags data))))]
           [:form
            [form edited-item]
            [:button {:type "button"
                      :on-click (fn []
                                  (swap! app-state assoc-in [:components k]
                                         (assoc
                                           @edited-item
                                           :tags
                                           (util/string->array (:tags @edited-item))))
                                  (reset! editing false))} "Save"]
            [:button {:type "button" :on-click #(reset! editing false)} "Cancel"]]))])))

(defn get-visible-components []
  (if (clojure.string/blank? (get-in @app-state [:filter :val]))
    (:components @app-state)
    (select-keys (:components @app-state) (map #(get % "ref") (get-in @app-state [:filter :search])))))

(defn notification [n k]
  (let [type (:type n)
        message (:message n)]
    [:div {:class (str "notification notification-" (name type))}
     [:div {:class "message"} message]
     [:button {:type "button"
               :class "close"
               :on-click (fn [e]
                           (swap! app-state assoc :notifications (concat
                                                                   (subvec (:notifications @app-state) 0 k)
                                                                   (subvec (:notifications @app-state) (inc k)))))} "X"]]))

(defn notifications []
  (let [notifications (:notifications @app-state)]
    (when (not (empty? notifications))
      [:div {:class "notifications"}
       (for [[k n] (map list (range (count notifications)) notifications)]
         ^{:key n} [notification n k])])))

(defn file-input [name f]
  [:button
  [:label
   [:input {:type "file"
            :on-change f}]
   name]])

(defn page []
  (let [adding (atom false)
        new-item (atom {:name "" :tags "" :amount 1})]
    (fn []
      [:div
       [notifications]
       [:label "Search: "
        [:input {:name "search",
                 :type "search"
                 :on-change (fn [e]
                              (swap! app-state assoc :filter {:val (.-target.value e)
                                                              :search (js->clj (.search index (.-target.value e)))}))}]]
       [:a {:href (->> @app-state
                       (util/state->document)
                       (clj->js)
                       (.stringify js/JSON)
                       (.encodeURIComponent js/window)
                       (str "data:text/json;charset=utf-8,"))
            :download "warehouse_components.json"
            }
        [:button "Export"]]
       [file-input "Import" (fn [e]
                              (let [reader (js/FileReader.)
                                    this (aget e "currentTarget")]
                                (aset reader
                                      "onload"
                                      (fn [reader-event]
                                        (->> (.-target.result reader-event)
                                             (.parse js/JSON)
                                             (#(js->clj % :keywordize-keys true))
                                             (util/merge-documents (util/state->document @app-state))
                                             (on-state-load))
                                        (aset this "value" "")))
                                (.readAsText reader (aget e "target" "files" "0"))))]
       (if (true? @adding)
         [:form
          [form new-item]
          [:button {:type "button"
                    :on-click (fn []
                                (let [k (or (inc (apply max (keys (:components @app-state)))) 1)]
                                  (swap! app-state assoc-in [:components k] (assoc @new-item :id k :tags (util/string->array (:tags @new-item)))))
                                (reset! adding false))} "Save"]
          [:button {:type "button" :on-click #(reset! adding false)} "Cancel"]]
         [:button {:on-click (fn [e]
                               (reset! adding true))} "Add new"])
       [:ul {:class "components-list"}
        (for [[k v] (get-visible-components)]
          ^{:key (:name v)} [:li {:class "component"}
                             [item v k]])]])))

(reagent/render-component [page]
                          (.getElementById js/document "app"))

(doseq [[k component] (:components @app-state)]
  (.add index (clj->js {:id (:id component)
                        :name (:name component)
                        :tags (:tags component)})))

(add-watch app-state :indexer (fn [k r os ns]
                                (update-index index ns)))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

