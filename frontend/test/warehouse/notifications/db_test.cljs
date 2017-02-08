(ns warehouse.notifications.db-test
  (:require
    [cljs.test :refer-macros [deftest is testing]]
    [warehouse.notifications.db :as db]))

(deftest add-notification-test
  (is (= {:notifications {1 {:type :error
                             :message "Something bad happened"}}}
         (db/add-notification {}
                              {:type :error
                               :message "Something bad happened"}))
      "Insert notification into empty state")
  (is (= {:some-key "some-value"
          :notifications {1 {:type :error
                             :message "Something bad happened"}}}
         (db/add-notification {:some-key "some-value"}
                              {:type :error
                               :message "Something bad happened"}))
      "Insert notification into state")
  (is (= {:notifications {2 {:type :warning
                             :message "Some warning message"}
                          3 {:type :error
                             :message "Something bad happened"}}}
         (db/add-notification {:notifications {2 {:type :warning
                                                  :message "Some warning message"}}}
                              {:type :error
                               :message "Something bad happened"}))
      "Insert notification into state with other notifications"))

(deftest remove-notification
  (is (= {}
         (db/remove-notification {} 1))
      "Remove nonexisting notification from empty state")
  (is (= {:notifications {}}
         (db/remove-notification {:notifications {1 {:type :error
                                                     :message "Something bad happened"}}}
                                 1))
      "Remove notification")
  (is (= {:notifications {3 {:type :error
                             :message "Something bad happened"}}}
         (db/remove-notification {:notifications {2 {:type :warning
                                                     :message "Some warning message"}
                                                  3 {:type :error
                                                     :message "Something bad happened"}}}
                                 2))
      "Remove notification out of many"))

