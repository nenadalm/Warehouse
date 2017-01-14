(ns app.schema
  (:require [schema.core :as s]))

(s/defschema Component {:name s/Str
                        :amount s/Int})

(s/defschema ProviderDescription {:type s/Str
                                  :homepage s/Str
                                  :icon s/Str
                                  :action s/Str
                                  :params [{:name s/Str
                                            :type s/Str
                                            :secret s/Bool}]})

