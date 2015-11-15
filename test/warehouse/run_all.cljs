(ns warehouse.run-all
  (:require [cljs.test :refer-macros [run-all-tests run-tests]]
            [warehouse.function-test]))

(enable-console-print!)

(run-all-tests #"warehouse.*-test")

