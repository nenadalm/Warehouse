(def parameters)

(defproject warehouse "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "MIT"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [org.clojure/core.async "0.2.374"]
                 [reagent "0.5.1"]
                 [org.seleniumhq.selenium/selenium-java "2.52.0"]
                 [com.codeborne/phantomjsdriver "1.2.1"]
                 [clj-webdriver "0.7.2"]
                 [alandipert/storage-atom "1.2.4"]
                 [cljs-ajax "0.5.3"]
                 [com.cemerick/piggieback "0.2.1"]
                 [org.clojure/tools.nrepl "0.2.10"]
                 [refactor-nrepl "2.0.0"]]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :bower-dependencies [[lunr.js "https://github.com/nenadalm/lunr.js.git#master"]]
  :bower {:directory "bower_components"}

  :plugins [[lein-cljsbuild "1.1.2"]
            [lein-ancient "0.6.8"]
            [lein-figwheel "0.5.0-6"]
            [lein-less "1.7.5"]
            [lein-bower "0.5.1"]
            [refactor-nrepl "2.0.0"]
            [cider/cider-nrepl "0.10.2"]]

  :hooks [leiningen.cljsbuild]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {
    :test-commands {"functional" ["phantomjs" "resources/test/phantom/run.js" "resources/test/test.html"]}
    :builds [{:id "dev"
              :source-paths ["src"]

              :figwheel { :on-jsload "warehouse.core/on-js-reload" }

              :compiler {:main warehouse.core
                         :asset-path "js/compiled/dev/out"
                         :output-to "resources/public/js/compiled/warehouse.js"
                         :output-dir "resources/public/js/compiled/dev/out"
                         :foreign-libs [{:file "bower_components/lunr.js/lunr.js"
                                         :provides ["lunr"]}]
                         :source-map-timestamp true }}
             {:id "test"
              :source-paths ["src" "test"]
              :compiler {:main warehouse.run-all
                         :asset-path "../public/js/compiled/test/out"
                         :output-to "resources/public/js/compiled/warehouse-test.js"
                         :output-dir "resources/public/js/compiled/test/out"
                         :foreign-libs [{:file "bower_components/lunr.js/lunr.js"
                                         :provides ["lunr"]}]
                         :source-map-timestamp true }}
             {:id "min"
              :source-paths ["src"]
              :compiler {:main warehouse.core
                         :asset-path "js/compiled/out"
                         :output-to "resources/public/js/compiled/warehouse.js"
                         :output-dir "resources/public/js/compiled/out"
                         :optimizations :advanced
                         :pretty-print false
                         :libs ["bower_components/lunr.js/lunr.js"]}}]}

  :less {:source-paths ["src/warehouse/less"]
         :target-path "resources/public/css"}

  :figwheel {
             ;; :http-server-root "public" ;; default and assumes "resources" 
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1" 

             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             :nrepl-port 7888

             ;; Load CIDER, refactor-nrepl and piggieback middleware
             :nrepl-middleware ["cider.nrepl/cider-middleware"
                                "refactor-nrepl.middleware/wrap-refactor"
                                "cemerick.piggieback/wrap-cljs-repl"]

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log" 
             })
