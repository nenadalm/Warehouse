(ns ^:figwheel-always warehouse.core
  (:require
    [reagent.core :as reagent :refer [atom]]
    lunr))

(enable-console-print!)

(defonce app-state (atom {:components [
                                       {:name "EPR212A408000Z"
                                        :tags ["optocoupler"]
                                        :amount 7}
                                       {:name "2N3904"
                                        :tags ["transistor"]
                                        :amount 8}
                                       {:name "LF33CV"
                                        :tags ["linear regulator"]
                                        :amount 10}
                                       {:name "BD241C"
                                        :tags ["transistor"]
                                        :amount 4}
                                       {:name "HC49/US QM 16.000MHZ"
                                        :tags ["crystal" "oscillator"]
                                        :amount 1}
                                       {:name "MCP23016-I/SP PDIP28 MICROCHIP"
                                        :tags ["io" "expander"]
                                        :amount 1}
                                       {:name "KONPC-SPK-3"
                                        :tags ["connector"]
                                        :amount 10}
                                       {:name "KONPC-SPK-2"
                                        :tags ["connector"]
                                        :amount 14}
                                       {:name "KONPC-SPK-1"
                                        :tags ["connector"]
                                        :amount 15}
                                       {:name "KONPC-SKP-4"
                                        :tags ["connector"]
                                        :amount 5}
                                       {:name "BTK10G"
                                        :tags ["connector"]
                                        :amount 8}
                                       {:name "BL820GD"
                                        :tags ["connector"]
                                        :amount 25}
                                       {:name "AVRProg USB v3"
                                        :tags ["rs232", "serial", "usb"]
                                        :amount 1}
                                       {:name "Micro USB B"
                                        :tags ["connector" "micro usb" "usb"]
                                        :amount 3}
                                       {:name "S1G20"
                                        :tags ["connector"]
                                        :amount 8}
                                       {:name "S1G8"
                                        :tags ["connector"]
                                        :amount 1}
                                       {:name "S1G3"
                                        :tags ["connector"]
                                        :amount 1}
                                       {:name "S2G20"
                                        :tags ["connector"]
                                        :amount 10}
                                       {:name "KONPC-SPK-PI"
                                        :tags ["connector"]
                                        :amount 35}
                                       {:name "USB PCB 2AW"
                                        :tags ["connector"]
                                        :amount 6}
                                       {:name "USB1X90A PCB"
                                        :tags ["connector"]
                                        :amount 3}
                                       {:name "USB PCB AW"
                                        :tags ["connector"]
                                        :amount 3}
                                       {:name "CMM 5/3SQ"
                                        :tags ["connector"]
                                        :amount 4}
                                       {:name "USB AM PCB"
                                        :tags ["connector"]
                                        :amount 4}
                                       {:name "ST-214-C-06"
                                        :tags ["jack" "audio"]
                                        :amount 3}
                                       {:name "USB A/C SET2"
                                        :tags ["connector" "usb"]
                                        :amount 10}
                                       {:name "KMOC3063"
                                        :tags ["optocoupler"]
                                        :amount 6}
                                       {:name "78M05-DPAK"
                                        :tags ["linear regulator"]
                                        :amount 9}]
                          :filtered-components []}))

(swap! app-state assoc-in [:filtered-components] (:components @app-state))
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
    (fn [data]
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

(defn page []
  [:div
   [:label "Search: "
    [:input {:name "search",
             :type "search"
             :on-change (fn [e]
                          (swap! app-state assoc :filtered-components
                                 (if (clojure.string/blank? (.-target.value e))
                                   (:components @app-state)
                                   (loop [indexes (map #(get % "ref") (js->clj (.search index (.-target.value e))))
                                         res []]
                                     (if (empty? indexes)
                                       res
                                       (recur (rest indexes) (conj res (nth (:components @app-state) (first indexes)))))))))}]]
   [:button "Add new"]
   (for [[k v] (map vector (iterate inc 0) (:filtered-components @app-state))]
     ^{:key (:name v)} [item v k])])

(reagent/render-component [page]
                          (.getElementById js/document "app"))

(doseq [[k component] (map vector (iterate inc 0) (:components @app-state))]
  (.add index (clj->js {:id k
                        :name (:name component)
                        :tags (:tags component)})))

(aset js/window "index" index)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

