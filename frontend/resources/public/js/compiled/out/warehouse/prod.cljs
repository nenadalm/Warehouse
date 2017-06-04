(ns warehouse.prod
  (:require
   [warehouse.core]
   [warehouse.component-import.events]
   [re-frame.core :refer [reg-event-db]]))

(warehouse.core/main)

