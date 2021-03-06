(ns warehouse.storage.test)

(def components [{:id 1
                  :name "EPR212A408000Z"
                  :tags ["optocoupler"]
                  :amount 7}
                 {:id 2
                  :name "2N3904"
                  :tags ["transistor"]
                  :amount 8}
                 {:id 3
                  :name "LF33CV"
                  :tags ["linear regulator"]
                  :amount 10}
                 {:id 4
                  :name "BD241C"
                  :tags ["transistor"]
                  :amount 4}
                 {:id 5
                  :name "HC49/US QM 16.000MHZ"
                  :tags ["crystal" "oscillator"]
                  :amount 1}
                 {:id 6
                  :name "MCP23016-I/SP PDIP28 MICROCHIP"
                  :tags ["io" "expander"]
                  :amount 1}
                 {:id 7
                  :name "KONPC-SPK-3"
                  :tags ["connector"]
                  :amount 10}
                 {:id 8
                  :name "KONPC-SPK-2"
                  :tags ["connector"]
                  :amount 14}
                 {:id 9
                  :name "KONPC-SPK-1"
                  :tags ["connector"]
                  :amount 15}
                 {:id 10
                  :name "KONPC-SKP-4"
                  :tags ["connector"]
                  :amount 5}
                 {:id 11
                  :name "BTK10G"
                  :tags ["connector"]
                  :amount 8}
                 {:id 12
                  :name "BL820GD"
                  :tags ["connector"]
                  :amount 25}
                 {:id 13
                  :name "AVRProg USB v3"
                  :tags ["rs232", "serial", "usb"]
                  :amount 1}
                 {:id 14
                  :name "Micro USB B"
                  :tags ["connector" "micro usb" "usb"]
                  :amount 3}
                 {:id 15
                  :name "S1G20"
                  :tags ["connector"]
                  :amount 8}
                 {:id 16
                  :name "S1G8"
                  :tags ["connector"]
                  :amount 1}
                 {:id 17
                  :name "S1G3"
                  :tags ["connector"]
                  :amount 1}
                 {:id 18
                  :name "S2G20"
                  :tags ["connector"]
                  :amount 10}
                 {:id 19
                  :name "KONPC-SPK-PI"
                  :tags ["connector"]
                  :amount 35}
                 {:id 20
                  :name "USB PCB 2AW"
                  :tags ["connector"]
                  :amount 6}
                 {:id 21
                  :name "USB1X90A PCB"
                  :tags ["connector"]
                  :amount 3}
                 {:id 22
                  :name "USB PCB AW"
                  :tags ["connector"]
                  :amount 3}
                 {:id 23
                  :name "CMM 5/3SQ"
                  :tags ["connector"]
                  :amount 4}
                 {:id 24
                  :name "USB AM PCB"
                  :tags ["connector"]
                  :amount 4}
                 {:id 25
                  :name "ST-214-C-06"
                  :tags ["jack" "audio"]
                  :amount 3}
                 {:id 26
                  :name "USB A/C SET2"
                  :tags ["connector" "usb"]
                  :amount 10}
                 {:id 27
                  :name "KMOC3063"
                  :tags ["optocoupler"]
                  :amount 6}
                 {:id 28
                  :name "78M05-DPAK"
                  :tags ["linear regulator"]
                  :amount 9}])

(def storage
  {:store-state (fn [_])
   :load-state (fn []
                 {:components components})})

(defn- component-generator []
  (let [n (atom 0)]
    (fn []
      (swap! n inc)
      (let [nd @n]
        {:id nd
         :name (str "component" nd)
         :tags [(str "firstof" nd) (str "secondof" nd)]
         :amount (* 2 nd)}))))

(defn generated-components-storage [n]
  {:store-state (fn [_])
   :load-state (fn []
                 {:components (repeatedly n (component-generator))})})

