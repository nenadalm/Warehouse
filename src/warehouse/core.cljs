(ns ^:figwheel-always warehouse.core
  (:require
    [reagent.core :as reagent :refer [atom]]
    [warehouse.storage.test :as storage]
    [alandipert.storage-atom :refer [local-storage]]
    lunr
    [warehouse.util :as util]
    [secretary.core :as secretary :refer-macros [defroute]]
    [re-frame.core :refer [subscribe reg-event-db dispatch dispatch-sync]]
    [re-frame.db :as db]
    [warehouse.subs]
    [warehouse.events])
  (:require-macros [warehouse.macro :as m]))

(enable-console-print!)
(secretary/set-config! :prefix "#")

(defroute app-homepage "/" []
  (dispatch [:page-change "index"]))
(defroute app-processes "/processes" []
  (dispatch [:page-change "processes"]))

(secretary/dispatch! (.-hash js/location))
(.addEventListener js/window "hashchange" (fn [e]
                                            (secretary/dispatch! (.-hash js/location))))

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

(reg-event-db
  :initialize-db
  (fn [_ _]
    (storage/load-state (fn [response]
                          (util/document->state
                            response
                            {:components {}
                             :filter {:val ""
                                      :search []}
                             :notifications [{:type :error
                                              :message "Something bad happened"}
                                             {:type :success
                                              :message "Something good happened"}]
                             :page "index"}))
                        nil)))

(add-watch db/app-db :storeer (fn [k r os ns]
                                (storage/store-state (util/state->document ns))))

(defn form [item]
  [:div
   [:label "Name: "
    [:input {:name "name"
             :type "text"
             :value (:name @item)
             :on-change (m/handler-fn
                          (swap! item assoc :name (.-target.value e)))}]]
   [:div
    [:label "Tags: "
     [:input {:name "tags"
              :type "text"
              :value (:tags @item)
              :on-change (m/handler-fn
                           (swap! item assoc :tags (.-target.value e)))}]]]
   [:div
    [:label "Amount: "
     [:input {:name "amount"
              :type "number"
              :value (:amount @item)
              :on-change (m/handler-fn
                           (swap! item assoc :amount (.-target.value e)))}]]]])

(defn key->label [key]
  (get {:name "Name"
        :tags "Tags"
        :amount "Amount"}
       key))

(defn key->transformer [key]
  (if (= key :tags)
    #(util/array->string %)
    identity))

(defn property-view [data property]
  [:li
   [:span.label (str (key->label property) ": ")]
   [:span.value ((key->transformer property) (get data property))]])

(defn item-view [data editing]
  [:ul
   (property-view data :name)
   (property-view data :tags)
   (property-view data :amount)
   [:button {:on-click (m/handler-fn (reset! editing true))} "Edit"]])

(defn item-edit-view [data editing k]
  (let [edited-item (atom (assoc data :tags (util/array->string (:tags data))))]
    [:form
     [form edited-item]
     [:button {:type "button"
               :on-click (m/handler-fn
                           (dispatch [:item-save k @edited-item])
                           (reset! editing false))} "Save"]
     [:button {:type "button" :on-click (m/handler-fn (reset! editing false))} "Cancel"]]))

(defn item [data k]
  (let [editing (atom false)]
    (fn [data k]
      [:div
       (if (false? @editing)
         (item-view data editing)
         (item-edit-view data editing k))])))

(defn notification [n k]
  (let [type (:type n)
        message (:message n)]
    [:div {:class (str "notification notification-" (name type))}
     [:div {:class "message"} message]
     [:button {:type "button"
               :class "close"
               :on-click (m/handler-fn
                           (dispatch [:notification-close k]))} "X"]]))

(defn notifications []
  (let [notifications (subscribe [:notifications])]
    (fn
      []
      (when (not (empty? @notifications))
        [:div {:class "notifications"}
         (for [[k n] (map list (range (count @notifications)) @notifications)]
           ^{:key n} [notification n k])]))))

(defn file-input [name f]
  [:button
   [:label
    [:input {:type "file"
             :on-change f}]
    name]])

(defn raw-property-view [value property]
  ^{:key property} [:li
                    [:span.label (str (key->label property) ": ")]
                    [:span.value ((key->transformer property) value)]])

(defn model->view [value]
  (cond
    (set? value) (util/array->string value)
    :else value))

(defn raw-property-changeset-view [values property]
  ^{:key property} [:li
                    [:span.label (str (key->label property) ": ")]
                    [:span.value
                     [:span.old (model->view (first values))]
                     [:span.new (model->view (second values))]]])

(defmulti show-change-set (fn [change-set] (:type change-set)))

(defmethod show-change-set :create [{change-set-data :data} k]
  ^{:key k} [:ul.change-set
             (map (fn [component k]
                    ^{:key k} [:li.component
                               (let [data (:data component)
                                     metadata (:metadata component)]
                                 [:ul
                                  [:li (str "Name: " (:name metadata))]
                                  [:li "Data:"
                                   [:ul
                                    (map (fn [[k v] kvs]
                                           (if-not (= k :id)
                                             ^{:key k} (raw-property-view v k)))
                                         data)]]
                                  [:button {:on-click (m/handler-fn
                                                        (dispatch [:revert-change :create metadata]))} "Revert"]])]
                    )
                  change-set-data
                  (range (count change-set-data) 0 -1))])

(defmethod show-change-set :update [{change-set-data :data} k]
  ^{:key k} [:ul.change-set
             (map (fn [component k]
                    ^{:key k} [:li.component
                               (let [data (:data component)
                                     metadata (:metadata component)]
                                 [:ul
                                  [:li (str "Name: " (:name metadata))]
                                  [:li "Data:"
                                   [:ul
                                    (map (fn [[k v] kvs]
                                           (if-not (= k :id)
                                             (raw-property-changeset-view v k)))
                                         data)]]
                                  [:button {:on-click (m/handler-fn
                                                        (dispatch [:revert-change :update metadata data]))} "Revert"]])])
                  change-set-data
                  (range (count change-set-data) 0 -1))])

(defn search []
  [:label "Search: "
   [:input {:name "search"
            :type "search"
            :on-change (m/handler-fn (dispatch [:filter-update (.-target.value e) index]))}]])

(defn export []
  [:a {:href (->> @(subscribe [:state])
                  (util/state->document)
                  (clj->js)
                  (.stringify js/JSON)
                  (.encodeURIComponent js/window)
                  (str "data:text/json;charset=utf-8,"))
       :download "warehouse_components.json"
       }
   [:button "Export"]])

(defn import []
  [file-input "Import" (m/handler-fn
                         (let [reader (js/FileReader.)
                               this (aget e "currentTarget")]
                           (aset reader
                                 "onload"
                                 (fn [reader-event]
                                   (dispatch
                                     [:state-loaded
                                      (->> (.-target.result reader-event)
                                           (.parse js/JSON)
                                           (#(js->clj % :keywordize-keys true))
                                           (util/merge-documents (util/state->document @(subscribe [:state]))))])
                                   (aset this "value" "")))
                           (.readAsText reader (aget e "target" "files" "0"))))])

(defn component-list []
  (let [adding (atom false)
        showing-changeset (atom false)
        new-item (atom {:name "" :tags "" :amount 1})
        visible-components (subscribe [:visible-components])]
    (fn []
      [:div
       [search]
       [export]
       [import]
       (if (false? @adding)
         [:button {:on-click (m/handler-fn
                               (reset! adding true))} "Add new"])
       [:button {:on-click (m/handler-fn
                             (reset! showing-changeset (if (true? @showing-changeset) false true)))}
        (if (true? @showing-changeset) "Hide changes" "Show changes")]
       (if (true? @adding)
         [:form
          [form new-item]
          [:button {:type "button"
                    :on-click (m/handler-fn
                                (dispatch [:item-create @new-item])
                                (reset! new-item {:name "" :tags "" :amount 1})
                                (reset! adding false))} "Save"]
          [:button {:type "button" :on-click (m/handler-fn (reset! adding false))} "Cancel"]])
       (when (true? @showing-changeset)
         (let [cs @change-sets
               k1 (range (count cs) 0 -1)]

           (map (fn [change-set-col k2]
                  (map show-change-set
                       change-set-col
                       (map #(str k2 "." %) (range (count change-set-col) 0 -1))))
                cs
                k1)))
       [:ul {:class "components-list"}
        (for [[k v] @visible-components]
          ^{:key (:name v)} [:li {:class "component"}
                             [item v k]])]])))


(defn process [p]
  [:tr
   [:td (:title p)]
   [:td (:state p)]
   [:td (:created-at p)]])

(defn processes []
  (let [data {:title "Retrieving data from url"}]
    (fn []
      [:table
       [:thead
        [:tr
         [:th "Title"]
         [:th "State"]
         [:th "Created at"]]]
       [:tbody
        [process data]
        [process data]
        [process data]
        [process data]]])))

(defn page []
  (let [active-tab (subscribe [:active-tab])]
    [:div
     [notifications]
     [:ul
      [:li [:a {:href (app-homepage)} "List"]]
      [:li [:a {:href (app-processes)} "Processes"]]]
     (case @active-tab
       "index" [component-list]
       "processes" [processes])]))

(dispatch-sync [:initialize-db])
(reagent/render-component [page]
                          (.getElementById js/document "app"))

(doseq [[k component] (:components @db/app-db)]
  (.add index (clj->js {:id (:id component)
                        :name (:name component)
                        :tags (:tags component)})))

(add-watch db/app-db :indexer (fn [k r os ns]
                                (when-not (identical? (:components os) (:components ns))
                                  (update-index index ns)
                                  (dispatch [:filter-update (get-in ns [:filter :val]) index]))))

(add-watch db/app-db :change-set (fn [k r os ns]
                                   (let [cs (util/get-change-set (:components os) (:components ns))]
                                     (when-not (empty? cs)
                                       (swap! change-sets #(take 10 (conj % cs)))))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

