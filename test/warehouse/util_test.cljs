(ns warehouse.util-test
  (:require-macros [cljs.test :refer [deftest is]])
  (:use [cljs.test :only [do-report]]
        [warehouse.util :only [get-updated-items string->array array->string document->state state->document]]))

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

(deftest document->state-test
  (is (= {:components {}
          :notifications []}
         (document->state {:components []}
                          {:components []
                           :notifications []})))
  (is (= {:components {2 {:id 2
                       :name "second-component"
                       :tags "component"
                       :amount 3}}
          :notifications []}
         (document->state {:components [{:id 2
                                        :name "second-component"
                                        :tags "component"
                                        :amount 3}]}
                          {:components {1 {:id 1
                                           :name "EPR212A408000Z"
                                           :tags ["optocoupler"]
                                           :amount 7}
                                        2 {:id 2
                                           :name "2N3904"
                                           :tags ["transistor"]
                                           :amount 8}}
                           :notifications []}))))

(deftest state->document-test
  (is (= {:components []}
         (state->document {:components {}})))
  (is (= {:components [{:id 2
                        :name "second-component"
                        :tags "component"
                        :amount 3}]}
         (state->document {:components {2 {:id 2
                                           :name "second-component"
                                           :tags "component"
                                           :amount 3}}
                           :notifications []}))))

