!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("@lrnwebcomponents/utils/utils.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/utils/utils.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).ChartistRender={},t.lit,t.utils_js)}(this,(function(t,e,n){"use strict";function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return p(t)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=f(t);if(e){var s=f(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return b(this,n)}}function g(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=g(t,e);if(i){var s=Object.getOwnPropertyDescriptor(i,e);return s.get?s.get.call(arguments.length<3?t:n):s.value}},y.apply(this,arguments)}function v(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var m,k,x=function(t){return function(t){d(o,t);var i=u(o);function o(){var t;return r(this,o),(t=i.call(this)).id="chart",t.type="bar",t.scale="ct-minor-seventh",t.responsiveOptions=[],t.data=[],t.dataSource="",t.showTable=!1,t.__chartId=n.generateResourceID("chart-"),window.ESGlobalBridge.requestAvailability(),t._loadScripts("chartistLib","lib/chartist/dist/chartist.min.js",t._chartistLoaded),t._updateData(),t.observer.observe(p(t),{attributes:!1,childList:!0,subtree:!0}),t.dispatchEvent(new CustomEvent("chartist-render-ready",{bubbles:!0,cancelable:!0,composed:!0,detail:p(t)})),"object"===("undefined"==typeof Chartist?"undefined":c(Chartist))&&t._chartistLoaded.bind(p(t)),t}return l(o,[{key:"render",value:function(){return e.html(m||(m=v(['\n\n<div id="','-title" class="title">\n  ','\n  <slot name="heading"></slot>\n</div>\n<div id="','-desc" class="desc">\n  ','\n  <slot name="desc"></slot>\n</div>\n<div id="chart" \n  chart="','" \n  role="presentation"\n  aria-labelledby="','-title"\n  aria-describedby="',"-table ",'-desc"\n  class="ct-chart ','">\n</div>\n<div \n  id="','-table" \n  class="','">\n  <slot></slot>\n</div>'])),this.__chartId,this.chartTitle,this.__chartId,this.chartDesc,this.__chartId,this.__chartId,this.__chartId,this.__chartId,this.scale,this.__chartId,this.showTable?"table":"table sr-only")}},{key:"plugins",get:function(){return[["Chartist.plugins.ctAxisTitle","lib/chartist-plugin-axistitle/dist/chartist-plugin-axistitle.min.js"],["Chartist.plugins.CtPointLabels","lib/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.min.js"],["Chartist.plugins.fillDonut","lib/chartist-plugin-fill-donut/dist/chartist-plugin-fill-donut.min.js"]]}},{key:"observer",get:function(){var t=this;return new MutationObserver((function(e,n){return t._updateData(e,n)}))}},{key:"updated",value:function(t){var e=this;y(f(o.prototype),"updated",this)&&y(f(o.prototype),"updated",this).call(this,t),t.forEach((function(t,n){"chartData"===n&&JSON.stringify(e.chartData)!==JSON.stringify(t)?(e.dispatchEvent(new CustomEvent("chart-data-changed",{detail:e})),e._getChart()):"dataSource"===n&&e.dataSource!==t?(e.dispatchEvent(new CustomEvent("data-source-changed",{detail:e})),""!==e.dataSource&&fetch(e.dataSource).then((function(t){return t.text()})).then((function(t){return e.data=e._CSVtoArray(t)}))):"data"===n&&JSON.stringify(e.data)!==JSON.stringify(t)?(e.dispatchEvent(new CustomEvent("data-changed",{detail:e})),e._renderTable(),e._updateChartData()):e._getChart()}))}},{key:"makeChart",value:function(){return this._getChart(),this.chart}},{key:"disconnectedCallback",value:function(){var t=this;window.removeEventListener("es-bridge-chartistLib-loaded",this._chartistLoaded.bind(this)),this.plugins.forEach((function(e){return window.removeEventListener("es-bridge-".concat(e[0],"-loaded"),t._getChart.bind(t))})),this.observer&&this.observer.disconnect&&this.observer.disconnect(),y(f(o.prototype),"disconnectedCallback",this).call(this)}},{key:"_chartistLoaded",value:function(){var t=this;this.__chartistLoaded=!0,this._getChart(),this.plugins.forEach((function(e){return t._loadScripts(e[0],e[1])}))}},{key:"_CSVtoArray",value:function(t){var e,n="",i=[""],s=[i],c=0,r=0,o=!0;for(e in t)'"'===(e=t[e])?(o&&e===n&&(i[c]+=e),o=!o):","===e&&o?(null!==i[c].trim().match(/^\d+$/m)&&(i[c]=parseInt(i[c].trim())),e=i[++c]=""):"\n"===e&&o?("\r"===n&&(i[c]=i[c].slice(0,-1)),null!==i[c].trim().match(/^\d+$/m)&&(i[c]=parseInt(i[c].trim())),i=s[++r]=[e=""],c=0):i[c]+=e,n=e;return null!==i[c].trim().match(/^\d+$/m)&&(i[c]=parseInt(i[c].trim())),s}},{key:"_getUniqueId",value:function(t){return t+Date.now()}},{key:"fullOptions",get:function(){var t=s({},this.options);return Chartist.plugins&&(t.plugins=[],"pie"!==this.type&&this.pluginAxisTitle&&Chartist.plugins.ctAxisTitle&&t.plugins.push(Chartist.plugins.ctAxisTitle(this.pluginAxisTitle)),"line"===this.type&&this.pluginPointLabels&&Chartist.plugins.ctPointLabels&&(this.pluginPointLabels.labelInterpolationFnc||(this.pluginPointLabels.labelInterpolationFnc=Chartist.noop),t.plugins.push(Chartist.plugins.ctPointLabels(this.pluginPointLabels))),"pie"===this.type&&t.donut&&this.pluginFillDonutItems&&Chartist.plugins.fillDonut&&t.plugins.push(Chartist.plugins.fillDonut({items:this.pluginFillDonutItems}))),t}},{key:"_getChart",value:function(){var t=this,e=null,n=this.shadowRoot?this.shadowRoot.querySelector("#chart"):void 0;n&&"object"===("undefined"==typeof Chartist?"undefined":c(Chartist))&&this.chartData&&("bar"==this.type?(void 0!==this.responsiveOptions&&this.responsiveOptions.length>0&&this.responsiveOptions.forEach((function(t){void 0!==t[1]&&(t[1].axisX&&"noop"==t[1].axisX.labelInterpolationFnc&&(t[1].axisX.labelInterpolationFnc=Chartist.noop),t[1].axisY&&"noop"==t[1].axisY.labelInterpolationFnc&&(t[1].axisY.labelInterpolationFnc=Chartist.noop))})),e=Chartist.Bar(n,this.chartData,this.fullOptions,this.responsiveOptions)):"line"===this.type?e=Chartist.Line(n,this.chartData,this.fullOptions,this.responsiveOptions):"pie"===this.type&&(e=Chartist.Pie(n,{labels:this.chartData.labels||[],series:this.chartData.series||[]},this.fullOptions,this.responsiveOptions)),this.dispatchEvent(new CustomEvent("chartist-render-data",{bubbles:!0,cancelable:!0,composed:!0,detail:e})),e&&(e.on("created",(function(e){t.dispatchEvent(new CustomEvent("chartist-render-created",{bubbles:!0,cancelable:!0,composed:!0,detail:e}))})),e.on("draw",(function(e){t.dispatchEvent(new CustomEvent("chartist-render-draw",{bubbles:!0,cancelable:!0,composed:!0,detail:e}))})),this.chart=e))}},{key:"_loadScripts",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._getChart,i=new URL("./chartist-render.js","undefined"==typeof document&&void 0===s?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?s.href:document.currentScript&&document.currentScript.src||new URL("chartist-render.umd.js",document.baseURI).href).href+"/../",s="".concat(i).concat(e);window.addEventListener("es-bridge-".concat(t,"-loaded"),n.bind(this)),window.ESGlobalBridge.requestAvailability().load(t,s)}},{key:"_renderTable",value:function(){var t="",e=this.querySelector("table"),n=this.data;if(n){var i=n[1]&&n[1][0]&&isNaN(n[1][0]),s=n[0]&&n[0][i?1:0]&&isNaN(n[0][i?1:0])?{row:i?n[0][0]:void 0,col:i?n[0].slice(1,n[0].length):n[0]}:void 0,c=n.series?n.series:n.slice(s?1:0,n.length).map((function(t){return i?{th:t[0],td:t.slice(1,t.length)}:{td:t}}));!s&&n.labels&&(s=n.labels),e=e||document.createElement("table"),s&&(t+="\n          <thead><tr>\n            ".concat(s.row?'<th scope="row">'.concat(s.row,"</th>"):"","\n            ").concat(s.col?s.col.map((function(t){return'<th scope="col">'.concat(t,"</th>")})).join(""):"","\n          </tr></thead>")),c.length>0&&(t+="\n          <tbody>\n            ".concat(c.map((function(t){return"\n              <tr>\n                ".concat(t.th?'<th scope="row">'.concat(t.th,"</th>"):"","\n                ").concat(t.td?t.td.map((function(t){return"<td>".concat(t,"</td>")})).join(""):"","\n              </tr>\n            ")})).join(""),"\n          </tbody>")),e.innerHTML=t,this.appendChild(e)}else e&&(e.innerHTML="")}},{key:"_updateChartData",value:function(){var t=this.data,e=t&&t[1]&&t[1][0]&&isNaN(t[1][0]),n=t&&t[0]&&t[0][e?1:0]&&isNaN(t[0][e?1:0]),i=n?t[0]:void 0,s=n&&t[1]?t.slice(1,t.length):t;e&&(i=i.slice(1,i.length),s=s.map((function(t){return t.slice(1,t.length)}))),this.__dataReady=!0,this.chartData={labels:i,series:"pie"===this.type?s[0]:s}}},{key:"_updateData",value:function(t,e){var n=this.querySelector("table"),i=[];n&&n.querySelectorAll("tr").forEach((function(t){var e=[];t.querySelectorAll("th,td").forEach((function(t){var n=t.innerHTML.trim();e.push(isNaN(n)?n:parseInt(n))})),i.push(e)})),JSON.stringify(this.data)!==JSON.stringify(i)&&(this.data=i)}}],[{key:"styles",get:function(){return[e.css(k||(k=v(['\n.ct-label {\n  fill: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 0.75rem;\n  line-height: 1; }\n\n.ct-chart-line .ct-label,\n.ct-chart-bar .ct-label {\n  display: block;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex; }\n\n.ct-chart-pie .ct-label,\n.ct-chart-donut .ct-label {\n  dominant-baseline: central; }\n\n.ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-label.ct-vertical.ct-start {\n  -webkit-box-align: flex-end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n\n.ct-label.ct-vertical.ct-end {\n  -webkit-box-align: flex-end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: end; }\n\n.ct-grid {\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 1px;\n  stroke-dasharray: 2px; }\n\n.ct-grid-background {\n  fill: none; }\n\n.ct-point {\n  stroke-width: 10px;\n  stroke-linecap: round; }\n\n.ct-line {\n  fill: none;\n  stroke-width: 4px; }\n\n.ct-area {\n  stroke: none;\n  fill-opacity: 0.1; }\n\n.ct-bar {\n  fill: none;\n  stroke-width: 10px; }\n\n.ct-slice-donut {\n  fill: none;\n  stroke-width: 60px; }\n\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: #d70206; }\n\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-slice-donut-solid, .ct-series-a .ct-area {\n  fill: #d70206; }\n\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: #f05b4f; }\n\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-slice-donut-solid, .ct-series-b .ct-area {\n  fill: #f05b4f; }\n\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: #f4c63d; }\n\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-slice-donut-solid, .ct-series-c .ct-area {\n  fill: #f4c63d; }\n\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: #d17905; }\n\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-slice-donut-solid, .ct-series-d .ct-area {\n  fill: #d17905; }\n\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: #453d3f; }\n\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-slice-donut-solid, .ct-series-e .ct-area {\n  fill: #453d3f; }\n\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: #59922b; }\n\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-slice-donut-solid, .ct-series-f .ct-area {\n  fill: #59922b; }\n\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: #0544d3; }\n\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-slice-donut-solid, .ct-series-g .ct-area {\n  fill: #0544d3; }\n\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: #6b0392; }\n\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-slice-donut-solid, .ct-series-h .ct-area {\n  fill: #6b0392; }\n\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: #f05b4f; }\n\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-slice-donut-solid, .ct-series-i .ct-area {\n  fill: #f05b4f; }\n\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: #dda458; }\n\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-slice-donut-solid, .ct-series-j .ct-area {\n  fill: #dda458; }\n\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: #eacf7d; }\n\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-slice-donut-solid, .ct-series-k .ct-area {\n  fill: #eacf7d; }\n\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: #86797d; }\n\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-slice-donut-solid, .ct-series-l .ct-area {\n  fill: #86797d; }\n\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: #b2c326; }\n\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-slice-donut-solid, .ct-series-m .ct-area {\n  fill: #b2c326; }\n\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: #6188e2; }\n\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-slice-donut-solid, .ct-series-n .ct-area {\n  fill: #6188e2; }\n\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: #a748ca; }\n\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-slice-donut-solid, .ct-series-o .ct-area {\n  fill: #a748ca; }\n\n.ct-square {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-square:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 100%; }\n  .ct-square:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-square > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-second:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 93.75%; }\n  .ct-minor-second:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-minor-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-second:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 88.88889%; }\n  .ct-major-second:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-major-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-third:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 83.33333%; }\n  .ct-minor-third:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-minor-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-third:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 80%; }\n  .ct-major-third:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-major-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-perfect-fourth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-perfect-fourth:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 75%; }\n  .ct-perfect-fourth:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-perfect-fourth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-perfect-fifth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-perfect-fifth:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 66.66667%; }\n  .ct-perfect-fifth:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-perfect-fifth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-sixth:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 62.5%; }\n  .ct-minor-sixth:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-minor-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-golden-section {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-golden-section:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 61.8047%; }\n  .ct-golden-section:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-golden-section > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-sixth:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 60%; }\n  .ct-major-sixth:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-major-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-seventh:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 56.25%; }\n  .ct-minor-seventh:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-minor-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-seventh:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 53.33333%; }\n  .ct-major-seventh:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-major-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-octave:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 50%; }\n  .ct-octave:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-tenth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-tenth:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 40%; }\n  .ct-major-tenth:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-major-tenth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-eleventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-eleventh:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 37.5%; }\n  .ct-major-eleventh:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-major-eleventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-twelfth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-twelfth:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 33.33333%; }\n  .ct-major-twelfth:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-major-twelfth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-double-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-double-octave:before {\n    display: block;\n    float: left;\n    content: "";\n    width: 0;\n    height: 0;\n    padding-bottom: 25%; }\n  .ct-double-octave:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .ct-double-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n:host {\n  display: block;\n  width: 100%;\n  padding: var(--chartist-padding, 0px);\n  margin: var(--chartist-margin, 15px 0);\n  background-color: var(--chartist-bg-color, transparent);\n  color: var(--chartist-text-color, #000); }\n\n.sr-only {\n  position: absolute;\n  left: -999999px;\n  height: 0;\n  overflow: hidden; }\n\n.ct-axis-title {\n  fill: var(--chartist-text-color); }\n\n::slotted(table) {\n  border: 1px solid var(--chartist-text-color);\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 100%;\n  overflow: auto; }\n\n.ct-label {\n  fill: var(--chartist-text-color, #000);\n  color: var(--chartist-text-color, #000);\n  font-size: var(--chartist-text-size, 0.75rem);\n  line-height: var(--chartist-line-height, 1); }\n\n.ct-grid {\n  stroke: var(--chartist-grid-color, rgba(0, 0, 0, 0.2));\n  stroke-width: 1px;\n  stroke-dasharray: 2px; }\n\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: var(--chartist-color-1, #d70206); }\n\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-slice-donut-solid, .ct-series-a .ct-area {\n  fill: var(--chartist-color-1, #d70206); }\n\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: var(--chartist-color-2, #f05b4f); }\n\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-slice-donut-solid, .ct-series-b .ct-area {\n  fill: var(--chartist-color-2, #f05b4f); }\n\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: var(--chartist-color-3, #f4c63d); }\n\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-slice-donut-solid, .ct-series-c .ct-area {\n  fill: var(--chartist-color-3, #f4c63d); }\n\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: var(--chartist-color-4, #d17905); }\n\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-slice-donut-solid, .ct-series-d .ct-area {\n  fill: var(--chartist-color-4, #d17905); }\n\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: var(--chartist-color-5, #453d3f); }\n\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-slice-donut-solid, .ct-series-e .ct-area {\n  fill: var(--chartist-color-5, #453d3f); }\n\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: var(--chartist-color-6, #59922b); }\n\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-slice-donut-solid, .ct-series-f .ct-area {\n  fill: var(--chartist-color-6, #59922b); }\n\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: var(--chartist-color-7, #0544d3); }\n\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-slice-donut-solid, .ct-series-g .ct-area {\n  fill: var(--chartist-color-7, #0544d3); }\n\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: var(--chartist-color-8, #6b0392); }\n\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-slice-donut-solid, .ct-series-h .ct-area {\n  fill: var(--chartist-color-8, #6b0392); }\n\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: var(--chartist-color-9, #f05b4f); }\n\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-slice-donut-solid, .ct-series-i .ct-area {\n  fill: var(--chartist-color-9, #f05b4f); }\n\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: var(--chartist-color-10, #dda458); }\n\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-slice-donut-solid, .ct-series-j .ct-area {\n  fill: var(--chartist-color-10, #dda458); }\n\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: var(--chartist-color-11, #eacf7d); }\n\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-slice-donut-solid, .ct-series-k .ct-area {\n  fill: var(--chartist-color-11, #eacf7d); }\n\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: var(--chartist-color-12, #86797d); }\n\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-slice-donut-solid, .ct-series-l .ct-area {\n  fill: var(--chartist-color-12, #86797d); }\n\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: var(--chartist-color-13, #b2c326); }\n\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-slice-donut-solid, .ct-series-m .ct-area {\n  fill: var(--chartist-color-13, #b2c326); }\n\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: var(--chartist-color-14, #6188e2); }\n\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-slice-donut-solid, .ct-series-n .ct-area {\n  fill: var(--chartist-color-14, #6188e2); }\n\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: var(--chartist-color-15, #a748ca); }\n\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-slice-donut-solid, .ct-series-o .ct-area {\n  fill: var(--chartist-color-15, #a748ca); }\n      '])))]}},{key:"properties",get:function(){return s(s({},y(f(o),"properties",this)),{},{chartTitle:{type:String,attribute:"chart-title"},chartData:{type:Array,attribute:"chart-data"},chartDesc:{type:String,attribute:"chart-desc"},data:{type:Object,attribute:"data"},dataSource:{type:String,attribute:"data-source",reflect:!0},id:{type:String},options:{type:Object},pluginAxisTitle:{type:Object},pluginPointLabels:{type:Object},pluginFillDonutItems:{type:Array},responsiveOptions:{type:Array,attribute:"responsive-options"},scale:{type:String},showTable:{type:Boolean,attribute:"show-table"},type:{type:String}})}},{key:"tag",get:function(){return"chartist-render"}}]),o}(t)},w=function(t){d(n,t);var e=u(n);function n(){return r(this,n),e.apply(this,arguments)}return l(n)}(x(e.LitElement));window.customElements.define(w.tag,w),t.ChartistRender=w,t.ChartistRenderSuper=x,Object.defineProperty(t,"__esModule",{value:!0})}));
