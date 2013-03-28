(ns enfocus.charts.line
  (:require [enfocus.core :as ef]
            [enfocus.charts.utils :as utils]
            [goog.events :as events]
            [enfocus.effects :as effects]
            [goog.fx :as fx]
            [goog.graphics :as graphics]
            [goog.fx.Animation.EventType :as aet]
            [goog.ui.Tooltip :as tooltip]))


        
(defn get-min-max [series]
  (reduce (fn [[cmin cmax] {val :value}]
            [(min cmin val) (max cmax val)])
            [(.-MAX_VALUE js/Number) (.-MIN_VALUE js/Number)]
            series))

(def sin-cos-45 0.70710678118)

(defn rotate-line-45 [x1 y1 x2 y2]
  (let [dx (- x2 x1)
        dy (- y2 y1)
        sx (+ (/ dx 2) x1)
        nx (+ (* sin-cos-45 (- dx dy)) sx)
        ny (+ (* sin-cos-45 (+ dx dy)) y1)]
    [sx y1 nx ny]))


(defn draw-cat-label [ctx label width height x font fill group rotate? midpoint]
  (let [start-line [x midpoint (+ x width) midpoint]
        [x1 y1 x2 y2] (if rotate?
                        (apply rotate-line-45 start-line)
                        start-line)
        align (if rotate? "left" "center")
        width (.abs js/Math (- x2 x1))]
    (.drawTextOnLine ctx label x1 y1 x2 y2 align font nil fill group)
     height))


(defn draw-category-elements [ctx cats scale-width opts]
  (let [{font-size  :font-size
         font       :font
         font-color :font-color} opts
        l-sizes (utils/get-label-sizes cats font font-size) 
        _ (ef/log-debug (pr-str l-sizes cats))
        height (.-height (first l-sizes))
        midpoint (/ height 2) 
        total (reduce #(+ %1 (.-width %2)) 0 l-sizes)
        avg-w (/ total (count cats))
        max-w (reduce #(max %1 (.-width %2)) 0 l-sizes)
        pwidth (/ scale-width (count cats))
        width (+ pwidth (/ pwidth (count cats))) 
        rotate? (> max-w width) ;should we rotate 45 degrees
        _ (ef/log-debug (pr-str scale-width avg-w max-w width))
        pts (map #(if rotate?
                    (+ (* width %) (/ width 2))
                    (* width %))
                 (range (count cats)))
        group (.createGroup ctx)
        fill (graphics/SolidFill. font-color 1)
        font (graphics/Font. font-size font)
        f-sizes (map #(draw-cat-label ctx %1 width height %3 font fill group rotate? midpoint) cats l-sizes pts)]
    (ef/log-debug (pr-str f-sizes))
    {:width width
     :height height
     :group group}))
    

(defn draw-scale-titles [ctx opts]
  (let [{padding    :padding
         width      :width
         height     :height
         y-title    :y-scale-title
         x-title    :x-scale-title
         font       :font
         font-color :scale-title-font-color
         font-size  :scale-title-font-size} opts
        fill (graphics/SolidFill. font-color 1)
        font (graphics/Font. font-size font)]
  [(if y-title
    (let [[size] (utils/get-label-sizes [y-title] font-size)
          offset (+ (/ (.-height size) 2) padding)]
      (.drawTextOnLine ctx y-title offset height offset 0 "center" font nil fill)
      (+ padding (.-height size) 5)))
  (if x-title
    (let [[size] (utils/get-label-sizes [x-title] font-size)
          offset (+ (/ (.-height size) 2) padding)
          y (- height offset)]
      (.drawTextOnLine ctx x-title 0 y width y "center" font nil fill)
      (+ padding (.-height size) 5)))]))
  

(defn line-chart [node series opts]
  (let [{padding        :padding
         categories     :categories
         width          :width
         height         :height
         font           :font
         font-color     :font-color
         value-dot?     :value-dot?
         dot-radius     :dot-radius
         bezier-curve?  :bezier-curve?
         show-grid?     :show-grid-lines?
         grid-color     :grid-color
         stroke?        :stroke?
         stroke-width   :stroke-width
         fill?          :fill?
         animation?     :animations?
         anim-duration  :animation-duration
         s-fnt-sz       :scale-font-size
         s-override?    :scale-override?
         s-min          :scale-min
         s-max          :scale-max
         s-step         :scale-step
         tick-size      :tick-size} opts
        x-label-sizes (map #(utils/get-label-sizes % s-fnt-sz) categories)
        [min-v max-v] (if s-override?
                        [s-min s-max]
                        (apply max (map #(apply max (:values %)) series)))
        y-label-size (reduce #(max %1 (.-width %2)) 0 (utils/get-label-sizes [(str min-v) (str max-v)] s-fnt-sz))
        ctx (graphics/createGraphics width height)
        [padding-x padding-y] (draw-scale-titles ctx opts)
        graph-width (- width padding-x y-label-size padding)
        labels (draw-category-elements ctx categories graph-width opts)
        y-axis (graphics/Path.)
        x-axis (graphics/Path.)
        stroke (graphics/Stroke. 1 grid-color)
        xtmp (+ padding-x y-label-size tick-size)
        ytmp (+ (- height padding-y (:height labels)) tick-size)]
    (ef/log-debug (pr-str xtmp ytmp labels))
    (doto y-axis
      (.moveTo xtmp ytmp)
      (.lineTo xtmp ytmp
               xtmp padding))
    (doto x-axis
      (.moveTo (- xtmp tick-size) (- ytmp tick-size))
      (.lineTo (- xtmp tick-size) (- ytmp tick-size)
               (- width padding)  (- ytmp tick-size)))
    (.drawPath ctx y-axis stroke nil)
    (.drawPath ctx x-axis stroke nil)
    (ef/log-debug (:group labels))
    (.setTransformation (:group labels) (- xtmp (/ (:width labels) 2)) ytmp 0 0 0) 
    (.render ctx)))