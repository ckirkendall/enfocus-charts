(ns enfocus.charts.tooltip
  (:require [enfocus.core :as ef]
            [enfocus.charts.utils :as utils]
            [goog.events :as events]
            [enfocus.effects :as effects]
            [goog.fx :as fx]
            [goog.graphics :as graphics]
            [goog.fx.Animation.EventType :as aet]))


(defprotocol Tooltip
  (show [this x y data])
  (hide [this]))

(defn curve-rec-path [width height radius]
  (let [path (graphics/Path.)]
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

(defn calculate-xy [x y w h bw bh]
  (let [nx (if (or (> (+ x w) bw)
                   (< (- y h) 0)) (- x w) x)
        ny (if (< (- y h) 0) y (- y h))]
    [nx ny]))

(defn update-text-elements [calcs data opts]
  (let [{padding    :tooltip-padding
         fnt-sz     :tooltip-font-size
         font       :font} opts
        {group      :group
         label-elem :label-element
         cat-elem   :category-element
         val-elem   :value-element
         rec-elem   :rec-element } calcs
        {val        :value
         label      :series-label
         category   :category} data
        label-text (str label ": ")
        [label-size] (utils/get-label-sizes [(str label-text ".")] fnt-sz font)
        [l1-w l1-h] (if category
                      (let [[sz] (utils/get-label-sizes [category] fnt-sz font)]
                        [(.-width sz) (.-height sz)])
                      [0 0])
        [l2-w l2-h] (let [[sz] (utils/get-label-sizes [val] fnt-sz font)]
                      [(+ (.-width sz) (.-width label-size)) (.-height sz)])
        width (+ (* padding 2) (max l1-w l2-w))
        height (+ (* padding 2) l1-h l2-h)
        rec (curve-rec-path width height 5)]
    (ef/log-debug (pr-str label val category width height))
    (.setPath rec-elem rec)
    (.setSize group width height)
    (.setTransformation cat-elem padding padding 0 0 0)
    (.setText cat-elem category)
    (.setTransformation label-elem padding (+ padding l1-h) 0 0 0)
    (.setText label-elem label-text)
    (.setTransformation val-elem
                       (+ padding (.-width label-size))
                       (+ padding l1-h) 0 0 0)
    (.setText val-elem val)
    [width height]))
    
   
(defn do-calculations [ctx opts group]
  (let [{padding     :tooltip-padding
         bg-color    :tooltip-background-color
         font-color  :tooltip-font-color
         label-color :tooltip-label-color
         font-size   :tooltip-font-size
         font        :font
         s-width     :tooltip-stroke-width
         s-color     :tooltip-stoke-color
         opacity     :tooltip-opacity} opts
        font (graphics/Font. font-size font) 
        fill (graphics/SolidFill. bg-color opacity)
        font-fill (graphics/SolidFill. font-color 1)
        stroke (graphics/Stroke. s-width s-color)
        tooltip-group (.createGroup ctx group)
        rec-path (.moveTo (graphics/Path.) 0 0)
        empty-text #(.drawText ctx "" 0 0 200 20 "left" "top"
                               font nil font-fill tooltip-group)]
    {:rec-element (.drawPath ctx rec-path stroke fill tooltip-group)
     :group tooltip-group
     :value-element (empty-text)
     :label-element (empty-text)
     :category-element (empty-text)}));;TODO 
        


(defn create-hidden-tooltip [ctx opts group w-bounds h-bounds]
  (let [calcs (do-calculations ctx opts group)
        data-atm  (atom {})
        sz-atm (atom 0)
        show-atm  (atom false)
        t-group (:group calcs)]
    (reify Tooltip
      (show [elem x y data]
        (ef/log-debug "showing tooltip")
        (when (not= data @data-atm)
          (swap! data-atm
                 (fn []
                   (swap! sz-atm #(update-text-elements calcs data opts))
                   data)))
        (let [[w h] @sz-atm
              [nx ny] (calculate-xy x y w h w-bounds h-bounds)]
          (.setTransformation t-group nx ny 0 0 0))
        (swap! show-atm (fn [] true)))
      (hide [elem]
        (swap! show-atm (fn [] false))
        (ef/setTimeout (fn []
                         (when (not @show-atm)
                           (ef/log-debug "hiding tooltip")
                           (.setTransformation t-group -100 -100 0 0 0)))
                       200)))))
      