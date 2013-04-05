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

(defn calc-step [num-steps step-value graph-range min max]
  (cond
   (or (< num-steps min)) (let [nstep (/ step-value 2) 
                                nsteps (.round js/Math (/ graph-range nstep))]
                            (calc-step nsteps nstep graph-range min max)) 
   (or (> num-steps max)) (let [nstep (* step-value 2)
                                nsteps (.round js/Math (/ graph-range nstep))]
                            (calc-step nsteps nstep  graph-range min max))
   ;we increment num-steps to include max val
   :else [(inc num-steps) step-value])) 

(defn calculate-scales [ctx series label-height scale-height opts]
  (let [{s-max   :scale-max
         s-min   :scale-min} opts
        max (or s-max (apply max (map #(apply max (:values %)) series)))
        min (or s-min (apply min (map #(apply min (:values %)) series)))
        max-steps (.floor js/Math (/ scale-height (* label-height 0.66)))
        min-steps (.floor js/Math (* (/ scale-height label-height) 0.5))
        g-range (- max min)
        magnitude (.floor js/Math (/ (.log js/Math g-range) (.-LN10 js/Math)))
        s-value (.pow js/Math 10 magnitude)
        graph-min (* s-value
                     (.floor js/Math (/ min (.pow js/Math 10 magnitude))))
        graph-max (* s-value
                     (.ceil js/Math (/ max (.pow js/Math 10 magnitude))))
        graph-range (- graph-max graph-min)
        n-steps (.round js/Math (/ graph-range s-value))
        [num-steps step-value] (calc-step n-steps s-value graph-range min-steps max-steps)
        labels (map #(str (+ graph-min (* step-value %))) (range num-steps))
        step-height (/ scale-height (dec num-steps))]
    {:y-num-steps num-steps
     :y-step-value step-value
     :y-labels labels
     :graph-min graph-min
     :graph-max graph-max
     :step-height step-height}))


(defn draw-y-scale [ctx calcs opts]
  (let [{font-size       :font-size
         tick-size       :tick-size} opts
        {scale           :scale
         scale-height    :scale-height
         y-title-padding :y-title-padding
         y-label-width   :y-label-width
         font            :label-font
         fill            :label-fill
         group           :y-label-group} calcs 
        {num-steps  :y-num-steps
         step-value :y-step-value 
         labels     :y-labels
         min        :graph-min
         step-height :step-height} scale
        xtmp (+ y-title-padding y-label-width)
        ytmp scale-height
        label-widths (utils/get-label-sizes labels font-size)
        pts (map (fn [w c]
                   [(- xtmp (.-width w) tick-size 3 )
                    (- ytmp (* step-height c))
                    (.-width w)])
                 label-widths
                 (range num-steps))]
    (ef/log-debug "doall not working?")
    (count
     (map (fn [l [x y w]]
            (ef/log-debug (pr-str l x y w))
            (.drawTextOnLine ctx l x y (+ x w) y "right" font nil fill group))
          labels
          pts))))
        

(defn do-calculations [ctx series opts]
  (let [{width       :width
         height      :height
         padding     :padding
         cats        :categories
         fnt-sz      :font-size
         fnt-fam     :font
         fnt-color   :font-color
         st-fnt-sz   :scale-title-font-size
         st-fnt-c    :scale-title-font-color
         y-title     :y-scale-title
         x-title     :x-scale-title
         s-min       :scale-min
         s-max       :scale-max}  opts         
        pwidth (- width (* padding 2))
        pheight (- height (* padding 2))
        cat-sizes (utils/get-label-sizes cats fnt-sz fnt-fam)
        label-height (.-height (first cat-sizes))
        max-y (or s-max (apply max (map #(apply max (:values %)) series)))
        min-y (or s-min (apply min (map #(apply min (:values %)) series)))
        y-label-width  (apply max
                              (map #(.-width %)
                                   (utils/get-label-sizes [max-y min-y] fnt-sz)))
        t-sizes (utils/get-label-sizes [x-title y-title] st-fnt-sz fnt-fam)
        [x-title-size y-title-size] t-sizes
        scale-title-height (if y-title
                             (.-height y-title-size)
                             (-.height x-title-size))
        x-title-padding (if x-title (+ scale-title-height 5) 0)
        y-title-padding (if y-title (+ scale-title-height 15) 0)
        scale-width-tmp (- pwidth (+ x-title-padding y-label-width))
        x-label-space (/ scale-width-tmp  (count cats))
        scale-width (- scale-width-tmp x-label-space)
        max-x-label-width (reduce #(if (> %1 (.-width %2)) %1 %2) 0 cat-sizes)
        rotate? (< max-x-label-width x-label-space)
        x-label-area-height (if rotate?
                              (+ (* sin-cos-45 max-x-label-width) label-height)
                              label-height)
        scale-height (- pheight (+ x-title-padding x-label-area-height))
        label-font (graphics/Font. fnt-sz fnt-fam)
        label-fill (graphics/SolidFill. fnt-color 1)
        main-group (.createGroup ctx)
        x-label-group (.createGroup ctx main-group)
        y-label-group (.createGroup ctx main-group)
        scale (calculate-scales ctx series label-height scale-height opts)
        calcs {:main-group main-group
               :x-label-group x-label-group
               :y-label-group y-label-group
               :pwidth pwidth
               :pheight pheight
               :label-height label-height
               :half-label-height (/ label-height 2)
               :scale-title-height (if (or y-title x-title)
                                     scale-title-height 0)
               :x-title-padding x-title-padding
               :y-title-padding y-title-padding
               :y-label-width y-label-width
               :scale-width scale-width
               :scale-height scale-height
               :max-y max-y
               :min-y min-y
               :x-label-space x-label-space
               :x-label-rotate? rotate?
               :x-label-area-height x-label-area-height
               :label-font label-font
               :label-fill label-fill
               :scale scale}]
    (ef/log-debug (pr-str calcs))
    calcs))
        

(defn draw-cat-label [ctx label x calcs opts]
  (let [{rotate?  :x-label-rotate?
         font     :label-font
         fill     :label-fill
         group    :x-label-group
         width    :x-label-space
         midpoint :half-label-height } calcs
        start-line [x midpoint (+ x width) midpoint]
        [x1 y1 x2 y2] (if rotate?
                        (apply rotate-line-45 start-line)
                        start-line)
        align (if rotate? "left" "center")
        width (.abs js/Math (- x2 x1))]
    (.drawTextOnLine ctx label x1 y1 x2 y2 align font nil fill group)))


(defn draw-category-elements [ctx calcs opts]
  (let [{width   :x-label-space
         rotate? :rotate?} calcs
        {cats   :categories} opts
        pts (map #(if rotate?
                    (+ (* width %) (/ width 2))
                    (* width %))
                 (range (count cats)))]
    (doall (map #(draw-cat-label ctx %1 %2 calcs opts) cats pts))))
    

(defn draw-scale-titles [ctx calcs opts]
  (let [{y-title     :y-scale-title
         x-title     :x-scale-title
         font        :font
         font-color  :scale-title-font-color
         font-size   :scale-title-font-size} opts
        {height      :pheight
         width       :scale-width
         t-height    :scale-title-height
         group       :main-group
         y-title-padding     :y-title-padding
         y-label-width       :y-label-width
         x-label-area-height :x-lable-area-height
         x-title-padding     :x-title-padding} calcs
        x1 (+ y-title-padding y-label-width)
        x2 (+ x1 width)
        y1 (- height (+ x-title-padding x-label-area-height))
        oset (/ t-height 2)
        fill (graphics/SolidFill. font-color 1)
        font (graphics/Font. font-size font)]
    (ef/log-debug (pr-str y1 height))
    (if y-title
      (.drawTextOnLine ctx y-title oset y1 oset 0 "center" font nil fill group))
    (if x-title
      (let [y (- height oset)]
        (.drawTextOnLine ctx x-title x1 y x2 y "center" font nil fill group)))))
  

(defn draw-series [ctx series calcs opts]
  (let [{categories   :categories
         colors       :series-colors
         stroke-width :stroke-width} opts
        {height     :scale-height
         width      :scale-width
         scale      :scale
         xstep      :x-label-space
         y-title-padding :y-title-padding
         y-label-width :y-label-width
         group      :main-group} calcs
        {graph-min  :graph-min
         graph-max  :graph-max} scale
        graph-range (- graph-max graph-min)
        x-offset (+ y-title-padding y-label-width)
        scale-factor (/ height graph-range)
        x-pts (map #(+ x-offset (* xstep %)) (range (count categories)))]
    (ef/log-debug (pr-str series colors))
    (doall
     (map (fn [s c]
            (let [path (graphics/Path.)
                  values (:values s)
                  stroke (graphics/Stroke. stroke-width c)
                  y-pts (map #(- height (* scale-factor %)) values)]
              (.moveTo path (first x-pts) (first y-pts))
              (.apply (.-lineTo path) path (into-array (interleave x-pts y-pts)))
              (.drawPath ctx path stroke nil group)))
          series
          colors))))


         

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
        ctx (graphics/createGraphics width height)
        calcs (do-calculations ctx series opts)
        {y-title-padding     :y-title-padding
         y-label-width       :y-label-width
         x-title-padding     :x-title-padding
         x-label-area-height :x-label-area-height
         pwidth              :pwidth
         pheight             :pheight
         main-group          :main-group
         x-label-group       :x-label-group
         x-label-space       :x-label-space
         scale-width         :scale-width
         scale-height        :scale-height} calcs
        xtmp (+ y-title-padding y-label-width)
        ytmp scale-height
        stroke (graphics/Stroke. 1 grid-color)
        x-axis (graphics/Path.)
        y-axis (graphics/Path.)]
    (draw-category-elements ctx calcs opts)
    (draw-scale-titles ctx calcs opts)
    (draw-y-scale ctx calcs opts)
    (draw-series ctx series calcs opts)
    (doto y-axis
      (.moveTo xtmp (+ ytmp tick-size))
      (.lineTo xtmp ytmp
               xtmp 0))
    (doto x-axis
      (.moveTo (- xtmp tick-size) ytmp)
      (.lineTo (- xtmp tick-size) ytmp
               (+ xtmp scale-width) ytmp))
    (.drawPath ctx y-axis stroke nil main-group)
    (.drawPath ctx x-axis stroke nil main-group)
    (.setTransformation x-label-group (- xtmp (/ x-label-space 2)) (+ ytmp 3) 0 0 0)
    (.setTransformation main-group padding padding 0 0 0)
    (.render ctx)))
    
;        x-label-sizes (map #(utils/get-label-sizes % s-fnt-sz) categories)
;        [min-v max-v] (if s-override?
;                        [s-min s-max]
;                        (apply max (map #(apply max (:values %)) series)))
;        y-label-size (reduce #(max %1 (.-width %2)) 0 (utils/get-label-sizes [(str min-v) (str max-v)] s-fnt-sz))
;        [padding-x padding-y] (draw-scale-titles ctx opts)
;        graph-width (- width padding-x y-label-size padding)
;        labels (draw-category-elements ctx categories graph-width opts)
;        y-axis (graphics/Path.)
;        x-axis (graphics/Path.)
;        stroke (graphics/Stroke. 1 grid-color)
;        xtmp (+ padding-x y-label-size tick-size)
;        ytmp (+ (- height padding-y (:height labels)) tick-size)]
;    (ef/log-debug (pr-str xtmp ytmp labels))
;    (doto y-axis
;      (.moveTo xtmp ytmp)
;      (.lineTo xtmp ytmp
;               xtmp padding))
;    (doto x-axis
;      (.moveTo (- xtmp tick-size) (- ytmp tick-size))
;      (.lineTo (- xtmp tick-size) (- ytmp tick-size)
;               (- width padding)  (- ytmp tick-size)))
;    (.drawPath ctx y-axis stroke nil)
;    (.drawPath ctx x-axis stroke nil)
;    (ef/log-debug (:group labels))
;    (.setTransformation (:group labels) (- xtmp (/ (:width labels) 2)) ytmp 0 0 0) 
;    (.render ctx)))