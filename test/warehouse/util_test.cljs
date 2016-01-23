(ns warehouse.util-test
  (:require-macros [cljs.test :refer [deftest is]])
  (:use [cljs.test :only [do-report]])
  (:require [warehouse.util :as util]))

(deftest get-updated-items-test
  (is (empty? (util/get-updated-items
                {0 {:k "v"}
                 1 {:k "c"}}

                {0 {:k "v"}
                 1 {:k "c"}})))
  (is (= {0 {:k "v-updated"}}
         (util/get-updated-items
                {0 {:k "v-updated"}
                 1 {:k "c"}}

                {0 {:k "v"}
                 1 {:k "c"}}))))

(deftest string->array-test
  (is (= (util/string->array "a, b ,c")
         ["a" "b" "c"])))

(deftest array->string-test
  (is (= (util/array->string ["a" "b" "c"])
         "a, b, c")))

(deftest document->state-test
  (is (= {:components {}
          :notifications []}
         (util/document->state {:components []}
                          {:components []
                           :notifications []})))
  (is (= {:components {2 {:id 2
                       :name "second-component"
                       :tags "component"
                       :amount 3}}
          :notifications []}
         (util/document->state {:components [{:id 2
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
         (util/state->document {:components {}})))
  (is (= {:components [{:id 2
                        :name "second-component"
                        :tags "component"
                        :amount 3}]}
         (util/state->document {:components {2 {:id 2
                                           :name "second-component"
                                           :tags "component"
                                           :amount 3}}
                           :notifications []}))))

(deftest merge-documents-test
  (is (= {:components []}
         (util/merge-documents {:components []}
                               {:components []})))
  (is (= {:components [{:id 1
                        :name "component1"
                        :tags ["tag"]
                        :amount 3}]}
         (util/merge-documents {:components [{:id 1
                                              :name "component1"
                                              :tags ["tag"]
                                              :amount 1}]}
                               {:components [{:name "component1"
                                              :amount 2}]})))
  (is (= {:components [{:id 1
                       :name "component"
                       :tags []
                       :amount 2}]}
         (util/merge-documents {:components []}
                               {:components [{:name "component"
                                             :amount 2}]})))
  (is (= {:components [{:id 1
                       :name "component"
                       :tags []
                       :amount 2}
                       {:id 2
                        :name "imported-component"
                        :tags []
                        :amount 1}]}
         (util/merge-documents {:components [{:id 1
                                              :name "component"
                                              :tags []
                                              :amount 2}]}
                               {:components [{:name "imported-component"
                                             :amount 1}]}))))

