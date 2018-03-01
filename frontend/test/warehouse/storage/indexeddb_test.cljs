(ns warehouse.storage.indexeddb-test
  (:require
   [cljs.test :refer-macros [deftest is testing use-fixtures async]]
   [warehouse.storage.indexeddb :as indexeddb]
   [warehouse.storage.local :as local]
   [cljs.core.async :refer [<!]])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(def fixtures {:components
               [{:id 1
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
                {:id 5
                 :name "HC49/US QM 16.000MHZ"
                 :tags ["crystal" "oscillator"]
                 :amount 1}]})

(use-fixtures :once
  {:before (fn []
             (.clear js/localStorage)
             ((:store-state local/storage) fixtures))})

(deftest load-components--all-test
  (async done
         (let [ch (indexeddb/load-components 4 0)]
           (go (is (= (<! ch)
                      {:count 4
                       :components
                       [{:id 1
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
                        {:id 5
                         :name "HC49/US QM 16.000MHZ"
                         :tags ["crystal" "oscillator"]
                         :amount 1}]}))
               (done)))))

(deftest load-components--first-test
  (async done
         (let [ch (indexeddb/load-components 1 0)]
           (go (is (= (<! ch)
                      {:count 4
                       :components
                       [{:id 1
                         :name "EPR212A408000Z"
                         :tags ["optocoupler"]
                         :amount 7}]}))
               (done)))))

(deftest load-components--last-test
  (async done
         (let [ch (indexeddb/load-components 1 3)]
           (go (is (= (<! ch)
                      {:count 4
                       :components
                       [{:id 5
                         :name "HC49/US QM 16.000MHZ"
                         :tags ["crystal" "oscillator"]
                         :amount 1}]}))
               (done)))))

(deftest load-components--last-plus-test
  (async done
         (let [ch (indexeddb/load-components 5 3)]
           (go (is (= (<! ch)
                      {:count 4
                       :components
                       [{:id 5
                         :name "HC49/US QM 16.000MHZ"
                         :tags ["crystal" "oscillator"]
                         :amount 1}]}))
               (done)))))

(deftest load-components--after-last-test
  (async done
         (let [ch (indexeddb/load-components 5 10)]
           (go (is (= (<! ch)
                      {:count 4
                       :components
                       []}))
               (done)))))

(deftest load-components-by-ids--all-test
  (async done
         (let [ch (indexeddb/load-components-by-ids [1 2 3 5])]
           (go (is (= (<! ch)
                      [{:id 1
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
                       {:id 5
                        :name "HC49/US QM 16.000MHZ"
                        :tags ["crystal" "oscillator"]
                        :amount 1}]))
               (done)))))

(deftest load-components-by-ids--all-unsorted-test
  (async done
         (let [ch (indexeddb/load-components-by-ids [3 5 2 1])]
           (go (is (= (<! ch)
                      [{:id 1
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
                       {:id 5
                        :name "HC49/US QM 16.000MHZ"
                        :tags ["crystal" "oscillator"]
                        :amount 1}]))
               (done)))))

(deftest load-components-by-ids--one-test
  (async done
         (let [ch (indexeddb/load-components-by-ids [2])]
           (go (is (= (<! ch)
                      [{:id 2
                        :name "2N3904"
                        :tags ["transistor"]
                        :amount 8}]))
               (done)))))

(deftest load-components-by-ids--empty-test
  (async done
         (let [ch (indexeddb/load-components-by-ids [])]
           (go (is (= (<! ch)
                      []))
               (done)))))

(deftest load-components-by-ids--non-existing-test
  (async done
         (let [ch (indexeddb/load-components-by-ids [111 25 33])]
           (go (is (= (<! ch)
                      []))
               (done)))))

;; todo: fix this (issue is with non existing record between 2 existing)
;; (deftest load-components-by-ids--two-with-non-existing-test
;;   (async done
;;          (let [ch (indexeddb/load-components-by-ids [12 3 33 4 22 5])]
;;            (go (is (= (<! ch)
;;                       [{:id 3
;;                         :name "LF33CV"
;;                         :tags ["linear regulator"]
;;                         :amount 10}
;;                        {:id 5
;;                         :name "HC49/US QM 16.000MHZ"
;;                         :tags ["crystal" "oscillator"]
;;                         :amount 1}]))
;;                (done)))))

(deftest filter-ids--empty-query-test
  (async done
         (let [ch (indexeddb/filter-ids "")]
           (go (is (= (<! ch)
                      []))
               (done)))))

(deftest filter-ids--single-tag-query-test
  (async done
         (let [ch (indexeddb/filter-ids "oscillator")]
           (go (is (= (<! ch)
                      [5])
                   (done))))))

(deftest filter-ids--two-tags-query-test
  (async done
         (let [ch (indexeddb/filter-ids "oscillator crystal")]
           (go (is (= (<! ch)
                      [5])
                   (done))))))

(deftest filter-ids--partial-single-tag-query-test
  (async done
         (let [ch (indexeddb/filter-ids "osc")]
           (go (is (= (<! ch)
                      [5])
                   (done))))))

(deftest filter-ids--partial-two-results-test
  (async done
         (let [ch (indexeddb/filter-ids "o")]
           (go (is (= (<! ch)
                      [1 5]))
               (done)))))

