(ns enfocus.charts.core
  (:require [enfocus.core :as ef]
            [enfocus.events :as events]
            [enfocus.effects :as effects]
            [enfocus.charts.pie :as pie]
            [enfocus.charts.line :as line]
            [goog.fx :as fx]))

(def defaults
  {:general {:font "Arial"
             :font-size 12
             :font-color "#3f3f3f"
             :padding 10
             :stroke? true
             :stroke-color "#3f3f3f"
             :stroke-width 1
             :on-value-mouseout nil
             :on-value-mouseover nil
             :on-value-click nil
             :animation? true
             :animation-duration 500
             :on-animation-complete nil}
   :pie {:chart-type :pie
         :padding nil
         :show-labels? false
         :font-color "#9f9f9f"
         :width 400
         :height 400
         :stroke-color "#fff"
         :slice-pop true
         :series-colors ["#F7464A" "#46BFBD" "#FDB45C" "#949FB1" "#4D5360"
                         "#7D4F6D" "#9D9B7F" "#D97041" "#584A5E"]}
   :line {:chart-type :line
          :width 500
          :height 400
          :y-scale-title nil
          :x-scale-title nil
          :show-grid-lines? true
          :grid-color "#afafaf"
          :scale-title-font-size 15
          :scale-title-font-color "#3f3f3f"
          :series-colors ["#F7464A" "#46BFBD" "#FDB45C" "#949FB1" "#4D5360"
                         "#7D4F6D" "#9D9B7F" "#D97041" "#584A5E"]}})

(defn get-defaults* [type]
    (merge (defaults :general) (defaults type)))

(def get-defaults (memoize get-defaults*))

(defn merge-options [options type]
  (merge (get-defaults type) options))

(defn pie-chart [data options]
  (let [config (merge-options options :pie)]
    (fn [node] (pie/pie-chart node data config))))           

(defn line-chart [data options]
  (let [config (merge-options options :line)]
    (fn [node] (line/line-chart node data config))))

