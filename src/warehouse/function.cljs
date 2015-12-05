(ns warehouse.function)

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
    (hash-map :components (vals (:components current-state)))))

