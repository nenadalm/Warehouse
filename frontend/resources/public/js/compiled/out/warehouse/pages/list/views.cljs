(ns warehouse.pages.list.views
  (:require
   [reagent.core :as reagent :refer [atom]]
   [re-frame.core :refer [subscribe dispatch]]
   [imatic.re-frame.form.subs :as isubs]
   [warehouse.util :as util]
   [warehouse.search.views :refer [search]]
   [warehouse.component-import.views :refer [import-button import-form]]
   [warehouse.form :as form])
  (:require-macros [warehouse.macro :as m]))

(defn form-fields [{:keys [field-props]}]
  [:div
   [:div
    [:label "Name: "
     [form/field (field-props {:component :input
                               :path :name
                               :field-props {:type :text
                                             :name "name"}})]]]
   [:div
    [:label "Tags: "
     [form/field (field-props {:component :input
                               :path :tags
                               :field-props {:type :text
                                             :name "tags"}})]]]
   [:div
    [:label "Amount: "
     [form/field (field-props {:component :input
                               :path :amount
                               :field-props {:type :number
                                             :name "amount"}})]]]])

(defn export []
  [:a {:download "warehouse_components.json"
       :on-click (fn [e]
                   (set! (.-currentTarget.href e) @(subscribe [:state-data-uri])))}
   [:button "Export visible"]])

(defn key->label [key]
  (get {:name "Name"
        :tags "Tags"
        :amount "Amount"}
       key))

(defn key->transformer [key]
  (if (= key :tags)
    #(util/array->string %)
    identity))

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
     [form/form-fields
      {:id :edit-component
       :initial-data @edited-item}
      form-fields]
     [:button {:type "button"
               :on-click (m/handler-fn
                          (dispatch [:item-save k @(subscribe [::isubs/field-values :edit-component])])
                          (reset! editing false))} "Save"]
     [:button {:type "button" :on-click (m/handler-fn (reset! editing false))} "Cancel"]]))

(defn item [data k]
  (let [editing (atom false)]
    (fn [data k]
      [:div
       (if (false? @editing)
         (item-view data editing)
         (item-edit-view data editing k))])))

(defn selected-components [components]
  [:ul {:class "components-list"}
   (for [[k v] components]
     ^{:key (:name v)} [:li {:class "component"}
                        [item v k]])
   ^{:key "loading"} [:li
                      {:style {:visibility (if @(subscribe [:loading-next-components]) "visible" "hidden")}}
                      "Loading..."]])

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
                                                       (dispatch [:revert-change :create metadata]))} "Revert"]])])
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

(defn component-list []
  (let [adding (atom false)
        showing-changeset (atom false)
        new-item-initial-data {:name "" :tags "" :amount 1}
        new-item (atom new-item-initial-data)
        visible-components (subscribe [:scroll-visible-components])
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
          [form/form-fields
           {:id :new-component
            :initial-data new-item-initial-data}
           form-fields]
          [:button {:type "button"
                    :on-click (m/handler-fn
                               (dispatch [:item-create @(subscribe [::isubs/field-values :new-component])])
                               (reset! new-item new-item-initial-data)
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
       [selected-components @visible-components]])))
