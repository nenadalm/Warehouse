(ns warehouse.infinite-scroll.db)

(defn filter-by-data [items isd]
  items)

(defn should-load-next-page []
  (>= (+ (* 1.5 (.-innerHeight js/window))
         (.-pageYOffset js/window))
      (.-body.offsetHeight js/document)))

