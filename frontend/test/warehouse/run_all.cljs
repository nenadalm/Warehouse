(ns warehouse.run-all
  (:require
    [jx.reporter.karma :refer-macros [run-tests run-all-tests]]
    [warehouse.util-test]
    [warehouse.events-test]
    [warehouse.notifications.db-test]))

(enable-console-print!)

(defn ^:export run [karma]
  (run-all-tests karma #"warehouse.*-test"))

