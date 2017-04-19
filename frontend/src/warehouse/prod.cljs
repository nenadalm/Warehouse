(ns warehouse.prod
  (:require
   [warehouse.core]
   [warehouse.component-import.events]
   [re-frame.core :refer [reg-event-db]]))

; disable loading of import providers
(reg-event-db
 :load-providers
 identity)

(warehouse.core/main)

