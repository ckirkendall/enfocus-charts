(ns enfocus.charts.line
  (:use [enfocus.charts.events :only (handle-base-events add-events)])
  (:require [enfocus.core :as ef]
            [enfocus.charts.utils :as utils]
            [enfocus.charts.scale :as scale]
            [enfocus.charts.tooltip :as tt]
            [enfocus.charts.events :as ce]
            [goog.events :as events]
            [enfocus.effects :as effects]
            [goog.fx :as fx]
            [goog.graphics :as gg]
            [goog.graphics.ext :as ext]
            [goog.fx.Animation.EventType :as aet]))

(defn is-bar [opts]
  (= (:chart-type opts) :bar))


(defn- handle-events [ctx data s-elem v-elem calcs opts]
  (handle-base-events data v-elem opts)
  (let [sfunc #(do (when s-elem (utils/update-stroke s-elem %))
                   (utils/update-stroke v-elem %))
        tooltip @(:tooltip calcs)
        [tmp-x tmp-y] (:coords data)
        [x y] (if (is-bar opts)
                [(+ tmp-x (/ (:bar-width calcs) 2)) tmp-y]
                [tmp-x tmp-y])]
    (add-events v-elem [:mouseover #(do (when tooltip (tt/show tooltip x y data))
                                        (sfunc (* (:stroke-width opts) 2)))
                        :mouseout #(do (when tooltip (tt/hide tooltip))
                                       (sfunc (:stroke-width opts)))])))


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



(defn draw-x-grid [ctx calcs opts]
  (let [{height      :scale-height
         scale-width :scale-width
         xtmp        :x-offset
         step-width  :x-label-space
         tick-size   :tick-size
         group       :grid-group} calcs
        num-steps (count (:categories opts))
        num-steps (if (is-bar opts) (inc num-steps) num-steps)]
    (ef/log-debug num-steps)
    (doseq [step (range num-steps)]
      (let [path (gg/Path.)
            y1 (+ height tick-size)
            y2 0
            x (+ xtmp (* step-width step))
            stroke (gg/Stroke. 1 (:grid-color opts))]
        (ef/log-debug (pr-str "x-grid:" y1 y2 x))
        (doto path
          (.moveTo x y1)
          (.lineTo x y2))
        (.drawPath ctx path stroke nil group)))))
    

(defn draw-y-grid [ctx calcs opts]
  (let [{height      :scale-height
         scale-width :scale-width
         xtmp        :x-offset
         x-space     :x-label-space
         tick-size   :tick-size
         scale       :scale
         group       :grid-group} calcs
        {num-steps   :y-num-steps
         step-height :step-height} scale]
    (doseq [step (range num-steps)]
      (let [path (gg/Path.)
            x1 (- xtmp tick-size)
            x2 (+ xtmp scale-width)
            y (- height (* step-height step))
            stroke (gg/Stroke. 1 (:grid-color opts))]
        (doto path
          (.moveTo x1 y)
          (.lineTo x2 y))
        (.drawPath ctx path stroke nil group)))))

(defn draw-y-scale [ctx calcs opts]
  (let [{font-size       :font-size
         tick-size       :tick-size} opts
        {scale           :scale
         scale-height    :scale-height
         y-title-padding :y-title-padding
         y-label-width   :y-label-width
         font            :label-font
         fill            :label-fill
         group           :y-label-group
         xtmp            :x-offset} calcs 
        {num-steps  :y-num-steps
         step-value :y-step-value 
         labels     :y-labels
         min        :graph-min
         step-height :step-height} scale
        ytmp scale-height
        label-widths (utils/get-label-sizes labels font-size font)
        pts (map (fn [w c]
                   [(- xtmp (.-width w) tick-size 3 )
                    (- ytmp (* step-height c))
                    (.-width w)])
                 label-widths
                 (range num-steps))]
    (count
     (map (fn [l [x y w]]
            (.drawTextOnLine ctx l x y (+ x w) y "right" font nil fill group))
          labels
          pts))))



(defn build-line-series-elements [ctx series group opts]
  (let [{chart-type     :chart-type
         stroke?        :stroke?
         stroke-width   :stroke-width
         fill?          :fill?
         opacity        :fill-opacity
         colors         :series-colors} opts
        s-stroke #(gg/Stroke. stroke-width %)
        s-fill (if fill? #(gg/SolidFill. % opacity) #(do nil))
        s-elems (map #(utils/empty-path-elem ctx (s-stroke %2) nil group)
                          series
                          colors)
        fill-elems (when fill? 
                     (map #(utils/empty-path-elem ctx nil (s-fill %2) group)
                          series
                          colors))]
    (if (= chart-type :bar-chart)
      s-elems
      [s-elems fill-elems])))



(defn build-bar-series-elements [ctx series group opts]
  (let [{chart-type     :chart-type
         stroke?        :stroke?
         stroke-width   :stroke-width
         fill?          :fill?
         opacity        :fill-opacity
         colors         :series-colors} opts
        s-stroke #(gg/Stroke. stroke-width %)
        s-fill (if fill? #(gg/SolidFill. % opacity) #(do nil))
        s-elems (map (fn [{vals :values} c]
                       (map #(utils/empty-path-elem ctx (s-stroke c) nil group)
                            vals))
                          series
                          colors)
        fill-elems (when fill?
                     (map (fn [{vals :values} c]
                           (map #(utils/empty-path-elem ctx nil (s-fill c) group)
                                 vals))
                          series
                          colors))]
    (if (= chart-type :bar-chart)
      s-elems
      [s-elems fill-elems])))

(def elem-builder {:line build-line-series-elements
                   :bar build-bar-series-elements})

(defn build-empty-series-elements [ctx series group opts]
  ((elem-builder (:chart-type opts)) ctx series group opts))


(defn do-calculations [ctx series opts]
  (let [{width        :width
         height       :height
         padding      :padding
         cats         :categories
         fnt-sz       :font-size
         fnt-fam      :font
         fnt-color    :font-color
         st-fnt-sz    :scale-title-font-size
         st-fnt-c     :scale-title-font-color
         y-title      :y-scale-title
         x-title      :x-scale-title
         s-min        :scale-min
         s-max        :scale-max
         categories   :categories
         stroke?      :stroke?
         stroke-width :stroke-width
         fill?        :fill?
         colors       :series-colors
         opacity      :fill-opacity
         tooltip?     :tooltip?}  opts         
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
        y-title-padding (if y-title (+ scale-title-height 20) 0)
        scale-width-tmp (- pwidth (+ y-title-padding y-label-width))
        x-label-space (/ scale-width-tmp  (count cats))
        scale-width (if (is-bar opts)
                      scale-width-tmp
                      (- scale-width-tmp x-label-space))
        max-x-label-width (reduce #(if (> %1 (.-width %2)) %1 %2) 0 cat-sizes)
        rotate? (< max-x-label-width x-label-space)
        x-label-area-height (if rotate?
                              (+ (* sin-cos-45 max-x-label-width) label-height)
                              label-height)
        scale-height (- pheight (+ x-title-padding x-label-area-height))
        label-font (gg/Font. fnt-sz fnt-fam)
        label-fill (gg/SolidFill. fnt-color 1)
        main-group (.createGroup ctx)
        x-label-group (.createGroup ctx main-group)
        y-label-group (.createGroup ctx main-group)
        grid-group (.createGroup ctx main-group)
        series-group (.createGroup ctx main-group)
        stacks (vals (group-by #(if (:stack %) (:stack %) (gensym)) series)) 
        scale (scale/calc-scale ctx stacks label-height scale-height opts)
        _ (ef/log-debug (pr-str scale))
        graph-min (:graph-min scale)
        graph-range (:graph-range scale)
        x-offset (+ y-title-padding y-label-width)
        tooltip (when tooltip?
                  (delay (tt/create-hidden-tooltip ctx opts main-group
                                         scale-width scale-height)))
        s-elems (build-empty-series-elements ctx series series-group opts)
        bar-width (when (is-bar opts) (/ x-label-space (inc (count stacks))))
        calcs {:main-group main-group
               :tooltip tooltip
               :x-label-group x-label-group
               :y-label-group y-label-group
               :grid-group grid-group
               :series-group series-group
               :series-elements s-elems
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
               :x-offset x-offset
               :label-font label-font
               :label-fill label-fill
               :scale scale
               :bar-width bar-width
               :stacks stacks}]
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
        fill (gg/SolidFill. font-color 1)
        font (gg/Font. font-size font)]
    (if y-title
      (.drawTextOnLine ctx y-title oset y1 oset 0 "center" font nil fill group))
    (if x-title
      (let [y (- height oset)]
        (.drawTextOnLine ctx x-title x1 y x2 y "center" font nil fill group)))))


(defn create-bezier-coords [coords xstep]
  (let [vcoords (vec coords)
        n (count vcoords)
        f (first coords)
        hstep (/ xstep 2)
        qstep (/ xstep 4)]
    (mapcat #(let [[px py] (get vcoords (dec %))
                   [x y] (get vcoords %)
                   nx (if (< px x) (- x hstep) (+ x hstep))]
               [nx py
                nx y
                x y]) (range 1 n))))


(defn points-for-stack
  ([height scale anim x-vals x-trans stack]
     (let [prev  (repeat (count (:values (first stack))) 0)]
       (points-for-stack height scale anim x-vals x-trans stack prev)))
  ([height scale anim x-vals x-trans stack prev]
     (let [{scale-factor :scale-factor
            graph-range  :graph-range
            graph-min    :graph-min} scale]
       (if (empty? stack) nil
           (let [{vals :values label :label} (first stack)
                 nvals (map #(+ %1 %2) vals prev)
                 pos-offset (when (neg? graph-min) 0 graph-min) 
                 y-vals (map #(do [(- (+ height (* scale-factor graph-min))
                                      (* anim scale-factor %1))
                                         ;(- %1 pos-offset)))
                                   (- (+ height (* scale-factor graph-min))
                                      (* anim scale-factor %2))
                                         ;(- %2 pos-offset)))
                                   %1 %3]) nvals prev vals)]
             (ef/log-debug (pr-str "POINTS: " y-vals x-vals prev nvals))
             (conj (points-for-stack height scale anim x-vals x-trans
                                           (rest stack) nvals)
                   (map (fn [[x c] [yt yb tv v]]
                          {:coords [(+ x x-trans) yt]
                           :bottom-coords [(+ x x-trans) yb] 
                           :series-label label
                           :value v
                           :total-value tv
                           :category c}) x-vals y-vals)))))))
              

(defn draw-bar-series [ctx series calcs opts anim]
  (let [{categories       :categories
         colors           :series-colors
         stroke-width     :stroke-width
         fill?            :fill?
         opacity          :fill-opacity} opts
        {height           :scale-height
         width            :scale-width
         scale            :scale
         xstep            :x-label-space
         y-title-padding  :y-title-padding
         y-label-width    :y-label-width
         group            :series-group
         x-offset         :x-offset
         base-coords      :base-coords
         s-elements       :series-elements
         bar-width        :bar-width
         stacks           :stacks} calcs
        {graph-range      :graph-range
         graph-min        :graph-min
         scale-factor     :scale-factor} scale
        [series-elements fill-elements] s-elements
        n-steps (range (count categories))
        x-vals (map #(do [(+ x-offset (* xstep %2)) %1]) categories n-steps)
        x-trans (map #(+ (/ bar-width 2) (* bar-width %)) (range (count stacks)))
        data (mapcat #(points-for-stack height scale anim x-vals %2 %1)
                     stacks x-trans)]
    (doall
     (map (fn [vals s-elems f-elems]
            (doall
             (map (fn [{[x y] :coords
                        [bx by] :bottom-coords :as val} s-elem f-elem]
                    (let [path (gg/Path.)]
                      (doto path
                        (.moveTo bx by)
                        (.lineTo x y
                                 (+ x bar-width) y
                                 (+ bx bar-width) by))
                      (.setPath s-elem path))
                    (if fill?
                      (let [path (gg/Path.)]
                        (doto path
                          (.moveTo bx by)
                          (.lineTo x y
                                   (+ x bar-width) y
                                   (+ bx bar-width) by)
                          (.close))
                        (.setPath f-elem path)))) vals s-elems f-elems)))
          data
          series-elements
          (if fill? fill-elements series-elements)))
    (doall (map #(handle-events ctx %1 nil %2 calcs opts)
                (flatten data)
                (flatten fill-elements)))))
 

(defn draw-line-series [ctx series calcs opts anim]
  (let [{categories       :categories
         colors           :series-colors
         stroke-width     :stroke-width
         fill?            :fill?
         opacity          :fill-opacity
         value-dot?       :value-dot?
         dot-radius       :dot-radius
         dot-stroke-color :dot-stroke-color
         bezier-curve?    :bezier-curve?} opts
        {height           :scale-height
         width            :scale-width
         scale            :scale
         xstep            :x-label-space
         group            :series-group
         x-offset         :x-offset
         base-coords      :base-coords
         s-elements       :series-elements
         stacks           :stacks} calcs
        {graph-range      :graph-range
         graph-min        :graph-min
         scale-factor     :scale-factor} scale
        [series-elements fill-elements] s-elements
        nxsteps (range (count categories))  
        x-vals (map #(do [(+ x-offset (* xstep %2)) %1]) categories nxsteps)
        data (mapcat #(points-for-stack height scale anim x-vals 0 %1)
                     stacks)]
    (doall
     (map (fn [data e1 e2]
            (let [path (gg/Path.)
                  {[x y] :coords} (first data)
                  t-coords (map :coords data)
                  b-coords (reverse (map :bottom-coords data))
                  [bx by] (first b-coords)
                  coords (if bezier-curve?
                           (create-bezier-coords t-coords xstep)
                           (flatten t-coords))
                  bottom-coords (if bezier-curve?
                                  (create-bezier-coords b-coords xstep)
                                  (flatten b-coords))
                  pts (into-array coords)
                  bpts (into-array bottom-coords)]
              (.moveTo path x y)
              (if bezier-curve?
                (.apply (.-curveTo path) path pts)
                (.apply (.-lineTo path) path pts))
              (.setPath e1 path)  
              (when fill?
                (let [f-path (gg/Path.)]
                  (.moveTo f-path x y)
                  (if bezier-curve?
                    (do
                      (.apply (.-curveTo f-path) f-path pts)
                      (.lineTo f-path bx by)
                      (.apply (.-curveTo f-path) f-path bpts))
                    (do
                      (.apply (.-lineTo f-path) f-path pts)
                      (.lineTo f-path bx by)
                      (.apply (.-lineTo f-path) f-path bpts)))
                  ;(.lineTo f-path (+ width x-offset) height)
                  (.close f-path)
                  (.setPath e2 f-path)))))
          data
          series-elements
          (if fill? fill-elements series-elements)))
    (when (and value-dot? (= anim 1))
      (let [dstroke (gg/Stroke. stroke-width dot-stroke-color)]
      (doall
       (map #(doseq [{[x y] :coords :as d} %1]
               (let [fill (gg/SolidFill. %3 1)
                     elem (.drawCircle ctx x y dot-radius dstroke fill group)]
                 (handle-events ctx d %2 elem calcs opts)))
            data
            series-elements
            colors))))))


(defn draw-chart-setup [ctx calcs opts]
  (draw-y-grid ctx calcs opts)
  (draw-x-grid ctx calcs opts)
  (draw-category-elements ctx calcs opts)
  (draw-scale-titles ctx calcs opts)
  (draw-y-scale ctx calcs opts))


(defn series-chart [node series opts]
  (let [{padding        :padding
         chart-type     :chart-type
         width          :width
         height         :height
         animation?     :animation?
         anim-duration  :animation-duration
         tick-size      :tick-size
         grid-color     :grid-color} opts
        ctx (gg/createGraphics width height)
        calcs (do-calculations ctx series opts)
        {y-title-padding     :y-title-padding
         y-label-width       :y-label-width
         main-group          :main-group
         x-label-space       :x-label-space
         x-label-group       :x-label-group
         scale-height        :scale-height
         scale-width         :scale-width} calcs
        xtmp (+ y-title-padding y-label-width)
        ytmp scale-height
        stroke (gg/Stroke. 1 grid-color)
        x-axis (gg/Path.)
        y-axis (gg/Path.)
        ease-fn (or (:ease-fn opts) effects/linear)
        anim (when animation?
               (fx/Animation. (array 0) (array 1) anim-duration ease-fn))
        chart-func (cond
                    (= chart-type :line) draw-line-series
                    (= chart-type :bar) draw-bar-series
                    :else nil)
        draw #(chart-func ctx series calcs opts %)]
    (draw-chart-setup ctx calcs opts)
    (if anim
      (do
        (events/listen anim aet/ANIMATE #(draw (.-x %)))
        (events/listen anim aet/END #(draw 1)))
       (draw 1))
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
    (let [x-label-trans (if (is-bar opts) xtmp (- xtmp (/ x-label-space 2)))]
      (.setTransformation x-label-group x-label-trans (+ ytmp 3) 0 0 0))
    (.setTransformation main-group padding padding 0 0 0)
    (.render ctx node)
    (when anim (.play anim))))
    




                              
                         