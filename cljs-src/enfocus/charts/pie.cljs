(ns enfocus.charts.pie
  (:require [enfocus.core :as ef]
            [goog.events :as events]
            [enfocus.effects :as effects]
            [goog.fx :as fx]
            [goog.graphics :as graphics]
            [goog.fx.Animation.EventType :as aet]
            [goog.ui.Tooltip :as tooltip]))

(defn- get-radius-point [radius angle offsetx offsety]
  (let [pi-d (/ (.-PI js/Math) 180)]
    [(+ (* radius (.cos js/Math (* angle pi-d))) offsetx)
     (+ (* radius (.sin js/Math (* angle pi-d))) offsety)]))


(defn- handle-events [info elem opts]
  (when (:on-value-mouseover opts)
    (events/listen elem "mouseover" (partial (:on-value-mouseover opts) info)))
  (when (:on-value-mouseout opts)
    (events/listen elem "mouseout" (partial (:on-value-mouseout opts) info)))
  (when (:on-value-click opts)
    (events/listen  elem "click" (partial (:on-value-click opts) info))))


(defn- draw-label [ctx radius start-angle seg-angle w-mid h-mid text opts]
  (let [angle (+ start-angle (/ seg-angle 2))
        [x1 y1] (get-radius-point (+ radius 2) angle w-mid h-mid)
        [x2 y2] (get-radius-point (+ radius 5) angle w-mid h-mid)
        stroke (graphics/Stroke. 1 (:font-color opts))
        fill (graphics/SolidFill. (:font-color opts) 1)
        font (graphics/Font. (:font-size opts) (:font opts))
        width 200
        height (+ (:font-size opts) 2)
        align (if (> (mod (+ angle 90) 360) 180) "right" "left")
        tx (if (> (mod (+ angle 90) 360) 180) (- x2 width) x2)
        ty (if (> (mod angle 360) 180) (- y2 height) y2)
        path (graphics/Path.)]
    (doto path
      (.moveTo x1 y1)
      (.lineTo x1 y1 x2 y2))
    (.drawPath ctx path stroke fill)
    (.drawText ctx text tx ty width (+ (:font-size opts) 2) align "bottom" font nil fill)))
    

(defn- draw-segment [ctx total data start-angle anim-rot color opts]
  (let [value (:value data)
        seg-angle (* anim-rot (/ value total) 360)
        w-mid (/ (:width opts) 2)
        h-mid (/ (:height opts) 2)
        radius (:radius opts)
        stroke? (:stroke? opts)
        path (graphics/Path.)
        fill (graphics/SolidFill. color 1)
        stroke (when stroke?
                 (graphics/Stroke. (:stroke-width opts) (:stroke-color opts)))
        [x y] (get-radius-point radius start-angle w-mid h-mid)]
    (doto path
      (.moveTo x y)
      (.arcTo radius
              radius
              start-angle
              seg-angle)
      (.lineTo w-mid h-mid)
      (.close))
    (when (:show-labels? opts)
      (draw-label ctx radius start-angle seg-angle w-mid h-mid (:label data) opts))
    (let [elem (.drawPath ctx path stroke fill)]
       (when (= anim-rot 1)
        (handle-events {:data data
                        :radius radius
                        :start-angle start-angle
                        :seg-angle seg-angle
                        :cx w-mid
                        :cy w-mid}
                       elem 
                       opts)))
    (+ start-angle seg-angle)))

(defn- draw-segments [node ctx radius total data anim-rot opts]
  (.clear ctx)
  (.suspend ctx)
  (reduce #(draw-segment ctx total (first %2) %1 anim-rot (second %2) opts)
          -45
          (map #(do [%1 %2]) data (cycle (:series-colors opts))))
  (.resume ctx node))

(defn pie-chart [node data opts]
  (let [width (:width opts)
        height (:height opts)
        padding (or (:padding opts) (if (:show-labels? opts) 50 5))
        radius (- (/ (min width height) 2) padding)
        total (reduce #(+ %1 (:value %2)) 0 data)
        ctx (graphics/createGraphics width height)
        ease-fn (or (:ease-fn opts) effects/linear)
        anim (when (:animation? opts)
               (fx/Animation. (array 0) (array 1) (:animation-duration opts) ease-fn))
        nopts (assoc opts :radius radius)
        draw-func #(draw-segments node ctx radius total data % nopts)]
    (if anim
      (do
        (events/listen anim aet/ANIMATE #(draw-func (.-x %)))
        (events/listen anim aet/END #(draw-func 1))
        (.render ctx)
        (.play anim))
      (do
        (.render ctx)
        (draw-func 1)))))
                                    
    
    
        
                     