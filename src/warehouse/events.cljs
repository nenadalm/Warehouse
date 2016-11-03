(ns warehouse.events
  (:require
    [warehouse.util :as util]
    [warehouse.index :as index]
    [warehouse.change-set :as change-set]
    [warehouse.storage.storage :refer [storage]]
    [re-frame.core :refer [reg-event-db reg-cofx reg-event-fx reg-fx inject-cofx]]))

(def default-state {:components {}
                    :change-sets []
                    :filter {:val ""
                             :search []}
                    :notifications []
                    :show-nav false
                    :page "index"})

(reg-event-db
  :state-loaded
  (fn
    [db [_ response]]
    (util/document->state response db)))

(reg-cofx
  :state
  (fn [cofx _ ]
    (assoc cofx :state ((:load-state storage)))))

(reg-cofx
  :change-sets
  (fn [cofx _]
    (assoc cofx :change-sets @change-set/change-sets)))

(reg-event-fx
  :initialize-db
  [(inject-cofx :state) (inject-cofx :change-sets)]
  (fn [cofx _]
    {:db (util/document->state
           (:state cofx)
           (assoc default-state :change-sets (:change-sets cofx)))}))

(reg-fx
  :change-sets
  (fn
    [value]
    (when-not (empty? value)
      (reset! change-set/change-sets value))))

(reg-fx
  :state
  (fn [value]
    ((:store-state storage) value)))

(defn normalize-item [item]
  (assoc item
         :tags (util/string->array (:tags item))))

(defn add-change-set [col change-set]
  (take 10 (conj col change-set)))

(reg-event-fx
  :components-change
  (fn
    [cofx [_ old-components new-components]]
    (let [change-set (util/get-change-set old-components new-components)
          new-db (-> (:db cofx)
                     (assoc :change-sets (add-change-set (get-in cofx [:db :change-sets]) change-set)))]
      {:db new-db
       :change-sets (:change-sets new-db)
       :state (util/state->document new-db)})))

(reg-event-fx
  :item-save
  (fn
    [cofx [_ k item]]
    (let [old-components (get-in cofx [:db :components])
          new-components (assoc old-components
                                k (normalize-item item))
          new-db (-> (:db cofx)
                     (assoc :components new-components))]
      {:db new-db
       :dispatch [:components-change old-components new-components]})))

(reg-event-fx
  :item-create
  (fn
    [cofx [_ item]]
    (let [old-components (get-in cofx [:db :components])
          k (if (empty? old-components)
              1
              (inc (apply max (keys old-components))))
          new-components (assoc old-components
                                k (-> item
                                      (normalize-item)
                                      (assoc :id k)))
          new-db (-> (:db cofx)
                     (assoc :components new-components))]
      {:db new-db
       :dispatch [:components-change old-components new-components]})))

(reg-event-db
  :notification-close
  (fn
    [db [_ notification-key]]
    (assoc db :notifications (concat
                               (subvec (:notifications db) 0 notification-key)
                               (subvec (:notifications db) (inc notification-key))))))

(reg-event-fx
  :revert-change
  (fn
    [cofx [_ type metadata data]]
    (let [old-components (get-in cofx [:db :components])
          new-components (case type
                           :create (assoc-in old-components [(:id metadata) :amount] 0)
                           :update (->> (util/revert-changes (get old-components (:id metadata)) data)
                                        (assoc old-components (:id metadata))))
          new-db (-> (:db cofx)
                     (assoc :components new-components))]
      {:db new-db
       :dispatch [:components-change old-components new-components]})))

(reg-event-db
  :page-change
  (fn
    [db [_ page]]
    (assoc db :page page)))

(reg-cofx
  :search-result
  (fn [cofx _]
    (assoc cofx :search-result (js->clj (.search index/index (second (:event cofx)))))))

(reg-event-fx
  :filter-update
  [(inject-cofx :search-result)]
  (fn
    [cofx [_ val]]
    {:db (assoc (:db cofx) :filter {:val val
                                    :search (:search-result cofx)})}))

