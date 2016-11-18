(ns warehouse.notifications.events
  (:require
    [warehouse.notifications.db :as util]
    [re-frame.core :refer [reg-event-db]]))

(reg-event-db
  :notification-close
  (fn
    [db [_ notification-key]]
    (util/remove-notification db notification-key)))

