(ns warehouse.selenium.config
  (:use
   [etaoin.api :exclude [clear]])
  (:require
   [etaoin.keys :as k]))

(def driver (firefox))

(def base-url "http://localhost:3449")

(defn clear [driver q]
  (fill driver q (clojure.string/join
                  ""
                  (repeat (count (get-element-property driver q :value))
                          k/backspace))))
