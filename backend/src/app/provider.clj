(ns app.provider)

(defprotocol Provider
  (get-description [this])
  (create-handler [this]))

