(ns enfocus.charts.tooltip
  (:require [enfocus.core :as ef]
            [enfocus.charts.utils :as utils]
            [goog.events :as events]
            [enfocus.effects :as effects]
            [goog.fx :as fx]
            [goog.graphics :as graphics]
            [goog.fx.Animation.EventType :as aet]))


(def point-offset 3)

(defprotocol Tooltip
  (show [this x y data])
  (hide [this]))


(defn calculate-xy [x y w h bw bh]
  (let [nx (if (or (> (+ point-offset x w) bw)
                   (< (- y h point-offset) 0))
             (- x w point-offset)
             (+ x point-offset)) 
        ny (if (< (- y h) 0)
             (+ y point-offset)
             (- y h point-offset))]
    [nx ny]))

(defn get-tootip-content [data opts]
  (let [content (:tooltip-content opts)]
    (map (fn [[s & keys]]
           (apply format s (map #(% data) keys))) content)))


(defn update-text-elements [calcs data opts]
  (let [{padding    :tooltip-padding
         fnt-sz     :tooltip-font-size
         font       :font} opts
        {group      :group
         lines      :lines
         rec-elem   :rec-element} calcs
        content (get-tootip-content data opts)
        sizes (utils/get-label-sizes content fnt-sz font)
        line-height (.-height (first sizes))
        height (+ (* padding 2) (reduce #(+ %1 (.-height %2)) 0 sizes))
        width (+ (* padding 2) (reduce #(+ %1 (.-width %2)) 0 sizes))
        rec (utils/curve-rec-path width height 5)]
    (ef/log-debug (first sizes))
    (ef/log-debug (pr-str content width height))
    (.setPath rec-elem rec)
    (.setSize group width height)
    (doall (map (fn [l s r]
           (.setTransformation l padding (+ padding (* r line-height)) 0 0 0)
           (.setText l s)) lines content (range (count content))))
    [width height]))
    
   
(defn do-calculations [ctx opts group]
  (let [{padding     :tooltip-padding
         bg-color    :tooltip-background-color
         font-color  :tooltip-font-color
         font-size   :tooltip-font-size
         font        :font
         s-width     :tooltip-stroke-width
         s-color     :tooltip-stoke-color
         opacity     :tooltip-opacity
         tooltip-content :tooltip-content} opts
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
     :lines (map #(empty-text) tooltip-content)}))
        


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
                       (:tooltip-hide-delay opts))))))
      