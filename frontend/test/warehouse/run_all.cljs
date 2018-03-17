(ns warehouse.run-all
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [pjstadig.humane-test-output]
   [warehouse.util-test]
   [warehouse.pages.process.events-test]
   [warehouse.notifications.db-test]
   [warehouse.storage.indexeddb-test]))

(enable-console-print!)

(doo-tests 'warehouse.util-test
           'warehouse.pages.process.events-test
           'warehouse.notifications.db-test
           'warehouse.storage.indexeddb-test)
