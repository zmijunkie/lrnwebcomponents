!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@lrnwebcomponents/user-action/user-action.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/lazy-image-helpers/lazy-image-helpers.js"),require("@lrnwebcomponents/i18n-manager/lib/I18NMixin.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@lrnwebcomponents/user-action/user-action.js","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/lazy-image-helpers/lazy-image-helpers.js","@lrnwebcomponents/i18n-manager/lib/I18NMixin.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"],n):n((e=e||self).SelfCheck={},null,null,e.litElement_js,e.simpleColors_js,e.schemaBehaviors_js,e.lazyImageHelpers_js,e.I18NMixin_js)}(this,function(e,n,t,r,i,o,s,l){"use strict";function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach(function(n){a(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,r,i,o=f(e);if(n){var s=f(this).constructor;t=Reflect.construct(o,arguments,s)}else t=o.apply(this,arguments);return r=this,!(i=t)||"object"!=typeof i&&"function"!=typeof i?h(r):i}}function b(e,n,t){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=f(e)););return e}(e,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(t):i.value}})(e,n,t||e)}function y(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function v(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function w(){var e=y(["\n        :host {\n          display: block;\n          margin: 15px 0;\n        }\n        :host([hidden]),\n        *[hidden] {\n          display: none !important;\n        }\n\n        div.card {\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\n          width: 100%;\n          color: var(\n            --self-check-question-text,\n            var(--simple-colors-default-theme-grey-12, #000)\n          );\n          background-color: var(\n            --self-check-question-color,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          overflow: hidden;\n        }\n\n        simple-icon-button {\n          --simple-icon-width: 24px;\n          --simple-icon-height: 24px;\n          position: relative;\n          left: 10px;\n          bottom: -10px;\n          padding: 2px;\n        }\n\n        .check_button {\n          display: flex;\n          justify-content: flex-end;\n        }\n        .close_button {\n          display: flex;\n          justify-content: flex-end;\n        }\n\n        simple-icon#questionmark {\n          --simple-icon-width: 35px;\n          --simple-icon-height: 35px;\n          padding: 5px;\n          color: var(\n            --self-check-heading-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n        }\n\n        .heading {\n          text-transform: uppercase;\n          font-size: 22px;\n          margin: 10px;\n          color: var(\n            --self-check-heading-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n        }\n\n        #header_wrap {\n          color: var(\n            --self-check-heading-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          background-color: var(\n            --self-check-heading-color,\n            var(--simple-colors-default-theme-accent-8, #444)\n          );\n          display: flex;\n          align-items: center;\n          width: 100%;\n          margin: -20px 0 0;\n        }\n\n        #question_wrap {\n          color: var(\n            --self-check-question-text,\n            var(--simple-colors-default-theme-grey-12, #000)\n          );\n          background-color: var(\n            --self-check-question-color,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          position: relative;\n        }\n\n        .question {\n          font-size: 16px;\n          padding: 15px 15px;\n        }\n\n        :host([correct]) .question {\n          display: none;\n        }\n\n        #answer_wrap {\n          visibility: hidden;\n          opacity: 0;\n          color: var(\n            --self-check-answer-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          background-color: var(\n            --self-check-answer-color,\n            var(--simple-colors-default-theme-light-green-8, #00762e)\n          );\n          border-top: 2px solid\n            var(\n              --self-check-answer-text,\n              var(--simple-colors-default-theme-grey-1, #fff)\n            );\n          width: 100%;\n          top: 0;\n          transition: all 0.2s ease;\n          left: calc(100%);\n          position: absolute;\n        }\n\n        :host([correct]) #answer_wrap {\n          visibility: visible;\n          opacity: 1;\n          position: relative;\n          left: 0;\n        }\n\n        .answer {\n          font-size: 16px;\n          padding: 15px;\n          line-height: 19.2px;\n        }\n\n        #quote_start {\n          display: inline-flex;\n          transform: rotateY(180deg);\n        }\n\n        #quote_end {\n          display: inline-flex;\n        }\n\n        .triangle {\n          width: 0;\n          height: 0;\n          border-left: 20px solid transparent;\n          border-right: 20px solid transparent;\n          border-bottom: 20px solid\n            var(\n              --self-check-heading-color,\n              var(--simple-colors-default-theme-accent-8, #444)\n            );\n          position: relative;\n          top: -20px;\n          left: -1px;\n        }\n\n        .more_info {\n          display: inline;\n        }\n\n        .more_info a {\n          color: var(\n            --self-check-answer-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n        }\n\n        .more_info a:hover {\n          text-decoration: none;\n        }\n        .image-wrap {\n          max-height: 400px;\n          overflow: hidden;\n        }\n      "]);return w=function(){return e},e}function x(){var e=y(['\n                    <div class="more_info">\n                      <user-action track="click" every="every"\n                        ><a href="','" target="_blank"\n                          >',"...</a\n                        ></user-action\n                      >\n                    </div>\n                  "]);return x=function(){return e},e}function j(){var e=y(['\n      <div class="card">\n        <div class="image-wrap">\n          ','\n          <img\n            src="','"\n            alt="','"\n            aria-describedby="','"\n            loading="lazy"\n          />\n        </div>\n        <div class="triangle"></div>\n        <div id="header_wrap">\n          <simple-icon\n            id="questionmark"\n            icon="icons:help"\n            ?dark="','"\n            contrast="4"\n          ></simple-icon>\n          <div class="heading" id="title">','</div>\n        </div>\n        <div id="question_wrap">\n          <div class="question" aria-hidden="','">\n            <slot name="question"></slot>\n            <div class="check_button">\n              <simple-icon-button\n                controls="answer_wrap"\n                aria-label="','"\n                id="checkBtn"\n                class="check-btn"\n                icon="icons:check-circle"\n                ?dark="','"\n                @click="','"\n              ></simple-icon-button>\n              <simple-tooltip aria-hidden="true" for="checkBtn" position="left">\n                ','\n              </simple-tooltip>\n            </div>\n          </div>\n          <div\n            id="answer_wrap"\n            aria-hidden="','"\n            aria-live="polite"\n          >\n            <div class="answer">\n              <user-action track="visibility">\n                <slot></slot>\n              </user-action>\n              ','\n              <div class="close_button">\n                <simple-icon-button\n                  aria-label="','"\n                  id="closeBtn"\n                  dark\n                  icon="icons:close"\n                  @click="','"\n                >\n                </simple-icon-button>\n                <simple-tooltip\n                  aria-hidden="true"\n                  for="closeBtn"\n                  position="left"\n                >\n                  ',"\n                </simple-tooltip>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    "]);return j=function(){return e},e}var k=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(y,l.I18NMixin(s.lazyImageLoader(o.SchemaBehaviors(i.SimpleColors))));var n,t,a,p=m(y);function y(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,y),(e=p.call(this)).correct=!1,e.alt="",e.image="",e.question="",e.title="Self-Check",e.t={revealAnswer:"Reveal Answer",close:"Close",moreInformation:"More information"},e.registerLocalization({context:h(e),basePath:"undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("self-check.umd.js",document.baseURI).href,locales:["he","ja","es"]}),e}return n=y,a=[{key:"styles",get:function(){return[].concat(v(b(f(y),"styles",this)),[r.css(w())])}},{key:"tag",get:function(){return"self-check"}},{key:"properties",get:function(){return u(u({},b(f(y),"properties",this)),{},{title:{type:String},question:{type:String},image:{type:String,reflect:!0},alt:{type:String,reflect:!0},describedBy:{type:String,attribute:"described-by"},link:{type:String,reflect:!0},correct:{type:Boolean,reflect:!0}})}},{key:"haxProperties",get:function(){return new URL("./lib/".concat(this.tag,".haxProperties.json"),"undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("self-check.umd.js",document.baseURI).href).href}}],(t=[{key:"render",value:function(){return r.html(j(),this.renderSVGLoader(),this.image,this.alt,this.describedBy||"",!this.dark,this.title,this.correct,this.t.revealAnswer,this.dark,this.openAnswer,this.t.revealAnswer,this.correct?"false":"true",this.link?r.html(x(),this.link,this.t.moreInformation):"",this.t.close,this.openAnswer,this.t.close)}},{key:"updated",value:function(e){var n=this;b(f(y.prototype),"updated",this)&&b(f(y.prototype),"updated",this).call(this,e),e.forEach(function(e,t){"elementVisible"==t&&n.elementVisible})}},{key:"haxHooks",value:function(){return{activeElementChanged:"haxactiveElementChanged"}}},{key:"haxactiveElementChanged",value:function(e,n){var t=this.shadowRoot.querySelector("#title");return n?t.setAttribute("contenteditable",!0):(t.removeAttribute("contenteditable"),this.title=t.innerText),!1}},{key:"openAnswer",value:function(e){this.correct=!this.correct}}])&&c(n.prototype,t),a&&c(n,a),y}();window.customElements.define(k.tag,k),e.SelfCheck=k,Object.defineProperty(e,"__esModule",{value:!0})});
