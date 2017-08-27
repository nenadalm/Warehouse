(defproject warehouse "0.1.0-SNAPSHOT"
  :description "Frontend for 'Warehouse' project"
  :url "http://github.com/nenadalm/warehouse"
  :license {:name "MIT"}

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/clojurescript "1.9.521"]
                 [reagent "0.6.1"]
                 [org.seleniumhq.selenium/selenium-java "3.4.0"]
                 [org.seleniumhq.selenium/selenium-htmlunit-driver "2.52.0"]
                 [org.seleniumhq.selenium/selenium-firefox-driver "3.4.0"]
                 [com.codeborne/phantomjsdriver "1.4.2"]
                 [clj-webdriver "0.7.2"]
                 [alandipert/storage-atom "2.0.1"]
                 [cljs-ajax "0.5.9"]
                 [secretary "1.2.3"]
                 [re-frame "0.9.2"]
                 [pjstadig/humane-test-output "0.8.1"]
                 [cljsjs/lunrjs "0.6.0-1"]
                 [org.clojure/core.async "0.3.443"]
                 [day8.re-frame/trace "0.1.0"]
                 [binaryage/devtools "0.9.4"]
                 [re-frisk "0.4.5"]]

  :git-dependencies [["https://github.com/nenadalm/karma-reporter.git" "master"]]

  ; set plugins using aliases helps decrease "$ time lein help" significantly
  :aliases {"cljsbuild" ["update-in" ":plugins" "conj" "[lein-cljsbuild \"1.1.4\"]" "--" "cljsbuild"]
            "less" ["update-in" ":plugins" "conj" "[lein-less \"1.7.5\"]" "--" "less"]
            "figwheel" ["update-in" ":plugins" "conj" "[lein-figwheel \"0.5.4-7\"]" "--" "figwheel"]
            "git-deps" ["update-in" ":plugins" "conj" "[lein-git-deps \"0.0.2\"]" "--" "git-deps"]
            "cljfmt" ["update-in" ":plugins" "conj" "[lein-cljfmt \"0.5.6\"]" "--" "cljfmt"]}

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {
    :test-commands {"karma" ["./node_modules/.bin/karma" "start"]}
    :builds [{:id "dev"
              :source-paths ["src"]

              :figwheel {:on-jsload "warehouse.core/on-js-reload"}

              :compiler {:main warehouse.dev
                         :asset-path "js/compiled/dev/out"
                         :output-to "resources/public/js/compiled/warehouse.js"
                         :output-dir "resources/public/js/compiled/dev/out"
                         :source-map-timestamp true
                         :closure-defines {"re_frame.trace.trace_enabled_QMARK_" true}
                         :preloads [day8.re-frame.trace.preload
                                    devtools.preload]}}
             {:id "test"
              :source-paths ["src" "test" ".lein-git-deps/karma-reporter/src"]
              :compiler {:main warehouse.run-all
                         :asset-path "../public/js/compiled/test/out"
                         :output-to "resources/public/js/compiled/warehouse-test.js"
                         :output-dir "resources/public/js/compiled/test/out"
                         :source-map-timestamp true }}
             {:id "min"
              :source-paths ["src"]
              :compiler {:main warehouse.prod
                         :asset-path "js/compiled/out"
                         :output-to "resources/public/js/compiled/warehouse.js"
                         :output-dir "resources/public/js/compiled/out"
                         :optimizations :advanced
                         :pretty-print false
                         :source-map "resources/public/js/compiled/warehouse.js.map"}}]}

  :less {:source-paths ["resources/less"]
         :target-path "resources/public/css"}

  :figwheel {
             ;; :http-server-root "public" ;; default and assumes "resources" 
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1" 

             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

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
