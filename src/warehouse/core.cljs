(ns ^:figwheel-always warehouse.core
  (:require
    [reagent.core :as reagent :refer [atom]]
    [warehouse.storage.test :as storage]
    lunr)
  (:use [warehouse.function :only [string->array array->string document->state state->document]]))

(enable-console-print!)

(defonce app-state (atom {:components {}
                          :filter {:val ""
                                   :search []}
                          :notifications [{:type :error
                                           :message "Something bad happened"}
                                          {:type :success
                                           :message "Something good happened"}]}))

(def index (.lunr js/window (fn []
                     (this-as this
                              (.field this "name")
                              (.field this "tags")))))

(defn update-index [index, ns]
  (doseq [[k component] (:components @ns)]
    (.update index (clj->js {:id (:id component)
                          :name (:name component)
                          :tags (:tags component)}))))

(defn- on-state-load [response]
  (reset! app-state (document->state response @app-state)))

(storage/load-state on-state-load nil)
(add-watch app-state :storeer (fn [k ns os]
                          (storage/store-state (state->document @ns))))

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
         [:span.value (array->string (:tags data))]]
        [:li
         [:span.label "Amount: "]
         [:span.value (:amount data)]]
        [:button {:on-click #(reset! editing true)} "Edit"]]
       (when @editing
         (let [edited-item (atom (assoc data :tags (array->string (:tags data))))]
           [:form
            [form edited-item]
            [:button {:type "button"
                      :on-click (fn []
                                  (swap! app-state assoc-in [:components k]
                                         (assoc
                                           @edited-item
                                           :tags
                                           (string->array (:tags @edited-item))))
                                  (reset! editing false))} "Save"]
            [:button {:type "button" :on-click #(reset! editing false)} "Cancel"]]))])))

(defn get-visible-components []
  (if (clojure.string/blank? (get-in @app-state [:filter :val]))
    (:components @app-state)
    (loop [indexes (map #(get % "ref") (get-in @app-state [:filter :search]))
          res []]
      (if (empty? indexes)
        res
        (recur (rest indexes) (conj res [(first indexes) (get (:components @app-state) (first indexes))]))))))

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
         (if (true? @adding)
           [:form
             [form new-item]
             [:button {:type "button"
                       :on-click (fn []
                                   (let [k (if (empty? (:components @app-state))
                                             1
                                             (inc (apply max (keys (:components @app-state)))))]
                                     (swap! app-state assoc-in [:components k] (assoc @new-item :id k :tags (string->array (:tags @new-item)))))
                                   (reset! adding false))} "Save"]
             [:button {:type "button" :on-click #(reset! adding false)} "Cancel"]]
           [:button {:on-click (fn [e]
                                 (reset! adding true))} "Add new"])
       [:ul {:class "components-list"}
         (for [[k v] (get-visible-components)]
           [:li {:class "component"}
             ^{:key (:name v)} [item v k]])]])))

(reagent/render-component [page]
                          (.getElementById js/document "app"))

(doseq [[k component] (:components @app-state)]
  (.add index (clj->js {:id (:id component)
                        :name (:name component)
                        :tags (:tags component)})))

(add-watch app-state :indexer (fn [k ns os]
                           (update-index index ns)))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

