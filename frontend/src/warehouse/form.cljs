(ns warehouse.form
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [imatic.re-frame.form.subs :as isubs]
   [imatic.re-frame.form.events :as ievents]))

(defn field
  "Reagent component constructing form field.

  `props` is a map with keys:
    - :component Component to render
    - :path Path of the field in the form.
    - :field-props Props passed to the element in :component
    - :form-id Id of the form"
  [props & children]
  (let [path (:path props)
        error @(re-frame/subscribe [::isubs/field-error (:form-id props) path])
        field-value @(re-frame/subscribe [::isubs/field-value (:form-id props) path])]
    [:div {:style {:display "inline-block"}}
     [(:component props) (merge {:default-value field-value
                                 :on-change (fn [e]
                                              (re-frame/dispatch [::ievents/update-field
                                                                  (:form-id props)
                                                                  path
                                                                  (.-target.value e)]))}
                                (:field-props props))]
     (when (some? error)
       [:ul [:li.error error]])]))

(defn form-fields
  "Reagent component which wraps the form fields.

  `props` is a map with keys:
    - `:id` Id of the form
    - `:initial-data`
  `form-ui` is a reagent component which will be passed following props:
    - `:field-props` Function constructing field props
    - `:form-id` Id of the form"
  [props form-ui]
  (reagent/with-let [_ (re-frame/dispatch [::ievents/init-form (select-keys props [:id :initial-data])])
                     initialized? (re-frame/subscribe [::isubs/initialized? (:id props)])]
    (when @initialized?
      [form-ui {:field-props (partial merge {:form-id (:id props)})
                :form-id (:id props)}])))
