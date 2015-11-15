(ns ^:figwheel-always warehouse.core
  (:require
    [reagent.core :as reagent :refer [atom]]
    lunr))

(enable-console-print!)

(defonce app-state (atom {:components {
                                       1 {:id 1
                                          :name "EPR212A408000Z"
                                          :tags ["optocoupler"]
                                          :amount 7}
                                       2 {:id 2
                                          :name "2N3904"
                                          :tags ["transistor"]
                                          :amount 8}
                                       3 {:id 3
                                          :name "LF33CV"
                                          :tags ["linear regulator"]
                                          :amount 10}
                                       4 {:id 4
                                          :name "BD241C"
                                          :tags ["transistor"]
                                          :amount 4}
                                       5 {:id 5
                                          :name "HC49/US QM 16.000MHZ"
                                          :tags ["crystal" "oscillator"]
                                          :amount 1}
                                       6 {:id 6
                                          :name "MCP23016-I/SP PDIP28 MICROCHIP"
                                          :tags ["io" "expander"]
                                          :amount 1}
                                       7 {:id 7
                                          :name "KONPC-SPK-3"
                                          :tags ["connector"]
                                          :amount 10}
                                       8 {:id 8
                                          :name "KONPC-SPK-2"
                                          :tags ["connector"]
                                          :amount 14}
                                       9 {:id 9
                                          :name "KONPC-SPK-1"
                                          :tags ["connector"]
                                          :amount 15}
                                       10 {:id 10
                                           :name "KONPC-SKP-4"
                                           :tags ["connector"]
                                           :amount 5}
                                       11 {:id 11
                                           :name "BTK10G"
                                           :tags ["connector"]
                                           :amount 8}
                                       12 {:id 12
                                           :name "BL820GD"
                                           :tags ["connector"]
                                           :amount 25}
                                       13 {:id 13
                                           :name "AVRProg USB v3"
                                           :tags ["rs232", "serial", "usb"]
                                           :amount 1}
                                       14 {:id 14
                                           :name "Micro USB B"
                                           :tags ["connector" "micro usb" "usb"]
                                           :amount 3}
                                       15 {:id 15
                                           :name "S1G20"
                                           :tags ["connector"]
                                           :amount 8}
                                       16 {:id 16
                                           :name "S1G8"
                                           :tags ["connector"]
                                           :amount 1}
                                       17 {:id 17
                                           :name "S1G3"
                                           :tags ["connector"]
                                           :amount 1}
                                       18 {:id 18
                                           :name "S2G20"
                                           :tags ["connector"]
                                           :amount 10}
                                       19 {:id 19
                                           :name "KONPC-SPK-PI"
                                           :tags ["connector"]
                                           :amount 35}
                                       20 {:id 20
                                           :name "USB PCB 2AW"
                                           :tags ["connector"]
                                           :amount 6}
                                       21 {:id 21
                                           :name "USB1X90A PCB"
                                           :tags ["connector"]
                                           :amount 3}
                                       22 {:id 22
                                           :name "USB PCB AW"
                                           :tags ["connector"]
                                           :amount 3}
                                       23 {:id 23
                                           :name "CMM 5/3SQ"
                                           :tags ["connector"]
                                           :amount 4}
                                       24 {:id 24
                                           :name "USB AM PCB"
                                           :tags ["connector"]
                                           :amount 4}
                                       25 {:id 25
                                           :name "ST-214-C-06"
                                           :tags ["jack" "audio"]
                                           :amount 3}
                                       26 {:id 26
                                           :name "USB A/C SET2"
                                           :tags ["connector" "usb"]
                                           :amount 10}
                                       27 {:id 27
                                           :name "KMOC3063"
                                           :tags ["optocoupler"]
                                           :amount 6}
                                       28 {:id 28
                                           :name "78M05-DPAK"
                                           :tags ["linear regulator"]
                                           :amount 9}}
                          :filter {:val ""
                                   :search []}}))

(def index (.lunr js/window (fn []
                     (this-as this
                              (.field this "name")
                              (.field this "tags")))))

(defn form [item]
  [:div
   [:label "Name: "
    [:input {:name "name"
             :type "text"
             :value (:name @item)
             :on-change (fn [e]
                          (swap! item assoc-in [:name] (.-target.value e)))}]]
  [:div
   [:label "Tags: "
    [:input {:name "tags"
             :type "text"
             :value (:tags @item)
             :on-change (fn [e]
                          (swap! item assoc-in [:tags] (.-target.value e)))}]]]
  [:div
   [:label "Amount: "
    [:input {:name "amount"
             :type "number"
             :value (:amount @item)
             :on-change (fn [e]
                          (swap! item assoc-in [:amount] (.-target.value e)))}]]]])

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
         [:span.value (clojure.string/join ", " (:tags data))]]
        [:li
         [:span.label "Amount: "]
         [:span.value (:amount data)]]
        [:button {:on-click #(reset! editing true)} "Edit"]]
       (when @editing
         (let [edited-item (atom (assoc-in data [:tags] (clojure.string/join ", " (:tags data))))]
           [:form
            [form edited-item]
            [:button {:type "button"
                      :on-click (fn []
                                  (swap! app-state assoc-in [:components k]
                                         (assoc-in
                                           @edited-item
                                           [:tags]
                                           (mapv clojure.string/trim (clojure.string/split (:tags @edited-item) #","))))
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

(defn page []
  (let [adding (atom false)
        new-item (atom {:name "" :tags "" :amount 1})]
    (fn []
      [:div
       [:label "Search: "
        [:input {:name "search",
                 :type "search"
                 :on-change (fn [e]
                              (swap! app-state assoc-in [:filter :val] (.-target.value e))
                              (swap! app-state assoc-in [:filter :search] (js->clj (.search index (.-target.value e)))))}]]
         (if (true? @adding)
           [:form
             [form new-item]
             [:button {:type "button"
                       :on-click (fn []
                                   (let [k (inc (apply max (keys (:components @app-state))))]
                                     (swap! app-state assoc-in [:components k] (assoc @new-item :id k :tags (mapv clojure.string/trim (clojure.string/split (:tags @new-item) #",")))))
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

(add-watch app-state nil (fn [k ns os]
  (doseq [[k component] (:components @ns)]
    (.update index (clj->js {:id (:id component)
                          :name (:name component)
                          :tags (:tags component)})))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

