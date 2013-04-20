(ns enfocus.charts.events
  (:require [goog.events :as events]))


(defn handle-base-events [data elem opts]
  (when (:on-value-mouseover opts)
    (events/listen elem "mouseover" (partial (:on-value-mouseover opts) data)))
  (when (:on-value-mouseout opts)
    (events/listen elem "mouseout" (partial (:on-value-mouseout opts) data)))
  (when (:on-value-click opts)
    (events/listen elem "click" (partial (:on-value-click opts) data))))


(defn add-events [elem event-list]
  (doseq [[action func] (partition 2 event-list)]
    (events/listen elem (name action) func)))


