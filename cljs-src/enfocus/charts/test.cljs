(ns enfocus.charts.test
  (:require [enfocus.core :as ef]
            [enfocus.effects :as effects]
            [enfocus.charts.core :as charts])
  (:require-macros [enfocus.macros :as em]))

(def pie-data [{:value 30 :label "time"}
               {:value 30 :label "pizza"}
               {:value 25 :label "freinds"}
               {:value 15 :label "country man"}
               {:value 10 :label "fore fathers"}
               {:value 10 :label "nice guys"}
               {:value 5  :label "dudes"}])

(def pie-options {:show-labels? true
                  :ease-fn effects/circular-out
                  :on-value-click #(js/alert (str (:label %) ": " (:value %)))})

(def line-data [{:label "Series1"
                 :values [10 12 90 40 50]}
                {:label "Series2"
                 :values [20 60 30 90 15]}
                {:label "Series3"
                 :values [15 80 40 10 5]}])
  
(def line-options {:tick-size 3
                   :scale-min 0
                   :scale-max 100
                   :y-scale-title "Temperature"
                   :x-scale-title "Month"
                   :categories ["Jan" "Feb" "Mar" "Apr" "May"]}) 

(em/defaction draw-charts []
  "#pchart-div" (charts/pie-chart pie-data pie-options)
  "#lchart-div" (charts/line-chart line-data line-options))

(set! (.-onload js/window) draw-charts)
