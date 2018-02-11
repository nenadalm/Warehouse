(ns warehouse.selenium.test
  (:use
   [etaoin.api :exclude [clear]]
   [clojure.test]
   [warehouse.selenium.config]))

(def fixtures {:components
               [{:id 1
                 :name "EPR212A408000Z"
                 :tags ["optocoupler"]
                 :tags-string "optocoupler"
                 :expected-tags-string "optocoupler"
                 :amount 7}
                {:id 2
                 :name "2N3904"
                 :tags ["transistor"]
                 :tags-string "transistor"
                 :expected-tags-string "transistor"
                 :amount 8}
                {:id 3
                 :name "LF33CV"
                 :tags ["linear regulator"]
                 :tags-string "linear regulator"
                 :expected-tags-string "linear regulator"
                 :amount 10}
                {:id 4
                 :name "BD241C"
                 :tags ["transistor"]
                 :tags-string "transistor"
                 :expected-tags-string "transistor"
                 :amount 4}
                {:id 5
                 :name "HC49/US QM 16.000MHZ"
                 :tags ["crystal" "oscillator"]
                 :tags-string "crystal, oscillator"
                 :expected-tags-string "crystal, oscillator"
                 :amount 1}
                {:id 6
                 :name "AVRProg USB v3"
                 :tags ["rs232", "serial", "usb"]
                 :tags-string "rs232, serial, usb"
                 :expected-tags-string "rs232, serial, usb"
                 :amount 1}]})

(def not-empty? (complement empty?))

(defn fixture-path [filename]
  (.getCanonicalPath (clojure.java.io/file (str "test/warehouse/selenium/" filename))))

#_(defn upload-file
    "This function exists because of bug in ghost driver https://github.com/ariya/phantomjs/issues/10993"
    [path]
    (let [driver (:webdriver *driver*)]
      (if (instance? org.openqa.selenium.phantomjs.PhantomJSDriver driver)
        (let [script (str "this.uploadFile('input[type=file]', '" path "')")]
          (.executePhantomJS driver script (make-array Object 0)))
        (send-keys "//input[@type='file']" path))))

;; todo: uncomment when firefox 56 is released
;; https://github.com/mozilla/geckodriver/issues/858
#_(deftest import-export []
  ; reset env
    (to base-url)
    (execute-script "localStorage.clear();")

    (refresh)

  ; guard: there is zero components
    (is (empty? (elements "//li[@class='component']")))

    (upload-file (fixture-path "export.json"))

    (wait-until #(not-empty? (elements "//li[@class='component']")))
    (refresh)
    (wait-until #(not-empty? (elements "//li[@class='component']"))))

(defn create-component [component]
  (doto driver
    (click "//button[contains(text(), 'Add new')]")
    (wait-exists "//input[@name='name']")
    (fill "//input[@name='name']" (:name component))
    (fill "//input[@name='tags']" (:tags-string component))
    (clear "//input[@name='amount']")
    (fill "//input[@name='amount']" (str (:amount component)))
    (click "//button[contains(text(), 'Save')]")))

(defn component-value-selector [n v]
  (str "//li[@class='component'][" n "]//span[@class='value' and contains(text(), '" v "')]"))

(deftest components []

  ;;;;;;;;;;;;; Create components ;;;;;;;;;;;;;

  ;; reset env
  (go driver base-url)
  (js-execute driver "localStorage.clear();")
  (refresh driver)

  ;; guard: there is zero components
  (is (not (exists? driver "//li[@class='component']")))

  (doseq [component (:components fixtures)]
    (create-component component)

    ;; check values of created components
    (wait-exists driver (component-value-selector (:id component) (:name component)))
    (is (exists? driver (component-value-selector (:id component) (:expected-tags-string component))))
    (is (exists? driver (component-value-selector (:id component) (:amount component))))

    ;; check number of components
    (is (=
         (:id component)
         (count (query-all driver "//li[@class='component']")))))

  ;; check total of created components
  (is (=
       (count (:components fixtures))
       (count (query-all driver "//li[@class='component']"))))

  ;;;;;;;;;;;;; Edit form with cancel ;;;;;;;;;;;;;

  (is (exists? driver "//li[@class='component'][1]//span[@class='value' and contains(text(), 'EPR212A408000Z')]"))
  (is (exists? driver "//li[@class='component'][1]//span[@class='value' and contains(text(), 'optocoupler')]"))
  (is (exists? driver "//li[@class='component'][1]//span[@class='value' and contains(text(), '7')]"))
  (click driver "//button[contains(text(), 'Edit')]")

  (wait-exists driver "//input[@name='name' and @value='EPR212A408000Z']")
  (is (exists? driver "//input[@name='tags' and @value='optocoupler']"))
  (is (exists? driver "//input[@name='amount' and @value='7']"))

  (clear driver "//input[@name='name']")
  (clear driver "//input[@name='tags']")
  (clear driver "//input[@name='amount']")
  (fill driver "//input[@name='name']" "new name")
  (fill driver "//input[@name='tags']" "tag1, tag2")
  (fill driver "//input[@name='amount']" "20")
  (click driver "//button[contains(text(), 'Cancel')]")

  (wait-exists driver "//li[@class='component'][1]//span[@class='value' and contains(text(), 'EPR212A408000Z')]")
  (is (exists? driver "//li[@class='component'][1]//span[@class='value' and contains(text(), 'optocoupler')]"))
  (is (exists? driver "//li[@class='component'][1]//span[@class='value' and contains(text(), '7')]"))

  ;;;;;;;;;;;;; Edit form with save ;;;;;;;;;;;;;

  (click driver "//button[contains(text(), 'Edit')]")

  (wait-exists driver "//input[@name='name' and @value='EPR212A408000Z']")
  (is (exists? driver "//input[@name='tags' and @value='optocoupler']"))
  (is (exists? driver "//input[@name='amount' and @value='7']"))

  (clear driver "//input[@name='name']")
  (clear driver "//input[@name='tags']")
  (clear driver "//input[@name='amount']")
  (fill driver "//input[@name='name']" "new name")
  (fill driver "//input[@name='tags']" "tag1, tag2")
  (fill driver "//input[@name='amount']" "20")
  (click driver "//button[contains(text(), 'Save')]")

  (wait-exists driver "//li[@class='component'][1]//span[@class='value' and contains(text(), 'new name')]")
  (is (exists? driver "//li[@class='component'][1]//span[@class='value' and contains(text(), 'tag1, tag2')]"))
  (is (exists? driver "//li[@class='component'][1]//span[@class='value' and contains(text(), '20')]"))

  ;;;;;;;;;;;;; Search component ;;;;;;;;;;;;;

  ;; guard
  (is (< 1 (count (query-all driver "//li[@class='component']"))))

  ;; linear regulator by name
  (fill driver "//input[@name='search']" "LF")
  (wait-predicate #(= 1 (count (query-all driver "//li[@class='component']"))))
  (is (exists? driver "//li[@class='component'][1]//span[@class='value' and contains(text(), 'LF33CV')]"))

  ;; avr programmer by tag
  (clear driver "//input[@name='search']")
  (fill driver "//input[@name='search']" "rs232")
  (wait-predicate #(= 1 (count (query-all driver "//li[@class='component']"))))
  (wait-exists driver "//li[@class='component'][1]//span[@class='value' and contains(text(), 'AVRProg USB v3')]")

  ;;;;;;;;;;;;; Search edited component ;;;;;;;;;;;;;

  ;; guard
  (clear driver "//input[@name='search']")
  (fill driver "//input[@name='search']" "wtf")
  (wait-absent driver "//li[@class='component']")
  (clear driver "//input[@name='search']")
  (wait-exists driver "//li[@class='component']")

  (click driver "//button[contains(text(), 'Edit')]")
  (wait-exists driver "//input[@name='name']")
  (clear driver "//input[@name='name']")
  (fill driver "//input[@name='name']" "wtf")
  (click driver "//button[contains(text(), 'Save')]")
  (fill driver "//input[@name='search']" "wtf")
  (wait-predicate #(= 1 (count (query-all driver "//li[@class='component']"))))

  ;;;;;;;;;;;;;; Search new component ;;;;;;;;;;;;;

  ;; guard
  (clear driver "//input[@name='search']")
  (fill driver "//input[@name='search']" "new-component")
  (wait-absent driver "//li[@class='component']")
  (clear driver "//input[@name='search']")

  (click driver "//button[contains(text(), 'Add new')]")
  (wait-exists driver "//input[@name='name']")
  (fill driver "//input[@name='name']" "new-component")
  (click driver "//button[contains(text(), 'Save')]")
  (fill driver "//input[@name='search']" "new-component")
  (wait-predicate #(= 1 (count (query-all driver "//li[@class='component']"))))

  ;;;;;;;;;;;;;; Create new component with name in search ;;;;;;;;;;;;;

  ;; guard
  (clear driver "//input[@name='search']")
  (fill driver "//input[@name='search']" "nc2")
  (wait-absent driver "//li[@class='component']")

  (click driver "//button[contains(text(), 'Add new')]")
  (wait-exists driver "//input[@name='name']")
  (fill driver "//input[@name='name']" "nc2")
  (click driver "//button[contains(text(), 'Save')]")
  (wait-predicate #(= 1 (count (query-all driver "//li[@class='component']")))))

#_(deftest components []

  ;;;;;;;;;;;;; Create components ;;;;;;;;;;;;;

  ; reset env
    (to base-url)
    (execute-script "localStorage.clear();")
    (refresh)

  ; guard: there is zero components
    (is (empty? (elements "//li[@class='component']")))

    (doseq [component (:components fixtures)]
      (create-component component)

    ; check values of created components
      (wait-until #(present? (component-value-selector (:id component) (:name component))))
      (is (present? (component-value-selector (:id component) (:expected-tags-string component))))
      (is (present? (component-value-selector (:id component) (:amount component))))

    ; check number of components
      (is (=
           (:id component)
           (count (elements "//li[@class='component']")))))

  ; check total of created components
    (is (=
         (count (:components fixtures))
         (count (elements "//li[@class='component']"))))

  ;;;;;;;;;;;;; Edit form with cancel ;;;;;;;;;;;;;

    (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'EPR212A408000Z')]"))
    (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'optocoupler')]"))
    (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), '7')]"))
    (click "//button[contains(text(), 'Edit')]")

    (wait-until #(present? "//input[@name='name' and @value='EPR212A408000Z']"))
    (is (present? "//input[@name='tags' and @value='optocoupler']"))
    (is (present? "//input[@name='amount' and @value='7']"))

    (clear "//input[@name='name']")
    (clear "//input[@name='tags']")
    (clear "//input[@name='amount']")
    (input-text "//input[@name='name']" "new name")
    (input-text "//input[@name='tags']" "tag1, tag2")
    (input-text "//input[@name='amount']" "20")
    (click "//button[contains(text(), 'Cancel')]")

    (wait-until #(present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'EPR212A408000Z')]"))
    (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'optocoupler')]"))
    (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), '7')]"))

  ;;;;;;;;;;;;; Edit form with save ;;;;;;;;;;;;;

    (click "//button[contains(text(), 'Edit')]")

    (wait-until #(present? "//input[@name='name' and @value='EPR212A408000Z']"))
    (is (present? "//input[@name='tags' and @value='optocoupler']"))
    (is (present? "//input[@name='amount' and @value='7']"))

    (clear "//input[@name='name']")
    (clear "//input[@name='tags']")
    (clear "//input[@name='amount']")
    (input-text "//input[@name='name']" "new name")
    (input-text "//input[@name='tags']" "tag1, tag2")
    (input-text "//input[@name='amount']" "20")
    (click "//button[contains(text(), 'Save')]")

    (wait-until #(present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'new name')]"))
    (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'tag1, tag2')]"))
    (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), '20')]"))

  ;;;;;;;;;;;;; Search component ;;;;;;;;;;;;;

  ; guard
    (is (< 1 (count (elements "//li[@class='component']"))))

  ; linear regulator by name
    (input-text "//input[@name='search']" "LF")
    (wait-until #(= 1 (count (elements "//li[@class='component']"))))
    (is (present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'LF33CV')]"))

  ; avr programmer by tag
    (clear "//input[@name='search']")
    (input-text "//input[@name='search']" "rs232")
    (wait-until #(= 1 (count (elements "//li[@class='component']"))))
    (wait-until #(present? "//li[@class='component'][1]//span[@class='value' and contains(text(), 'AVRProg USB v3')]"))

  ;;;;;;;;;;;;; Search edited component ;;;;;;;;;;;;;

  ; guard
    (clear "//input[@name='search']")
    (input-text "//input[@name='search']" "wtf")
    (wait-until #(= 0 (count (elements "//li[@class='component']"))))
    (clear "//input[@name='search']")
    (wait-until #(present? "//li[@class='component']"))

    (click "//button[contains(text(), 'Edit')]")
    (wait-until #(present? "//input[@name='name']"))
    (clear "//input[@name='name']")
    (input-text "//input[@name='name']" "wtf")
    (click "//button[contains(text(), 'Save')]")
    (input-text "//input[@name='search']" "wtf")
    (wait-until #(= 1 (count (elements "//li[@class='component']"))))

  ;;;;;;;;;;;;;; Search new component ;;;;;;;;;;;;;

  ; guard
    (clear "//input[@name='search']")
    (input-text "//input[@name='search']" "new-component")
    (wait-until #(= 0 (count (elements "//li[@class='component']"))))
    (clear "//input[@name='search']")

    (click "//button[contains(text(), 'Add new')]")
    (wait-until #(present? "//input[@name='name']"))
    (input-text "//input[@name='name']" "new-component")
    (click "//button[contains(text(), 'Save')]")
    (input-text "//input[@name='search']" "new-component")
    (wait-until #(= 1 (count (elements "//li[@class='component']"))))

  ;;;;;;;;;;;;;; Create new component with name in search ;;;;;;;;;;;;;

  ; guard
    (clear "//input[@name='search']")
    (input-text "//input[@name='search']" "nc2")
    (wait-until #(= 0 (count (elements "//li[@class='component']"))))

    (click "//button[contains(text(), 'Add new')]")
    (wait-until #(present? "//input[@name='name']"))
    (input-text "//input[@name='name']" "nc2")
    (click "//button[contains(text(), 'Save')]")
    (wait-until #(= 1 (count (elements "//li[@class='component']")))))
