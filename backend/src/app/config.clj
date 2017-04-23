(ns app.config
  (:require [cprop.core :refer [load-config]]
            [cprop.source :refer [from-env]]))

(def conf (load-config
           :file "config.edn"
           :merge [(from-env)]))
