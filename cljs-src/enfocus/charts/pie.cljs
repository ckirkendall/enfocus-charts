(ns enfocus.charts.pie
  (:require [enfocus.core :as ef]
            [enfocus.charts.utils :as cu]
            [enfocus.charts.tooltip :as tt]
            [goog.style :as style]
            [goog.events :as events]
            [enfocus.effects :as effects]
            [goog.fx :as fx]
            [goog.graphics :as graphics]
            [goog.fx.Animation.EventType :as aet]
            [goog.ui.Tooltip :as tooltip]))

(declare build-segment-path)
(def hide-offset 100)


(defn get-position [ctx x y]
  (let [elem (.getContentElement ctx)
        pos (style/getClientPosition elem)
        nx (- x (.-x pos))
        ny (- y (.-y pos))]
    [nx ny]))


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
      (events/listen elem "mouseout" #(drawf false))))
  (when (:tooltip opts)
    (let [tooltip (:tooltip opts)
          f1 #(let [[x y] (get-position (.getGraphics elem)
                                        (.-clientX %)
                                        (.-clientY %))]
                (tt/show tooltip x y data))]
      (events/listen elem "mousemove" f1)
      (events/listen elem "mouseout" #(tt/hide tooltip)))))    



(defn- draw-label [ctx data opts]
  (let [{start-angle :start-angle
         seg-angle   :seg-angle
         text        :label
         label-elem  :label-element
         point-elem  :pointer-element
         label-width :label-width
         offsety     :label-height} data
        {radius      :radius
         font-color  :font-color
         font-size   :font-size
         font        :font
         width       :width
         height      :height
         main-group  :group} opts
        w-mid (/ width 2)
        h-mid (/ height 2)
        angle (+ start-angle (/ seg-angle 2))
        [x1 y1] (cu/get-radius-point (+ radius 2) angle w-mid h-mid)
        [x2 y2] (cu/get-radius-point (+ radius 10) angle w-mid h-mid)
        [x3 y3] (cu/get-radius-point (+ radius 14) angle w-mid h-mid)
        tx (if (> (mod (+ angle 90) 360) 180) (- x3 label-width) x3)
        ty (if (> (mod angle 360) 180) (- y3 (/ offsety 2)) (- y3 (/ offsety 2)))
        path (graphics/Path.)]
    (doto path
      (.moveTo x1 y1)
      (.lineTo x1 y1 x2 y2))
    (.setPath point-elem path)
    (.setTransformation label-elem (+ tx hide-offset) (+ ty hide-offset) 0 0 0)))
    

(defn build-segment-path [data opts]
  (let [{start-angle :start-angle
         seg-angle   :seg-angle
         selected    :selected } data
        {width       :width
         height      :height
         radius      :radius} opts
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
         show-lables? :show-labels?
         group        :group} opts
        {value        :value
         color        :color
         slice        :slice-element} data 
        seg-angle (* anim-rot (/ value total) 360)
        fill (graphics/SolidFill. color 1)
        stroke (when stroke?
                 (graphics/Stroke. (:stroke-width opts) (:stroke-color opts)))
        ndata (assoc data :start-angle start-angle :seg-angle seg-angle)
        path (build-segment-path ndata opts)]
    (when show-lables?
      (draw-label ctx ndata opts))
    (.setPath slice path)
    (when (= anim-rot 1)
      (handle-events ndata slice opts))
    (+ start-angle seg-angle)))


(defn- draw-segments [ctx anim-rot opts]
    (.suspend ctx)
    (let [group (.createGroup ctx)]
      (reduce #(draw-segment ctx %1 anim-rot %2 opts)
              -45 (:data opts)))
    (.resume ctx))


(defn do-calculations [ctx data opts]
  (let [{width        :width
         height       :height
         pad          :padding
         stroke?      :stroke?
         stroke-width :stroke-width
         stroke-color :stroke-color
         font         :font
         font-size    :font-size
         font-color   :font-color
         show-labels? :show-labels?
         tooltip?     :tooltip?
         series-colors :series-colors} opts 
        main-group (.createGroup ctx)
        labels-group (.createGroup ctx main-group) 
        slices-group (.createGroup ctx main-group)
        tooltip (when tooltip?
                  (tt/create-hidden-tooltip ctx opts main-group width height))
        stroke (when stroke? (graphics/Stroke. stroke-width stroke-color))
        slices (map #(let [fill (graphics/SolidFill. %2 1)]
                       (cu/empty-path-elem ctx stroke fill slices-group))
                    data series-colors)
        l-stroke (graphics/Stroke. 1 font-color)
        l-fill (graphics/SolidFill. font-color 1)
        l-font (graphics/Font. font-size font)
        labels (map :label data)
        label-sizes (cu/get-label-sizes labels font-size font)
        max-width (apply max (map #(.-width %) label-sizes))
        padding  (if show-labels? (+ pad max-width) pad)
        radius (- (/ (min width height) 2) padding)
        offset (* -1 hide-offset)
        draw-label #(.drawText ctx %1 offset offset (.-width %2) (.-height %2)
                               "center" "top" l-font nil l-fill labels-group)
        label-elems  (map draw-label labels label-sizes)
        label-pointers (map #(cu/empty-path-elem ctx l-stroke nil labels-group)
                            labels)
        total (reduce #(+ %1 (:value %2)) 0 data)
        ndata (map #(assoc %1
                      :label-element %2
                      :slice-element %3
                      :pointer-element %4
                      :label-width (.-width %5)
                      :label-height (.-height %5))
                   data label-elems slices label-pointers label-sizes )]
    ;(ef/log-debug (pr-str ndata))
    {:data ndata
     :radius radius
     :total  total
     :main-group main-group
     :tooltip tooltip}))
    
        

(defn pie-chart [node data opts]
  (let [{width        :width
         height       :height
         animation?   :animation?
         tooltip?     :tooltip?} opts
        ctx (graphics/createGraphics width height)
        ease-fn (or (:ease-fn opts) effects/linear)
        anim (when animation?
               (fx/Animation. (array 0) (array 1)
                              (:animation-duration opts) ease-fn))
        main-group (.createGroup ctx)
        nopts (merge opts (do-calculations ctx data opts))
        draw-func #(draw-segments ctx % nopts)]
    (if anim
      (do
        (events/listen anim aet/ANIMATE #(draw-func (.-x %)))
        (events/listen anim aet/END #(draw-func 1))
        (.render ctx node)
        (.play anim))
      (do
        (.render ctx node)
        (draw-func 1)))))
                                    
    
    
        
                     