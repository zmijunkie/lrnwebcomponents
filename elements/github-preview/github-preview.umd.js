!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("prism-es6/prism.js"),require("marked/lib/marked.esm.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js")):"function"==typeof define&&define.amd?define(["exports","prism-es6/prism.js","marked/lib/marked.esm.js","lit-element/lit-element.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"],n):n((e=e||self).GithubPreview={},e.Prism,e.Marked,e.litElement_js,null,null,e.IntersectionObserverMixin_js)}(this,function(e,n,t,r,i,o,a){"use strict";function c(e,n,t,r,i,o,a){try{var c=e[o](a),l=c.value}catch(e){return void t(e)}c.done?n(l):Promise.resolve(l).then(r,i)}function l(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function a(e){c(o,r,i,a,l,"next",e)}function l(e){c(o,r,i,a,l,"throw",e)}a(void 0)})}}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n,t){return n&&u(e.prototype,n),t&&u(e,t),e}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach(function(n){d(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function g(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function y(e,n,t){return(y=m()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(e,r));return t&&v(i,t.prototype),i}).apply(null,arguments)}function w(e){var n="function"==typeof Map?new Map:void 0;return(w=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return y(e,arguments,b(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),v(r,e)})(e)}function x(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function k(e){var n=m();return function(){var t,r=b(e);if(n){var i=b(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return x(this,t)}}function _(e,n,t){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=b(e)););return e}(e,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(t):i.value}})(e,n,t||e)}function O(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function S(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw o}}}}n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,self.Prism=n;var P=function(e){g(i,w(HTMLElement));var r=k(i);function i(){var e;return s(this,i),(e=r.call(this)).__value="",e}return p(i,[{key:"attributeChangedCallback",value:function(e,n,t){n!==t&&(this[e]=t)}},{key:"src",get:function(){return this.getAttribute("src")},set:function(e){this.setAttribute("src",e),this.setSrc(e)}},{key:"value",get:function(){return this.__value},set:function(e){this.__value=e,this.setValue()}}],[{key:"observedAttributes",get:function(){return["src"]}}]),p(i,[{key:"connectedCallback",value:function(){var e=l(regeneratorRuntime.mark(function e(){var n,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.style.display="block",(n=this.getElementsByTagName("script")[0])?"wc-content"===n.getAttribute("type")&&(t=(t=i.dedentText(n.innerHTML)).replace(/&lt;(\/?script)(.*?)&gt;/g,"<$1$2>"),this.value=t):this.textContent&&(this.__value=this.textContent,this.setValue());case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setSrc",value:function(){var e=l(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchSrc(n);case 2:this.__value=e.sent,this.setValue();case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"fetchSrc",value:function(){var e=l(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.abrupt("return",t.text());case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()},{key:"setValue",value:function(){var e=this.__value;e=i.prepare(e),e=i.toHtml(e),this.innerHTML=e,this.hasAttribute("highlight")&&i.highlight(this)}}],[{key:"prepare",value:function(e){return e.split("\n").map(function(e){return(e=e.replace("&lt;","<")).replace("&gt;",">")}).join("\n")}},{key:"toHtml",value:function(e){return t(e)}},{key:"highlight",value:function(e){n.highlightAllUnder(e)}},{key:"dedentText",value:function(e){var n=e.split("\n");""===n[0]&&n.splice(0,1);for(var t=n[0],r=0,i="\t"===t[0]?"\t":" ";t[r]===i;)r+=1;var o,a=[],c=S(n);try{for(c.s();!(o=c.n()).done;){for(var l=o.value,s=0;s<r&&l[0]===i;s++)l=l.substring(1);a.push(l)}}catch(e){c.e(e)}finally{c.f()}return""===a[a.length-1]&&a.splice(a.length-1,1),a.join("\n")}}]),i}();function M(){var e=O(['\n        :host {\n          display: inline-flex;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n\n        :host([repo-lang="JavaScript"]) .lang-circle {\n          background-color: #f1e05a;\n        }\n\n        :host([repo-lang="C"]) .lang-circle {\n          background-color: #555555;\n        }\n\n        :host([repo-lang="C#"]) .lang-circle {\n          background-color: #178600;\n        }\n\n        :host([repo-lang="C++"]) .lang-circle {\n          background-color: #f34b7d;\n        }\n\n        :host([repo-lang="CSS"]) .lang-circle {\n          background-color: #563d7c;\n        }\n\n        :host([repo-lang="Dart"]) .lang-circle {\n          background-color: #00b4ab;\n        }\n\n        :host([repo-lang="Go"]) .lang-circle {\n          background-color: #00add8;\n        }\n\n        :host([repo-lang="Java"]) .lang-circle {\n          background-color: #b07219;\n        }\n\n        :host([repo-lang="Kotlin"]) .lang-circle {\n          background-color: #f18e33;\n        }\n\n        :host([repo-lang="Markdown"]) .lang-circle {\n          background-color: #083fa1;\n        }\n\n        :host([repo-lang="Python"]) .lang-circle {\n          background-color: #3572a5;\n        }\n\n        :host([repo-lang="Sass"]) .lang-circle {\n          background-color: #a53b70;\n        }\n\n        :host([repo-lang="Scala"]) .lang-circle {\n          background-color: #c22d40;\n        }\n\n        :host([repo-lang="SCSS"]) .lang-circle {\n          background-color: #c6538c;\n        }\n\n        :host([repo-lang="Rust"]) .lang-circle {\n          background-color: #dea584;\n        }\n\n        :host([repo-lang="Swift"]) .lang-circle {\n          background-color: #ffac45;\n        }\n\n        :host([repo-lang="TypeScript"]) .lang-circle {\n          background-color: #2b7489;\n        }\n\n        :host([repo-lang="Vue"]) .lang-circle {\n          background-color: #2c3e50;\n        }\n\n        :host([repo-lang="PHP"]) .lang-circle {\n          background-color: #4f5d95;\n        }\n\n        :host([repo-lang="HTML"]) .lang-circle {\n          background-color: #e34c26;\n        }\n\n        :host([repo-lang="Lua"]) .lang-circle {\n          background-color: #000080;\n        }\n\n        a {\n          display: inline-flex;\n          text-decoration: none;\n          color: var(--github-preview-link-text-color, white);\n        }\n\n        :host([extended]) .container {\n          width: var(--github-preview-container-width, 800px);\n          padding: var(--github-preview-container-padding, 10px);\n        }\n\n        .container {\n          background-color: var(--github-preview-bg-color, black);\n          border-radius: var(--github-preview-container-border-radius, 10px);\n          width: var(--github-preview-container-width, 400px);\n          padding: var(--github-preview-container-padding, 5px);\n        }\n\n        .header-container {\n          display: flex;\n          align-items: center;\n        }\n\n        .header-container div {\n          margin-left: 10px;\n          font-size: var(--github-preview-header-font-size, 22px);\n          font-weight: bold;\n        }\n\n        .header-container div a:hover {\n          font-size: var(--github-preview-header-hover-font-size, 24px);\n        }\n\n        .stats-container {\n          display: flex;\n          align-items: center;\n        }\n\n        .lang-circle {\n          height: 15px;\n          width: 15px;\n          background-color: grey;\n          border-radius: 50%;\n          margin: 0px 5px 0px 5px;\n        }\n\n        div {\n          color: var(--github-preview-div-text-color, white);\n        }\n\n        .description {\n          padding: 8px 0px 8px 0px;\n        }\n\n        .stats-text {\n          margin: 0px 5px 0px 5px;\n        }\n\n        :host([readme-extended]) .readme-container {\n          overflow-y: scroll;\n        }\n\n        .readme-container {\n          overflow-y: hidden;\n          overflow-x: hidden;\n          max-height: var(--github-preview-readme-container-max-height, 300px);\n        }\n\n        .readme-btn {\n          display: inline-block;\n          padding: 0.3em 2em;\n          border-radius: 2em;\n          box-sizing: border-box;\n          text-align: center;\n        }\n\n        .readme-btn-container {\n          display: flex;\n          justify-content: center;\n        }\n      ']);return M=function(){return e},e}function R(){var e=O(['\n          <div class="container">\n            <h1>',"</h1>\n          </div>\n        "]);return R=function(){return e},e}function T(){var e=O(['\n            <a\n              href="',"/","/",'"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <div class="container">\n                <div class="header-container">\n                  <simple-icon-lite icon="book"></simple-icon-lite>\n                  <div>','</div>\n                </div>\n\n                <div class="description">','</div>\n\n                <div class="stats-container">\n                  <span class="lang-circle"></span>\n                  <div class="stats-text">','</div>\n                  <simple-icon-lite icon="star"></simple-icon-lite>\n                  <div class="stats-text">','</div>\n                  <simple-icon-lite icon="social:share"></simple-icon-lite>\n                  <div class="stats-text">',"</div>\n                </div>\n              </div>\n            </a>\n          "]);return T=function(){return e},e}function A(){var e=O(['\n            <div class="container">\n              <div class="header-container">\n                <simple-icon-lite icon="book"></simple-icon-lite>\n                <div>\n                  <a\n                    href="',"/",'"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                  >\n                    ','\n                  </a>\n                  /\n                  <a\n                    href="',"/","/",'"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                  >\n                    ',"\n                  </a>\n                </div>\n              </div>\n              <hr />\n              <div>",'</div>\n              <hr />\n              <div class="readme-container">\n                <wc-markdown>\n                  <script type="wc-content">\n                    ','\n                  <\/script>\n                </wc-markdown>\n              </div>\n              <div class="readme-btn-container">\n                <button @click=',' class="readme-btn">\n                  ','\n                </button>\n              </div>\n              <div class="stats-container">\n                <span\n                  class="lang-circle"\n                  part="github-preview-lang-circle"\n                ></span>\n                <div class="stats-text">','</div>\n                <simple-icon-lite icon="star"></simple-icon-lite>\n                <div class="stats-text">','</div>\n                <simple-icon-lite icon="social:share"></simple-icon-lite>\n                <div class="stats-text">',"</div>\n              </div>\n            </div>\n          "]);return A=function(){return e},e}customElements.define("wc-markdown",P);var E=function(e){g(t,a.IntersectionObserverMixin(r.LitElement));var n=k(t);function t(){var e;return s(this,t),(e=n.call(this)).url="https://github.com",e.apiUrl="https://api.github.com",e.rawUrl="https://raw.githubusercontent.com",e.extended=!1,e.readMe="README.md",e.branch="master",e.viewMoreText="View More",e.notFoundText="Asset not found",e.headers={cache:"force-cache"},e}return p(t,[{key:"render",value:function(){return this.__assetAvailable&&this.elementVisible?this.extended?r.html(A(),this.url,this.org,this.org,this.url,this.org,this.repo,this.repo,this.__description,this.__readmeText,this.readmeViewMoreHandler,this.viewMoreText,this.repoLang,this.__stars,this.__forks):r.html(T(),this.url,this.org,this.repo,this.repo,this.__description,this.repoLang,this.__stars,this.__forks):r.html(R(),this.notFoundText)}}],[{key:"properties",get:function(){var e={};return _(b(t),"properties",this)&&(e=_(b(t),"properties",this)),h(h({},e),{},{repo:{type:String},org:{type:String},__description:{type:String},repoLang:{type:String,attribute:"repo-lang",reflect:!0},__stars:{type:Number},__forks:{type:Number},__assetAvailable:{type:Boolean},extended:{type:Boolean,reflect:!0},readmeExtended:{type:Boolean,attribute:"readme-extended",reflect:!0},headers:{type:Object},viewMoreText:{type:String,attribute:"view-more-text"},notFoundText:{type:String,attribute:"not-found-text"},__readmeText:{type:String},branch:{type:String},url:{type:String},apiUrl:{type:String,attribute:"api-url"},rawUrl:{type:String,attribute:"raw-url"},readMe:{type:String,attribute:"read-me"}})}},{key:"styles",get:function(){return[r.css(M())]}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Github Preview",description:"Accessible figure with long description",icon:"mdi-social:github-circle",color:"grey",groups:["developer","code"],handles:[],meta:{author:"collinkleest",owner:"ELMS:LN"}},settings:{configure:[{property:"org",title:"Organization",description:"Github organization machine name",inputMethod:"textfield"},{property:"repo",title:"Repository",description:"Repo machine name",inputMethod:"textfield"}],advanced:[]},demoSchema:[{tag:"github-preview",properties:{org:"elmsln",repo:"lrnwebcomponents"},content:""}]}}},{key:"tag",get:function(){return"github-preview"}}]),p(t,[{key:"fetchGithubData",value:function(e,n,t,r,i,o,a,c){var l=this;c&&fetch("".concat(i,"/").concat(n,"/").concat(e,"/").concat(r,"/").concat(a),t).then(function(e){if(e.ok)return e.text()}).then(function(e){l.__readmeText=e}).catch(function(e){console.error(e)}),fetch("".concat(o,"/repos/").concat(n,"/").concat(e)).then(function(e){if(e.ok)return e.json()}).then(function(e){l.handleResponse(e)}).catch(function(e){l.__assetAvailable=!1,console.error(e)})}},{key:"readmeViewMoreHandler",value:function(e){this.readmeExtended=!0,this.shadowRoot.querySelector(".readme-btn").remove()}},{key:"handleResponse",value:function(e){e&&(this.__assetAvailable=!0,this.__description=e.description,this.repoLang=e.language,this.__stars=e.stargazers_count,this.__forks=e.forks)}},{key:"firstUpdated",value:function(e){_(b(t.prototype),"firstUpdated",this)&&_(b(t.prototype),"firstUpdated",this).call(this,e),this.repo&&this.org&&this.url||(this.__assetAvailable=!1)}},{key:"updated",value:function(e){var n=this;e.forEach(function(e,t){["repo","org","headers","branch","rawUrl","apiUrl","readMe","extended"].includes(t)&&n[t]&&(clearTimeout(n.__debounce),n.__debounce=setTimeout(function(){n.fetchGithubData(n.repo,n.org,n.headers,n.branch,n.rawUrl,n.apiUrl,n.readMe,n.extended)},0)),n.extended})}}]),t}();customElements.define(E.tag,E),e.GithubPreview=E,Object.defineProperty(e,"__esModule",{value:!0})});