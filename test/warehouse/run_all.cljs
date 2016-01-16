(ns warehouse.run-all
  (:require [cljs.test :refer-macros [run-all-tests run-tests]]
            [warehouse.util-test]))

(enable-console-print!)

(defn exit [code]
  (aset js/window "testStatus" code))

(defmethod cljs.test/report [:cljs.test/default :end-run-tests] [m]
  (if (cljs.test/successful? m)
    (do (println "Success!")
        (exit 0))
    (do (println "FAIL")
        (exit 1))))

(defn ^:export run []
  (run-all-tests #"warehouse.*-test"))

