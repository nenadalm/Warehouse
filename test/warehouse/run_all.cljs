(ns warehouse.run-all
  (:require [cljs.test :refer-macros [run-all-tests]]
            [pjstadig.humane-test-output]
            [warehouse.util-test]
            [warehouse.events-test]
            [warehouse.notifications.db-test]))

(enable-console-print!)

(defn exit [code]
  (aset js/window "teststatus" code))

(defmethod cljs.test/report [:cljs.test/default :end-run-tests] [m]
  (if (cljs.test/successful? m)
    (do (println "Success!")
        (exit 0))
    (do (println "FAIL")
        (exit 1))))

(defn ^:export run []
  (run-all-tests #"warehouse.*-test"))

