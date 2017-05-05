(ns app.provider)

(defprotocol Provider
  (get-description [this host])
  (create-handler [this])
  (create-handler-mocked [this]))

