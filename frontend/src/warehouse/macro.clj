(ns warehouse.macro)

(defmacro handler-fn [& body]
  `(fn [~'e] ~@body nil))

