(ns enfocus.charts.core
  (:require [enfocus.core :as ef]
            [enfocus.events :as events]
            [enfocus.effects :as effects]
            [enfocus.charts.pie :as pie]
            [goog.fx :as fx]))

(def defaults
  {:pie {:chart-type :pie
         :show-labels? false
         :font "Arial"
         :font-size 12
         :font-color "#9f9f9f"
         :width 400
         :height 400
         :padding nil
         :on-value-mouseover nil
         :on-value-click nil
         :background-color ["#cfcfcf" "#fff"]
         :stroke? true
         :stroke-color "#fff"
         :stroke-width 2
         :animation? true
         :animation-duration 500
         :on-animation-complete nil
         :series-colors ["#F7464A" "#46BFBD" "#FDB45C" "#949FB1" "#4D5360"
                         "#7D4F6D" "#9D9B7F" "#D97041" "#584A5E"]}})

 

(defn pie-chart [data, options]
  (let [config (merge (defaults :pie) options)]
    (fn [node]
       (pie/pie-chart node data config))))           
                         
        
      
         


      