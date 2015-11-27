(ns warehouse.function-test
  (:require-macros [cljs.test :refer [deftest is]])
  (:use [cljs.test :only [do-report]]
        [warehouse.function :only [get-updated-items string->array array->string]]))

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

(deftest string->array-test
  (is (= (string->array "a, b ,c")
         ["a" "b" "c"])))

(deftest array->string-test
  (is (= (array->string ["a" "b" "c"])
         "a, b, c")))

