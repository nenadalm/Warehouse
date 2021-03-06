(ns warehouse.util-test
  (:require
   [cljs.test :refer-macros [deftest is testing]]
   [warehouse.util :as util]))

(deftest map-diff-test
  (testing "same maps"
    (is (empty? (util/map-diff {} {})))
    (is (empty? (util/map-diff {:a "a"
                                :b "b"}
                               {:a "a"
                                :b "b"}))))
  (testing "different maps"
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
                           :c "c"})))))

(deftest revert-changes-test
  (is (= {:a "a" :b "b" :c "c"}
         (util/revert-changes {:a "b"
                               :b "c"
                               :c "c"}
                              {:a ["a" "b"]
                               :b ["b" "c"]})))
  (is (= {:name "component"
          :amount 7
          :amount-min 0
          :tags #{"tag1" "tag3"}}
         (util/revert-changes {:name "new"
                               :amount 5
                               :amount-min 1
                               :tags #{"tag1" "tag2"}}
                              {:name ["component" "sth"]
                               :amount [10 8]
                               :tags [#{"tag1" "tag2"} #{"tag1" "tag3"}]
                               :amount-min [1 10]}))))

(deftest get-change-set-test
  (testing "sampe maps"
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
                                         :k "c"}}))))
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
                                  :k "c"}}))
      "single update")
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
                                  :k "c-updated"}}))
      "double update")
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
                                  :k "k-created"}}))
      "single create")
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
                                  :k "k-created2"}}))
      "double create")
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
                                  :k "k-created"}}))
      "create and update"))

(deftest string->array-test
  (is (= (util/string->array "a, b ,c, a")
         #{"a" "b" "c"})))

(deftest array->string-test
  (is (= (util/array->string #{"a" "b" "c"})
         "a, b, c")))

(deftest document->state-test
  (is (= {:components {}
          :notifications []}
         (util/document->state {:components []}
                               {:components []
                                :notifications []}))
      "empty components")
  (is (= {:components {2 {:id 2
                          :name "second-component"
                          :tags #{"component"}
                          :amount 3}}
          :notifications []}
         (util/document->state {:components [{:id 2
                                              :name "second-component"
                                              :tags #{"component"}
                                              :amount 3}]}
                               {:components {1 {:id 1
                                                :name "EPR212A408000Z"
                                                :tags #{"optocoupler"}
                                                :amount 7}
                                             2 {:id 2
                                                :name "2N3904"
                                                :tags #{"transistor"}
                                                :amount 8}}
                                :notifications []})))
  (testing "vector transforms into set to maintain BC"
    (is (= {:components {2 {:id 2
                            :name "second-component"
                            :tags #{"component"}
                            :amount 3}}
            :notifications []}
           (util/document->state {:components [{:id 2
                                                :name "second-component"
                                                :tags ["component"]
                                                :amount 3}]}
                                 {:components {1 {:id 1
                                                  :name "EPR212A408000Z"
                                                  :tags ["optocoupler"]
                                                  :amount 7}
                                               2 {:id 2
                                                  :name "2N3904"
                                                  :tags ["transistor"]
                                                  :amount 8}}
                                  :notifications []})))))

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
                               {:components []}))
      "empty components")
  (is (= {:components [{:id 1
                        :name "component1"
                        :tags ["tag"]
                        :amount 3}]}
         (util/merge-documents {:components [{:id 1
                                              :name "component1"
                                              :tags ["tag"]
                                              :amount 1}]}
                               {:components [{:name "component1"
                                              :amount 2}]}))
      "components with the same name")
  (is (= {:components [{:id 1
                        :name "component"
                        :tags []
                        :amount 2}]}
         (util/merge-documents {:components []}
                               {:components [{:name "component"
                                              :amount 2}]}))
      "new component without tags")
  (is (= {:components [{:id 1
                        :name "component"
                        :tags ["tag"]
                        :amount 2}]}
         (util/merge-documents {:components []}
                               {:components [{:name "component"
                                              :tags ["tag"]
                                              :amount 2}]}))
      "new component with tags")
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
                                              :amount 1}]}))
      "existing and imported components"))

(deftest next-key-test
  (is (= 1 (util/next-key nil)))
  (is (= 1 (util/next-key {}))
      "Empty map")
  (is (= 3 (util/next-key {1 "first" 2 "second"}))
      "Map with sorted numeric keys without holes")
  (is (= 3 (util/next-key {2 "second" 1 "first"}))
      "Map with unsorted numeric keys without holes")
  (is (= 4 (util/next-key {1 "first" 3 "third"}))
      "Map with sorted numeric keys with holes"))

; skipped due to missing support for iterator in phantomjs
;(deftest iterator->map-test
  ;(is (= {}
         ;(util/iterator->map (new js/Map)))
      ;"Empty iterator")
  ;(is (= {"prop1" "val1"
          ;"prop2" "val2"}
         ;(util/iterator->map (doto (new js/Map)
                               ;(.set "prop1" "val1")
                               ;(.set "prop2" "val2"))))
      ;"Iterator with some entries"))

