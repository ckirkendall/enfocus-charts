(ns enfocus.charts.pie
  (:require [enfocus.core :as ef]
            [enfocus.charts.utils :as cu]
            [goog.events :as events]
            [enfocus.effects :as effects]
            [goog.fx :as fx]
            [goog.graphics :as graphics]
            [goog.fx.Animation.EventType :as aet]
            [goog.ui.Tooltip :as tooltip]))

(declare build-segment-path)


(defn- handle-events [data elem opts]
  (when (:on-value-mouseover opts)
    (events/listen elem "mouseover" (partial (:on-value-mouseover opts) data)))
  (when (:on-value-mouseout opts)
    (events/listen elem "mouseout" (partial (:on-value-mouseout opts) data)))
  (when (:on-value-click opts)
    (events/listen  elem "click" (partial (:on-value-click opts) data)))
  (when (:slice-pop opts)
    (let [drawf #(.setPath elem
                           (build-segment-path (assoc data :selected %) opts))] 
      (events/listen elem "mouseover" #(drawf true))
      (events/listen elem "mouseout" #(drawf false)))))


(defn- draw-label [ctx data opts]
  (let [{start-angle :start-angle
         seg-angle   :seg-angle
         text        :label } data
        {radius      :radius
         font-color  :font-color
         font-size   :font-size
         font        :font
         width       :width
         height      :height } opts
        w-mid (/ width 2)
        h-mid (/ height 2)
        angle (+ start-angle (/ seg-angle 2))
        [x1 y1] (cu/get-radius-point (+ radius 2) angle w-mid h-mid)
        [x2 y2] (cu/get-radius-point (+ radius 10) angle w-mid h-mid)
        [x3 y3] (cu/get-radius-point (+ radius 14) angle w-mid h-mid)
        stroke (graphics/Stroke. 1 font-color)
        fill (graphics/SolidFill. font-color 1)
        font (graphics/Font. font-size font)
        width 200
        offsety (+ font-size 2)
        align (if (> (mod (+ angle 90) 360) 180) "right" "left")
        tx (if (> (mod (+ angle 90) 360) 180) (- x3 width) x3)
        ty (if (> (mod angle 360) 180) (- y3 (/ offsety 2)) (- y3 (/ offsety 2)))
        path (graphics/Path.)]
    (doto path
      (.moveTo x1 y1)
      (.lineTo x1 y1 x2 y2))
    (.drawPath ctx path stroke fill)
    (.drawText ctx text tx ty width (+ (:font-size opts) 2) align "middle" font nil fill)))
    

(defn build-segment-path [data opts]
  (let [{start-angle :start-angle
         seg-angle   :seg-angle
         selected    :selected } data
        {width       :width
         height      :height
         radius      :radius } opts
        w-mid (/ width 2)
        h-mid (/ height 2) 
        path (graphics/Path.) 
        radius (if selected (+ radius 10) radius)
        [x y] (cu/get-radius-point radius start-angle w-mid h-mid)]
    (doto path
      (.moveTo x y)
      (.arcTo radius
              radius
              start-angle
              seg-angle)
      (.lineTo w-mid h-mid)
      (.close))
    path))
      

(defn- draw-segment [ctx start-angle anim-rot data opts]
  (let [{total        :total
         stroke?      :stroke?
         show-lables? :show-labels?} opts
        {value        :value
         color        :color} data 
        seg-angle (* anim-rot (/ value total) 360)
        fill (graphics/SolidFill. color 1)
        stroke (when stroke?
                 (graphics/Stroke. (:stroke-width opts) (:stroke-color opts)))
        ndata (assoc data :start-angle start-angle :seg-angle seg-angle)
        path (build-segment-path ndata opts)]
    (when show-lables?
      (draw-label ctx ndata opts))
    (let [elem (.drawPath ctx path stroke fill)]
       (when (= anim-rot 1)
        (handle-events ndata elem opts)))
    (+ start-angle seg-angle)))


(defn- draw-segments [ctx anim-rot data opts]
    (.clear ctx)
    (.suspend ctx)
    (reduce #(draw-segment ctx %1 anim-rot %2 opts) -45 data)
    (.resume ctx))


(defn pie-chart [node data opts]
  (let [{width        :width
         height       :height
         pad          :padding
         show-labels? :show-labels?
         animation?   :animation?
         colors       :series-colors } opts
        ndata (map #(assoc %1 :color %2) data (cycle colors))
        padding (or pad (if show-labels? 50 5))
        radius (- (/ (min width height) 2) padding)
        total (reduce #(+ %1 (:value %2)) 0 data)
        ctx (graphics/createGraphics width height)
        ease-fn (or (:ease-fn opts) effects/linear)
        anim (when animation?
               (fx/Animation. (array 0) (array 1) (:animation-duration opts) ease-fn))
        nopts (assoc opts :radius radius :total total)
        draw-func #(draw-segments ctx % ndata nopts)]
    (if anim
      (do
        (events/listen anim aet/ANIMATE #(draw-func (.-x %)))
        (events/listen anim aet/END #(draw-func 1))
        (.render ctx node)
        (.play anim))
      (do
        (.render ctx node)
        (draw-func 1)))))
                                    
    
    
        
                     