(ns warehouse.util-test
  (:require-macros [cljs.test :refer [deftest is]])
  (:use [cljs.test :only [do-report]])
  (:require [warehouse.util :as util]))

(deftest map-diff-test
  (is (empty? (util/map-diff) {} {}))
  (is (empty? (util/map-diff {:a "a"
                              :b "b"}
                             {:a "a"
                              :b "b"})))
  (is (= {:a ["a" "new-a"]
          :c ["c" nil]}
         (util/map-diff {:a "a"
                         :b "b"
                         :c "c"}
                        {:a "new-a"
                         :b "b"})))
  (is (= {:a ["old-a" "a"]
          :c [nil "c"]}
         (util/map-diff {:a "old-a"
                         :b "b"}
                        {:a "a"
                         :b "b"
                         :c "c"}))))

(deftest get-change-set-test
  (is (empty? (util/get-change-set {} {})))
  (is (empty? (util/get-change-set {0 {:id 0
                                       :name "first"
                                       :k "v"}
                                    1 {:id 1
                                       :name "second"
                                       :k "c"}}

                                   {0 {:id 0
                                       :name "first"
                                       :k "v"}
                                    1 {:id 1
                                       :name "second"
                                       :k "c"}})))
  (is (= [{:type :update
           :data [{:metadata {:id 0
                             :name "first"}
                   :data {:k ["v" "v-updated"]}}]}]
         (util/get-change-set {0 {:id 0
                                  :name "first"
                                  :k "v"}
                               1 {:id 1
                                  :name "second"
                                  :k "c"}}

                              {0 {:id 0
                                  :name "first"
                                  :k "v-updated"}
                               1 {:id 1
                                  :name "second"
                                  :k "c"}})))
  (is (= [{:type :update
           :data [{:metadata {:id 0
                              :name "first"}
                   :data {:k ["v" "v-updated"]}}
                  {:metadata {:id 1
                              :name "second"}
                   :data {:k ["c" "c-updated"]}}]}]
         (util/get-change-set {0 {:id 0
                                  :name "first"
                                  :k "v"}
                               1 {:id 1
                                  :name "second"
                                  :k "c"}}

                              {0 {:id 0
                                  :name "first"
                                  :k "v-updated"}
                               1 {:id 1
                                  :name "second"
                                  :k "c-updated"}})))
  (is (= [{:type :create
           :data [{:metadata {:id 1
                              :name "second"}
                   :data {:id 1
                          :name "second"
                          :k "k-created"}}]}]
         (util/get-change-set {0 {:id 0
                                  :name "first"
                                  :k "v"}}

                              {0 {:id 0
                                  :name "first"
                                  :k "v"}
                               1 {:id 1
                                  :name "second"
                                  :k "k-created"}})))
  (is (= [{:type :create
           :data [{:metadata {:id 1
                              :name "second"}
                   :data {:id 1
                          :name "second"
                          :k "k-created1"}}
                  {:metadata {:id 2
                              :name "third"}
                   :data {:id 2
                          :name "third"
                          :k "k-created2"}}]}]
         (util/get-change-set {0 {:id 0
                                  :name "first"
                                  :k "v"}}

                              {0 {:id 0
                                  :name "first"
                                  :k "v"}
                               1 {:id 1
                                  :name "second"
                                  :k "k-created1"}
                               2 {:id 2
                                  :name "third"
                                  :k "k-created2"}})))
  (is (= [{:type :create
           :data [{:metadata {:id 2
                              :name "third"}
                   :data {:id 2
                          :name "third"
                          :k "k-created"}}]}
          {:type :update
           :data [{:metadata {:id 1
                              :name "second"}
                   :data {:k ["k" "k-updated"]}}]}]
         (util/get-change-set {0 {:id 0
                                  :name "first"
                                  :k "v"}
                               1 {:id 1
                                  :name "second"
                                  :k "k"}}

                              {0 {:id 0
                                  :name "first"
                                  :k "v"}
                               1 {:id 1
                                  :name "second"
                                  :k "k-updated"}
                               2 {:id 2
                                  :name "third"
                                  :k "k-created"}}))))

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

