(ns warehouse.events-test
  (:require-macros [cljs.test :refer [deftest is testing]])
  (:use [cljs.test :only [do-report]])
  (:require [warehouse.events :as events]))

(deftest next-key-test
  (is (= 1 (events/next-key nil)))
  (is (= 1 (events/next-key {}))
      "Empty map")
  (is (= 3 (events/next-key {1 "first" 2 "second"}))
      "Map with sorted numeric keys without holes")
  (is (= 3 (events/next-key {2 "second" 1 "first"}))
      "Map with unsorted numeric keys without holes")
  (is (= 4 (events/next-key {1 "first" 3 "third"}))
      "Map with sorted numeric keys with holes"))

(deftest process-create-test
  (is (=
       {:db {:processes {1 {:title "import1"
                            :id 1
                            :state :pending}}}
        :process {:title "import1"
                  :id 1
                  :state :pending}}
       (events/process-create {:db {}}
                              [:process-create {:title "import1"}]))
      "Insert process into empty db")
  (is (=
       {:db {:processes {2 {:title "import2"
                            :id 2}
                         3 {:title "import3"
                            :id 3
                            :state :pending}}}
        :process {:title "import3"
                  :id 3
                  :state :pending}}
       (events/process-create {:db {:processes {2 {:title "import2"
                                                   :id 2}}}}
                              [:process-create {:title "import3"}]))
      "Insert process into db with existing process"))

