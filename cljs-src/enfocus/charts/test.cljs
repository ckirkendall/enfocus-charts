(ns enfocus.charts.test
  (:require [enfocus.core :as ef]
            [enfocus.effects :as effects]
           [enfocus.charts.core :as charts])
  (:require-macros [enfocus.macros :as em]))

(def data [{:value 30 :label "time"}
           {:value 30 :label "pizza"}
           {:value 25 :label "freinds"}
           {:value 15 :label "country man"}
           {:value 10 :label "fore fathers"}
           {:value 10 :label "nice guys"}
           {:value 5  :label "dudes"}
           {:value 30 :label "time"}
           {:value 30 :label "pizza"}
           {:value 25 :label "freinds"}
           {:value 15 :label "country man"}
           {:value 10 :label "fore fathers"}
           {:value 10 :label "nice guys"}
           {:value 5  :label "dudes"}])

(def options {:stroke-width 1
              :show-labels? true
              :ease-fn effects/circular-out
              :on-value-click #(js/alert (str (:label (:data %)) ": " (:value (:data %))))})

(em/defaction draw-pie []
  "#chart-div" (charts/pie-chart data options))

(set! (.-onload js/window) draw-pie)

