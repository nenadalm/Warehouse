(ns warehouse.events
  (:require
   [warehouse.util :as util]
   [warehouse.change-set :as change-set]
   [warehouse.storage.storage :refer [storage]]
   [warehouse.notifications.db :refer [add-notification]]
   [warehouse.search.db :as search]
   [warehouse.component-import.db :as component-import]
   [re-frame.core :refer [dispatch reg-event-db reg-cofx reg-event-fx reg-fx inject-cofx]]
   [warehouse.infinite-scroll.db :as scroll]))

(def default-state {:components {}
                    :change-sets []
                    :backend-url "https://warehouse-backend-warehouse-backend.1d35.starter-us-east-1.openshiftapps.com"
                    :filter {:val ""
                             :search []}
                    :processes {}
                    :page "index"
                    :infinite-scroll {:page 1
                                      :pages-count 0}})

(defn debounce [timeout f]
  (let [t (atom nil)]
    (fn [& args]
      (when @t (js/clearTimeout @t))
      (reset! t (js/setTimeout #(do (reset! t nil)
                                    (apply f args))
                               200)))))
(def dispatch-infinite-scroll-bottom (debounce 100 #(dispatch [:infinite-scroll-bottom])))
(.addEventListener js/document "scroll" #(dispatch-infinite-scroll-bottom))

(reg-event-db
 :reset-infinite-scroll
 (fn [db _]
   (assoc db :infinite-scroll {:page 1
                               :pages-count (->> (/ (count (if (search/filter-active? db)
                                                             (search/filter-search db)
                                                             (:components db)))
                                                    100)
                                                 (Math/ceil))})))

(reg-event-db
 :infinite-scroll-bottom
 (fn
   [db _]
   (let [sd (:infinite-scroll db)]
     (if (and (< (:page sd) (:pages-count sd))
              (scroll/should-load-next-page))
       (assoc db :infinite-scroll (update sd :page inc))
       db))))

(reg-event-db
 :error
 (fn [db [_ message]]
   (add-notification db {:type :error
                         :message message})))

(reg-event-db
 :success
 (fn [db [_ message]]
   (add-notification db {:type :success
                         :message message})))

(reg-event-db
 :state-loaded
 (fn
   [db [_ response]]
   (util/document->state response db)))

(reg-cofx
 :state
 (fn [cofx _]
   (assoc cofx :state ((:load-state storage)))))

(reg-cofx
 :change-sets
 (fn [cofx _]
   (assoc cofx :change-sets @change-set/change-sets)))

(reg-event-fx
 :initialize-db
 [(inject-cofx :state) (inject-cofx :change-sets)]
 (fn [cofx _]
   {:db (component-import/load-providers
         (util/document->state
          (:state cofx)
          (assoc default-state :change-sets (:change-sets cofx))))}))

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
         k (util/next-key old-components)
         new-components (assoc old-components
                               k (-> item
                                     (normalize-item)
                                     (assoc :id k)))
         new-db (-> (:db cofx)
                    (assoc :components new-components))]
     {:db new-db
      :dispatch [:components-change old-components new-components]})))

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

