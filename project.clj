(defproject enfocus-charts "0.1.0-SNAPSHOT"
  :description "project for building charts in clojurescript"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [enfocus "2.0.0-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "0.3.0"]]
  :cljsbuild
  {:builds
   [{:builds nil,
     :source-paths ["cljs-src"],
     :compiler
     {:output-dir "resources/cljs",
      :output-to "resources/js/enfocus-charts.js",
      :optimizations :advanced,
      :pretty-print true}}]})

