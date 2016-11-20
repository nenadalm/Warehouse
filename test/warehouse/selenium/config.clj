(ns warehouse.selenium.config
  (:use
    [clj-webdriver.taxi :exclude [clear]]))

(set-driver! {:browser (or (keyword (System/getenv "SELENIUM_BROWSER"))
                           :phantomjs)})
(set-finder! xpath-finder)

(def base-url "http://localhost:3449")

(defn clear [q]
  "Function to clear input found using q"
  (send-keys q (clojure.string/join
                 ""
                 (conj (repeat (count (value q)) (clj-webdriver.core/key-code :back_space))
                       (clj-webdriver.core/key-code :end)))))


