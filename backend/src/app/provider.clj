(ns app.provider)

(defprotocol Provider
  (get-description [this])
  (create-handler [this])
  (create-handler-mocked [this]))

