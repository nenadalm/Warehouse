(ns warehouse.selenium.config
  (:use
   [etaoin.api :exclude [clear]])
  (:require
   [etaoin.keys :as k]))

(def driver (firefox))

(def base-url "http://localhost:3449")

(defn get-element-property-el [driver el property]
  (with-resp driver :get
    [:session (:session @driver) :element el :property (name property)]
    nil
    resp
    (:value resp)))

(defn get-element-property [driver q name]
  (get-element-property-el driver (query driver q) name))

(defn clear [driver q]
  (fill driver q (clojure.string/join
                  ""
                  (repeat (count (get-element-property driver q :value))
                          k/backspace))))
