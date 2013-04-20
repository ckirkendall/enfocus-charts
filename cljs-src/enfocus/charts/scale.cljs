(ns enfocus.charts.scale)


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
     :graph-range graph-range
     :step-height step-height
     :scale-factor (/ scale-height graph-range)}))
