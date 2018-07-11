(defproject warehouse "0.1.0-SNAPSHOT"
  :description "Frotend for 'Warehouse' project"
  :url "http://github.com/nenadalm/warehouse"
  :license {:name "MIT"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/clojurescript "1.10.339"]
                 [reagent "0.8.1"]
                 [alandipert/storage-atom "2.0.1"]
                 [cljs-ajax "0.7.4"]
                 [bidi "2.1.3"]
                 [re-frame "0.10.5"]
                 [pjstadig/humane-test-output "0.8.3"]
                 [org.clojure/core.async "0.4.474"]
                 [etaoin "0.2.8"]
                 [imatic/re-frame-form "0.1.0-SNAPSHOT"]]

  :plugins [[cljs-simple-cache-buster "0.2.1"]]

  :profiles {:dev {:dependencies [[day8.re-frame/re-frame-10x "0.3.3-react16"]
                                  [day8.re-frame/tracing "0.5.1"]
                                  [binaryage/devtools "0.9.10"]
                                  [re-frisk "0.5.4"]
                                  [figwheel-sidecar "0.5.16"]
                                  [com.cemerick/piggieback "0.2.2"]
                                  [pjstadig/humane-test-output "0.8.3"]]
                   :doo {:paths {:karma "./node_modules/.bin/karma"}}}
             :prod {:dependencies [[day8.re-frame/tracing-stubs "0.5.1"]]}}


  :aliases {
            ;; set plugins using aliases helps decrease "$ time lein help" significantly
            "cljsbuild" ["update-in" ":plugins" "conj" "[lein-cljsbuild \"1.1.7\"]" "--" "cljsbuild"]
            "less" ["update-in" ":plugins" "conj" "[lein-less \"1.7.5\"]" "--" "less"]
            "figwheel" ["update-in" ":plugins" "conj" "[lein-figwheel \"0.5.16\"]" "--" "figwheel"]
            "cljfmt" ["update-in" ":plugins" "conj" "[lein-cljfmt \"0.5.7\"]" "--" "cljfmt"]
            "doo" ["update-in" ":plugins" "conj" "[org.clojars.nenadalm/lein-doo \"0.1.11-SNAPSHOT\"]" "--" "doo"]

            ;; project tasks
            "build" ["do"
                     ["clean"]
                     ["with-profile" "dev,repl" "figwheel" "dev"]]
            "test-watch" ["doo" "firefox-headless" "test"]}

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljs-simple-cache-buster {:cljsbuild-id ["min" "dev"]
                             :template-file "resources/template/index.html"
                             :output-to "resources/public/index.html"}
  :cljsbuild {
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
              :source-paths ["src" "test"]
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

  :figwheel {:css-dirs ["resources/public/css"] ;; watch and update CSS
             :nrepl-port 7000
             :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl
                                cider.nrepl/cider-middleware
                                refactor-nrepl.middleware/wrap-refactor]})
