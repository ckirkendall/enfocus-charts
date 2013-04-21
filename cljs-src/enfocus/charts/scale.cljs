(ns enfocus.charts.scale)


(defn get-stack-sums [stack]
  (apply map (fn [& vals] (apply + vals)) (map :values stack)))

(defn max-stack [stack]
  (apply max (get-stack-sums stack)))

(defn min-stack [stack]
  (apply min (get-stack-sums stack)))


(defn calc-scale [ctx stacks label-height scale-height opts]
  (let [{s-max     :scale-max
         s-min     :scale-min} opts
        max (or s-max (apply max (map #(max-stack %) stacks)))
        min (or s-min (apply min (map #(min-stack %) stacks)))
        s-range (- max min)
        ticks (.floor js/Math (/ scale-height label-height))
        tick-size-tmp (/ s-range ticks)
        x-tmp (.ceil js/Math (- (.log js/Math tick-size-tmp) 1))
        pow-x (.pow js/Math 10 x-tmp)
        step-value (* (.ceil js/Math (/ tick-size-tmp pow-x)) pow-x)
        graph-min (* step-value (.round js/Math (/ min step-value)))
        graph-max (* step-value (.round js/Math (+ 1 (/ max step-value))))
        graph-range (- graph-max graph-min)
        num-steps (/ graph-range step-value)
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

