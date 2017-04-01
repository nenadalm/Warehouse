(ns warehouse.events
  (:require
    [warehouse.util :as util]
    [warehouse.change-set :as change-set]
    [warehouse.storage.storage :refer [storage]]
    [warehouse.notifications.db :refer [add-notification]]
    [warehouse.component-import.db :as component-import]
    [ajax.core :refer [POST]]
    [re-frame.core :refer [dispatch reg-event-db reg-cofx reg-event-fx reg-fx inject-cofx]]))

(def default-state {:components {}
                    :change-sets []
                    :filter {:val ""
                             :search []}
                    :processes {}
                    :show-nav false
                    :page "index"})

(defn process-create [{:keys [db]} [_ process]]
  (let [k (util/next-key (:processes db))
        p (assoc process
                 :id k
                 :state :pending)]
    {:db (dissoc (assoc-in db [:processes k] p)
                 :import-form)
     :process p}))

(defmulti run-process #(:type %))

(defmethod run-process :xhr [process]
  (POST (:url process)
        :params (:data process)
        :format :json
        :response-format :json
        :keywords? true
        :headers {"Content-Type" "application/json"}
        :handler (fn [response]
                   (dispatch [:success "Import succeeded"])
                   (dispatch [:import-document {:components response}]))
        :error-handler #(dispatch [:error "Import failed"])))

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

(reg-fx
  :process
  (fn [process]
    (run-process process)))

(reg-event-fx
  :process-create
  process-create)

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

