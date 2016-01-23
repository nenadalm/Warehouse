(ns warehouse.util)

(defn get-updated-items
  [col1 col2]
  (if (= col1 col2)
    []
    (loop [k (keys col1)
           res {}]
      (if (empty? k)
        res
        (let [key (first k)]
          (if (and (contains? col2 key) (not= (get col1 key) (get col2 key)))
            (recur (rest k) (conj res {key (get col1 key)}))
            (recur (rest k) res)))))))

(defn array->string [array]
  (clojure.string/join ", " array))

(defn string->array [string]
  (map clojure.string/trim (clojure.string/split string #",")))

(defn document->state [document current-state]
  (assoc current-state
         :components
         (if (empty? (:components document))
           {}
           (apply assoc
                  {}
                  (interleave (map #(:id %) (:components document))
                              (:components document))))))

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
                   (let [new-id (generate-component-id components)]
                     (recur (rest new-items)
                            (conj components
                                  {:id new-id
                                   :name (:name item)
                                   :tags []
                                   :amount (:amount item)})))
                   (recur (rest new-items)
                          (assoc-in components
                                    [(first old-item) :amount]
                                    (+ (:amount item) (:amount (second old-item))))))))))))

