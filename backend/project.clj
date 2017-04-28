(defproject warehouse "0.1.0-SNAPSHOT"
  :description "Backend for 'Warehouse' project"
  :url "http://github.com/nenadalm/warehouse/tree/master/backend"
  :license {:name "MIT"}

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/data.json "0.2.6"]
                 [org.seleniumhq.selenium/selenium-java "3.0.1"]
                 [org.seleniumhq.selenium/selenium-htmlunit-driver "2.52.0"]
                 [ring/ring-core "1.5.1"]
                 [ring/ring-jetty-adapter "1.5.1"]
                 [ring/ring-json "0.4.0"]
                 [metosin/compojure-api "1.2.0-alpha1"]
                 [com.codeborne/phantomjsdriver "1.3.0"]
                 [clj-webdriver "0.7.2"]
                 [cprop "0.1.10"]]

  ; set plugins using aliases helps decrease "$ time lein help" significantly
  :aliases {"ring" ["update-in" ":plugins" "conj" "[lein-ring \"0.9.7\"]" "--" "ring"]}

  :ring {:handler app.core/app}
  :source-paths ["src"])

