(ns warehouse.function-test
  (:require-macros [cljs.test :refer [deftest is]])
  (:use [cljs.test :only [do-report]]
        [warehouse.function :only [get-updated-items]]))

(deftest get-updated-items-test
  (is (empty? (get-updated-items
                {0 {:k "v"}
                 1 {:k "c"}}

                {0 {:k "v"}
                 1 {:k "c"}})))
  (is (= {0 {:k "v-updated"}}
         (get-updated-items
                {0 {:k "v-updated"}
                 1 {:k "c"}}

                {0 {:k "v"}
                 1 {:k "c"}}))))

