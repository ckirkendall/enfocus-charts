(ns enfocus.charts.utils
  (:require [enfocus.core :as ef]
            [goog.dom :as dom]
            [goog.style :as style]
            [goog.graphics :as gg]))


(def hide-style (.-strobj {"style" "visibility: hidden; position: absolute; top: -100px; left: 0px;"}))

(defn get-radius-point [radius angle offsetx offsety]
  (let [pi-d (/ (.-PI js/Math) 180)]
    [(+ (* radius (.cos js/Math (* angle pi-d))) offsetx)
     (+ (* radius (.sin js/Math (* angle pi-d))) offsety)]))


(defn get-label-sizes
  ([labels font-size] (get-label-sizes labels font-size "arial"))
  ([labels font-size font]
  (let [func (fn [txt div]
               (set! (.-innerHTML div) txt)
               (style/setStyle div "font-family" font)
               (style/setStyle div "font-size" font-size)
               (style/getSize div)) 
        div (dom/createDom "div" hide-style)
        _ (dom/appendChild (.-body js/document) div)
        widths (doall (for [l labels] (func l div)))
        _ (dom/removeNode div)]
    widths)))

(defn test-label-widths
  ([] (test-label-widths 10))
  ([font-size]
     (get-label-sizes ["test","testing"] font-size)))


(defn empty-path-elem [ctx stroke fill group]
  (let [path (gg/Path.)]
    (.moveTo path 0 0)
    (.drawPath ctx path stroke fill group)))



(defn curve-rec-path [width height radius]
  (let [path (gg/Path.)]
    (doto path
      (.moveTo radius 0)
      (.lineTo (- width radius) 0)
      (.curveTo width 0 width 0 width radius)
      (.lineTo width (- height radius))
      (.curveTo width height width height (- width radius) height)
      (.lineTo radius height)
      (.curveTo 0 height 0 height 0 (- height radius))
      (.lineTo 0 radius)
      (.curveTo 0 0 0 0 radius 0)
      (.close))))



(defn get-position [ctx x y]
  (let [elem (.getContentElement ctx)
        pos (style/getClientPosition elem)
        nx (- x (.-x pos))
        ny (- y (.-y pos))]
    [nx ny]))


(defn update-stroke [elem width]
  (when-let [old-stroke (.getStroke elem)]
    (let [new-stroke (gg/Stroke. width (.getColor old-stroke))]
      (.setStroke elem new-stroke))))