(ns warehouse.process.events-test
  (:require
   [cljs.test :refer-macros [deftest is testing]]
   [warehouse.process.events :as events]))

(deftest process-create-test
  (is (=
       {:db {:processes {1 {:title "import1"
                            :id 1
                            :state :pending
                            :created-at "now"}}}
        :process {:title "import1"
                  :id 1
                  :state :pending
                  :created-at "now"}}
       (events/create-process {:db {}
                               :current-datetime "now"}
                              [:process-create {:title "import1"}]))
      "Insert process into empty db")
  (is (=
       {:db {:processes {2 {:title "import2"
                            :id 2}
                         3 {:title "import3"
                            :id 3
                            :state :pending
                            :created-at "now"}}}
        :process {:title "import3"
                  :id 3
                  :state :pending
                  :created-at "now"}}
       (events/create-process {:db {:processes {2 {:title "import2"
                                                   :id 2}}}
                               :current-datetime "now"}
                              [:process-create {:title "import3"}]))
      "Insert process into db with existing process"))

