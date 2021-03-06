(ns warehouse.util
  (:require
   [clojure.set :as clojure.set]
   [clojure.string :as string]))

(defn map-diff [m1 m2]
  (reduce (fn [res k]
            (let [val1 (get m1 k)
                  val2 (get m2 k)]
              (if (= val1 val2)
                res
                (assoc res k [val1 val2]))))
          {}
          (into #{} (concat (keys m1) (keys m2)))))

(defn revert-set [s [o n]]
  (let [add (clojure.set/difference n o)
        remove (clojure.set/difference o n)]
    (apply #(conj (clojure.set/difference s remove) %) add)))

(defn revert-changes [m diff]
  (merge m
         (map (fn [[k d]]
                (cond
                  (every? integer? d) [k (max 0 (+ (get m k) (apply - d)))]
                  (every? set? d) [k (revert-set (get m k) d)]
                  :else [k (first d)]))
              diff)))

(defn get-change-set [old-col new-col]
  (if (= new-col old-col)
    []
    (let [same-keys (keys old-col)
          created-keys (clojure.set/difference (into #{} (keys new-col)) (into #{} (keys old-col)))
          updates (reduce (fn [res k]
                            (let [new-val (get new-col k)
                                  old-val (get old-col k)
                                  diff (map-diff old-val new-val)]
                              (if (empty? diff)
                                res
                                (conj res {:metadata {:id (:id old-val)
                                                      :name (:name old-val)}
                                           :data diff}))))
                          []
                          same-keys)
          creates (mapv (fn [data]
                          {:metadata {:id (:id data)
                                      :name (:name data)}
                           :data data})
                        (map second (select-keys new-col created-keys)))]
      (filterv (complement #(empty? (:data %))) [{:type :create
                                                  :data creates}
                                                 {:type :update
                                                  :data updates}]))))

(defn array->string [array]
  (string/join ", " array))

(defn string->array [string]
  (set (map string/trim (string/split string #","))))

(defn document->state [document current-state]
  (assoc current-state
         :components
         (if (empty? (:components document))
           {}
           (apply assoc
                  {}
                  (interleave (map :id (:components document))
                              (map (fn [component]
                                     (reduce-kv (fn [m k v]
                                                  (assoc m k (if (vector? v) (set v) v)))
                                                {}
                                                component))
                                   (:components document)))))))

(defn state->document [current-state]
  (if (empty? (:components current-state))
    {:components []}
    {:components (into [] (vals (:components current-state)))}))

(defn- generate-component-id [existing-components]
  (if (empty? existing-components)
    1
    (inc (apply max (map :id existing-components)))))

(defn merge-documents [document new-items]
  (let [c (map-indexed vector (:components document))]
    (assoc document :components
           (loop [new-items (:components new-items)
                  components (:components document)]
             (if (empty? new-items)
               components
               (let [item (first new-items)
                     old-item (first (filter #(= (:name item) (:name (second %))) c))]
                 (if (empty? old-item)
                   (recur (rest new-items)
                          (conj components
                                {:id (generate-component-id components)
                                 :name (:name item)
                                 :tags (vec (:tags item))
                                 :amount (:amount item)}))
                   (recur (rest new-items)
                          (assoc-in components
                                    [(first old-item) :amount]
                                    (+ (:amount item) (:amount (second old-item))))))))))))

(defn next-key
  "Returns next numeric index in map `m`"
  [m]
  (if (empty? m)
    1
    (inc (apply max (keys m)))))

(defn iterator->map
  "Converts js iterator i into clojurescript map"
  [i]
  (->> i
       (.from js/Array)
       (js->clj)
       (into {})))

