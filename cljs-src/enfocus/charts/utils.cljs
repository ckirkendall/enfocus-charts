(ns enfocus.charts.utils
  (:require [enfocus.core :as ef]
            [goog.dom :as dom]
            [goog.style :as style]))


(def hide-style (.-strobj {"style" "visibility: hidden; position: absolute; top: -100px; left: 0px;"}))

(defn get-radius-point [radius angle offsetx offsety]
  (let [pi-d (/ (.-PI js/Math) 180)]
    [(+ (* radius (.cos js/Math (* angle pi-d))) offsetx)
     (+ (* radius (.sin js/Math (* angle pi-d))) offsety)]))


(defn get-label-sizes
  ([labels font-size] (get-label-sizes labels font-size "arial"))
  ([labels font-size font]
  (let [func (fn [txt div]
               (set! (.-innerHTML div) txt)
               (style/setStyle div "font-family" font)
               (style/setStyle div "font-size" font-size)
               (style/getSize div)) 
        div (dom/createDom "div" hide-style)
        _ (dom/appendChild (.-body js/document) div)
        widths (doall (for [l labels] (func l div)))
        _ (dom/removeNode div)]
    widths)))

(defn test-label-widths
  ([] (test-label-widths 10))
  ([font-size]
     (get-label-sizes ["test","testing"] font-size)))
