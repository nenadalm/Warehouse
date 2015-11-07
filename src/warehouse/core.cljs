(ns ^:figwheel-always warehouse.core
    (:require
              [reagent.core :as reagent :refer [atom]]))

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
                                        :amount 9}]}))

(defn item [data]
  [:ul
   [:li
    [:span.label "Name: "]
    [:span.value (:name data)]]
   [:li
    [:span.label "Tags: "]
    [:span.value (clojure.string/join ", " (:tags data))]]
   [:li
    [:span.label "Amount: "]
    [:span.value (:amount data)]]
   [:button "Edit"]])

(defn page []
  [:div
   [:label "Search: "
    [:input {:name "search", :type "search"}]]
   [:button "Add new"]
   (for [i (:components @app-state)]
     ^{:key i} [item i])])

(reagent/render-component [page]
                          (. js/document (getElementById "app")))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

