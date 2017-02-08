(ns warehouse.views
  (:require
    [reagent.core :as reagent :refer [atom]]
    [warehouse.util :as util]
    [warehouse.routes :as routes]
    [warehouse.notifications.views :refer [notifications]]
    [warehouse.search.views :refer [search]]
    [warehouse.component-import.views :refer [import-button import-form]]
    [re-frame.core :refer [dispatch subscribe]])
  (:require-macros [warehouse.macro :as m]))

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

(defn export []
  (let [state-data-uri (subscribe [:state-data-uri])]
    (fn []
      [:a {:href @state-data-uri
           :download "warehouse_components.json"}
       [:button "Export"]])))

(defn component-list []
  (let [adding (atom false)
        showing-changeset (atom false)
        new-item (atom {:name "" :tags "" :amount 1})
        visible-components (subscribe [:visible-components])
        change-sets (subscribe [:change-sets])
        import-form-data (subscribe [:import-form])]
    (fn []
      [:div
       [search]
       [export]
       [import-button]
       (if (false? @adding)
         [:button {:on-click (m/handler-fn
                               (reset! adding true))} "Add new"])
       [:button {:on-click (m/handler-fn
                             (reset! showing-changeset (if (true? @showing-changeset) false true)))}
        (if (true? @showing-changeset) "Hide changes" "Show changes")]
       (if (not-empty @import-form-data) [import-form @import-form-data])
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

(defn nav []
  [:ul.menu
   [:li [:a {:href (routes/homepage)} "List"]]
   [:li [:a {:href (routes/processes)} "Processes"]]])


(defn page []
  (let [active-tab (subscribe [:active-tab])
        show-nav (subscribe [:show-nav])]
    (fn []
      [:div
       [notifications]
       (when @show-nav [nav])
       (case @active-tab
         "index" [component-list]
         "processes" [processes])])))

