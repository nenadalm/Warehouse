(ns warehouse.functional.test
  (:use [clj-webdriver.taxi :exclude [clear]]
        [clojure.test]))

;(System/setProperty "webdriver.chrome.driver" "/home/nenadalm/Downloads/selenium/chromedriver")
;(System/setProperty "phantomjs.binary.path" "/opt/phantomjs/bin/phantomjs")

;(def browser-spec {:browser :chrome})
(def browser-spec {:browser :phantomjs})

(set-driver! browser-spec)
(set-finder! xpath-finder)

(defn clear [q]
  (send-keys q (clojure.string/join
                 ""
                 (repeat (count (value q)) (clj-webdriver.core/key-code :back_space)))))

(deftest edit-form-with-save []
  (to "http://localhost:3449")
  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'EPR212A408000Z')]"))
  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'optocoupler')]"))
  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), '7')]"))
  (click "//button[contains(text(), 'Edit')]")
  (wait-until (present? "//input[@name]"))

  (is (present? "//input[@name='name' and @value='EPR212A408000Z']"))
  (is (present? "//input[@name='tags' and @value='optocoupler']"))
  (is (present? "//input[@name='amount' and @value='7']"))

  (clear "//input[@name='name']")
  (clear "//input[@name='tags']")
  (clear "//input[@name='amount']")
  (input-text "//input[@name='name']" "new name")
  (input-text "//input[@name='tags']" "tag1, tag2")
  (input-text "//input[@name='amount']" "20")
  (click "//button[contains(text(), 'Save')]")
  (wait-until (present? "//li[@class='component'][1]"))

  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'new name')]"))
  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'tag1, tag2')]"))
  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), '20')]")))

(deftest edit-form-with-cancel []
  (to "http://localhost:3449")
  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'EPR212A408000Z')]"))
  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'optocoupler')]"))
  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), '7')]"))
  (click "//button[contains(text(), 'Edit')]")
  (wait-until (present? "//input[@name]"))

  (is (present? "//input[@name='name' and @value='EPR212A408000Z']"))
  (is (present? "//input[@name='tags' and @value='optocoupler']"))
  (is (present? "//input[@name='amount' and @value='7']"))

  (clear "//input[@name='name']")
  (clear "//input[@name='tags']")
  (clear "//input[@name='amount']")
  (input-text "//input[@name='name']" "new name")
  (input-text "//input[@name='tags']" "tag1, tag2")
  (input-text "//input[@name='amount']" "20")
  (click "//button[contains(text(), 'Cancel')]")
  (wait-until (present? "//li[@class='component'][1]"))

  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'EPR212A408000Z')]"))
  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'optocoupler')]"))
  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), '7')]")))

(deftest search-component []
  (to "http://localhost:3449")

  ; guard
  (is (< 1 (count (elements "//li[@class='component']"))))

  ; linear regulator by name
  (input-text "//input[@name='search']" "LF")
  (is (= 1 (count (elements "//li[@class='component']"))))
  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'LF33CV')]"))

  ; avr programmer by tag
  (clear "//input[@name='search']")
  (input-text "//input[@name='search']" "rs232")
  (is (= 1 (count (elements "//li[@class='component']"))))
  (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'AVRProg USB v3')]")))

(deftest search-edited-component []
  (to "http://localhost:3449")

  ; guard
  (input-text "//input[@name='search']" "wtf")
  (is (= 0 (count (elements "//li[@class='component']"))))
  (clear "//input[@name='search']")
  (wait-until (exists? "//li[@class='component']"))

  (click "//button[contains(text(), 'Edit')]")
  (clear "//input[@name='name']")
  (input-text "//input[@name='name']" "wtf")
  (click "//button[contains(text(), 'Save')]")
  (input-text "//input[@name='search']" "wtf")
  (is (= 1 (count (elements "//li[@class='component']")))))

(deftest search-new-component []
  (to "http://localhost:3449")

  ; guard
  (input-text "//input[@name='search']" "wtf")
  (is (= 0 (count (elements "//li[@class='component']"))))
  (clear "//input[@name='search']")

  (click "//button[contains(text(), 'Add new')]")
  (input-text "//input[@name='name']" "wtf")
  (click "//button[contains(text(), 'Save')]")
  (input-text "//input[@name='search']" "wtf")
  (is (= 1 (count (elements "//li[@class='component']")))))

