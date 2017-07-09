(ns warehouse.subs
  (:require
   [warehouse.util :as util]
   [warehouse.infinite-scroll.db :as scroll]
   [warehouse.search.db : as search]
   [re-frame.core :refer [reg-sub subscribe]]
   [warehouse.search.db :as search]))

(reg-sub
 :visible-components
 (fn
   [db _]
   (if (search/filter-active?)
     (select-keys (:components db) (map #(get % "ref") (search/filter-search)))
     (:components db))))

(reg-sub
 :infinite-scroll-state
 (fn
   [db _]
   (:infinite-scroll db)))

(reg-sub
 :scroll-data-visible-components
 (fn [_ _]
   [(subscribe [:visible-components])
    (subscribe [:infinite-scroll-state])])
 (fn [[vc s] _]
   {:page (:page s)
    :pages-count (:pages-count s)
    :records-per-page 100}))

(reg-sub
 :scroll-visible-components
 (fn [_ _]
   [(subscribe [:scroll-data-visible-components])
    (subscribe [:visible-components])])
 (fn [[sd vc] _]
   (scroll/filter-by-data vc sd)))

(reg-sub
 :active-tab
 (fn
   [db _]
   (:page db)))

(reg-sub
 :state
 (fn
   [db _]
   db))

(reg-sub
 :state-data-uri
 (fn
   [db _]
   (->> db
        (util/state->document)
        (clj->js)
        (.stringify js/JSON)
        (.encodeURIComponent js/window)
        (str "data:text/json;charset=utf-8,"))))

(reg-sub
 :change-sets
 (fn
   [db _]
   (:change-sets db)))

