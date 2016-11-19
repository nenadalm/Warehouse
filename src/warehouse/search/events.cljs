(ns warehouse.search.events
  (:require
    [warehouse.index :as index]
    [warehouse.search.db :as search-db]
    [re-frame.core :refer [reg-cofx reg-event-fx inject-cofx]]))

(reg-cofx
  :search-result
  (fn [cofx _]
    (assoc cofx :search-result (js->clj (.search search-db/index (second (:event cofx)))))))

(reg-event-fx
  :filter-update
  [(inject-cofx :search-result)]
  (fn
    [cofx [_ val]]
    {:db (assoc (:db cofx) :filter {:val val
                                    :search (:search-result cofx)})}))

