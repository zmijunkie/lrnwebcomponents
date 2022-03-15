!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js"),require("@polymer/polymer/lib/utils/flattened-nodes-observer.js"),require("lit"),require("mobx"),require("@lrnwebcomponents/iframe-loader/iframe-loader.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js","@polymer/polymer/lib/utils/flattened-nodes-observer.js","lit","mobx","@lrnwebcomponents/iframe-loader/iframe-loader.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).H5PElement={},e.haxcmsSiteStore_js,e.flattenedNodesObserver_js,e.lit,e.mobx)}(this,(function(e,t,n,r,i){"use strict";function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){s(o,r,i,a,c,"next",e)}function c(e){s(o,r,i,a,c,"throw",e)}a(void 0)}))}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return m(this,n)}}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},g.apply(this,arguments)}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}var k,O,_,x,R,S,D,L,I=function(e){d(a,e);var o=b(a);function a(){var e;return u(this,a),(e=o.call(this)).src="",e.__disposer=i.autorun((function(){e.__editMode=i.toJS(t.store.editMode)})),e}return p(a,[{key:"disconnectedCallback",value:function(){g(f(a.prototype),"disconnectedCallback",this).call(this),this.__disposer()}},{key:"firstUpdated",value:function(){var e=this;this._observer=new n.FlattenedNodesObserver(this,(function(t){t.addedNodes.forEach((function(t){var n="IFRAME"===t.nodeName?t:e.querySelector("iframe");n&&void 0!==n.src&&(e.__editLink=n.src.replace("entity_iframe/","")+"/edit")}))}))}},{key:"render",value:function(){return r.html(k||(k=w(['\n      <div part="container" class="','">\n        ',"\n      </div>\n    "])),(this.__editMode,"editing"),this.__editMode?r.html(O||(O=w(['\n              <slot></slot>\n              <div part="edit-screen">\n                <div part="source-link">\n                  <a part="anchor" href="','" target="_blank"\n                    >Edit H5P Source</a\n                  >\n                </div>\n              </div>\n            '])),this.__editLink):r.html(_||(_=w(["\n              <iframe-loader><slot></slot></iframe-loader>\n            "]))))}}],[{key:"properties",get:function(){return{__editLink:{type:String,attribute:!1},__editMode:{type:Boolean,attribute:!1}}}},{key:"styles",get:function(){return r.css(x||(x=w(['\n      :host {\n        display: block;\n      }\n      :host [part="container"] {\n        display: block;\n        position: relative;\n      }\n      .editing[part="container"] {\n        min-height: 100px;\n      }\n      :host [part="edit-screen"] {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: flex-end;\n        justify-content: flex-end;\n      }\n      :host [part="source-link"] a {\n        background: black;\n        color: white;\n        padding: 1em;\n      }\n      :host [part="anchor"] {\n        display: block;\n      }\n    '])))}}]),a}(r.LitElement);customElements.define("h5p-wrapped-element",I),window.__H5PBridgeTimeOut=function(){setTimeout((function(){window.H5P.init()}),500)};var E=function(e){d(s,e);var t,n,i,o=b(s);function s(){var e;return u(this,s),(e=o.call(this)).contentId=e.generateUUID(),e.H5PDepsLoader(),e}return p(s,[{key:"render",value:function(){return r.html(R||(R=w(["\n\n",""])),this.source?r.html(D||(D=w(['<div class="h5p-container" data-content-id="wrapper-','"></div>'])),this.contentId):r.html(S||(S=w(["<h5p-wrapped-element><slot></slot></h5p-wrapped-element>"]))))}},{key:"createRenderRoot",value:function(){return this.source?this:g(f(s.prototype),"createRenderRoot",this).call(this)}},{key:"H5PDepsLoader",value:(i=c(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URL("./lib/","undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("h5p-element.umd.js",document.baseURI).href).href,this.h5pJSDeps=[t+"h5p-resizer.js",t+"h5p/js/jquery.js",t+"h5p/js/h5p.js",t+"h5p/js/h5p-event-dispatcher.js",t+"h5p/js/h5p-content-type.js",t+"h5p/js/h5p-action-bar.js",t+"h5p/js/h5p-confirmation-dialog.js",t+"h5p/js/h5p-x-api-event.js",t+"h5p/js/h5p-x-api.js"],this.__h5pDepsLength=this.h5pJSDeps.length-1,e.next=5,window.ESGlobalBridge.requestAvailability().load("h5p-jquery",t+"h5p/js/jquery.js");case 5:window.addEventListener("es-bridge-h5p-jquery-loaded",this.h5pJqueryReady.bind(this)),window.addEventListener("es-bridge-h5p-"+this.__h5pDepsLength+"-loaded",this.h5pReadyCallback.bind(this));case 7:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"generateUUID",value:function(){return"item-sss-ss-ss".replace(/s/g,this._uuidPart)}},{key:"_uuidPart",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"firstUpdated",value:function(){this.source&&!0===window.ESGlobalBridge.requestAvailability().imports["h5p-"+this.__h5pDepsLength]&&this.contentId&&this.setupH5P(this.contentId),this.source}},{key:"h5pJqueryReady",value:(n=c(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(this.h5pJSDeps);case 1:if((e.t1=e.t0()).done){e.next=7;break}return n=e.t1.value,e.next=5,window.ESGlobalBridge.requestAvailability().load("h5p-"+n,this.h5pJSDeps[n]);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"h5pReadyCallback",value:function(e){this.contentId&&this.setupH5P(this.contentId)}},{key:"setupH5P",value:(t=c(regeneratorRuntime.mark((function e(){var t,n,r,i,o,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.length>0&&void 0!==a[0]?a[0]:1,n=a.length>1&&void 0!==a[1]?a[1]:{},n=Object.assign(n,{frame:n.frame=!1,copyright:n.copyright=!1,embed:n.embed=!1,download:n.download=!1,icon:n.icon=!1,export:n.export=!1}),r=new URL("./lib/","undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("h5p-element.umd.js",document.baseURI).href).href,H5PIntegration.core={styles:[r+"h5p/styles/h5p.css",r+"h5p/styles/h5p-confirmation-dialog.css",r+"h5p/styles/h5p-core-button.css"],scripts:this.h5pJSDeps},i=document.createRange().createContextualFragment('\n    <div class="h5p-iframe-wrapper" style="background-color:#DDD;">\n      <iframe id="h5p-iframe-'.concat(t,'" class="h5p-iframe" data-content-id="').concat(t,'" style="width: 100%; height: 100%; border: none; display: block;" src="about:blank" frameBorder="0"></iframe>\n    </div>\n    ')),this.querySelector('[data-content-id="wrapper-'+this.contentId+'"')&&this.querySelector('[data-content-id="wrapper-'+this.contentId+'"').appendChild(i),!this.source){e.next=12;break}return o=new H(t,this.source,n),e.next=11,o.init();case 11:window.__H5PBridgeTimeOut&&(clearTimeout(window.__H5PBridgeTimeOut),window.__H5PBridgeTimeOut());case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){window.removeEventListener("es-bridge-h5p-"+this.__h5pDepsLength+"-loaded",this.h5pReadyCallback.bind(this)),window.removeEventListener("es-bridge-h5p-jquery-loaded",this.h5pJqueryReady.bind(this)),g(f(s.prototype),"disconnectedCallback",this).call(this)}},{key:"updated",value:function(e){e.forEach((function(e,t){}))}}],[{key:"styles",get:function(){return[r.css(L||(L=w(["\n:host {\n  display: block;\n}\n      "])))]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"H5P element",description:"h5p wrapper for loading and presenting .h5p files",icon:"icons:android",color:"green",groups:["Interactive"],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{configure:[{attribute:"source",description:"Location the H5P file was unpacked to",inputMethod:"textfield",required:!0,icon:"icons:link"}],advanced:[]},saveOptions:{wipeSlot:!0,unsetAttributes:["content-id"]}}}},{key:"properties",get:function(){return a(a({},g(f(s),"properties",this)),{},{source:{name:"source",type:String}})}},{key:"tag",get:function(){return"h5p-element"}}]),s}(r.LitElement);customElements.define("h5p-element",E),window.H5P=window.H5P||{},window.H5PIntegration=window.H5PIntegration||{},H5PIntegration.l10n={H5P:{advancedHelp:"Include this script on your website if you want dynamic sizing of the embedded content:",author:"Author",by:"by",close:"Close",contentChanged:"This content has changed since you last used it.",copyrightInformation:"Rights of use",copyrights:"Rights of use",copyrightsDescription:"View copyright information for this content.",disableFullscreen:"Disable fullscreen",download:"Download",downloadDescription:"Download this content as a H5P file.",embed:"Embed",embedDescription:"View the embed code for this content.",fullscreen:"Fullscreen",h5pDescription:"Visit H5P.org to check out more cool content.",hideAdvanced:"Hide advanced",license:"License",noCopyrights:"No copyright information available for this content.",showAdvanced:"Show advanced",showLess:"Show less",showMore:"Show more",size:"Size",source:"Source",startingOver:"You'll be starting over.",subLevel:"Sublevel",thumbnail:"Thumbnail",title:"Title",year:"Year"}};var H=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return u(this,e),this.id=t,this.path=n,this.displayOptions=r,!0}var t,n,r,i,o;return p(e,[{key:"getJSONPromise",value:function(e){return fetch(e).then((function(e){return e.json()}))}},{key:"init",value:(o=c(regeneratorRuntime.mark((function e(){var t,n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getJSONPromise("".concat(this.path,"/h5p.json"));case 2:return this.h5p=e.sent,e.t0=JSON,e.next=6,this.getJSONPromise("".concat(this.path,"/content/content.json"));case 6:return e.t1=e.sent,this.content=e.t0.stringify.call(e.t0,e.t1),e.next=10,this.checkIfPathIncludesVersion();case 10:return window.H5PIntegration.pathIncludesVersion=this.pathIncludesVersion=e.sent,e.next=13,this.findMainLibrary();case 13:return this.mainLibrary=e.sent,e.next=16,this.findAllDependencies();case 16:return t=e.sent,e.next=19,this.sortDependencies(t);case 19:return n=e.sent,r=n.styles,i=n.scripts,H5PIntegration.url=this.path,H5PIntegration.contents=H5PIntegration.contents?H5PIntegration.contents:{},H5PIntegration.contents["cid-"+this.id]={library:"".concat(this.mainLibrary.machineName," ").concat(this.mainLibrary.majorVersion,".").concat(this.mainLibrary.minorVersion),jsonContent:this.content,styles:r,scripts:i,displayOptions:this.displayOptions},e.abrupt("return",!0);case 26:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"checkIfPathIncludesVersion",value:(i=c(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.h5p.preloadedDependencies[0],n=t.machineName+"-"+t.majorVersion+"."+t.minorVersion,e.prev=2,e.next=5,this.getJSONPromise("".concat(this.path,"/").concat(n,"/library.json"));case 5:r=!0,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),r=!1;case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,this,[[2,8]])}))),function(){return i.apply(this,arguments)})},{key:"libraryPath",value:function(e){return e.machineName+(this.pathIncludesVersion?"-"+e.majorVersion+"."+e.minorVersion:"")}},{key:"findMainLibrary",value:function(){var e=this,t=this.h5p.preloadedDependencies.find((function(t){return t.machineName===e.h5p.mainLibrary}));return this.mainLibraryPath=this.h5p.mainLibrary+(this.pathIncludesVersion?"-"+t.majorVersion+"."+t.minorVersion:""),this.getJSONPromise("".concat(this.path,"/").concat(this.mainLibraryPath,"/library.json"))}},{key:"findAllDependencies",value:function(){var e=this,t=this.h5p.preloadedDependencies.map((function(t){return e.libraryPath(t)}));return this.loadDependencies(t,[])}},{key:"loadDependencies",value:(r=c(regeneratorRuntime.mark((function e(t,n){var r,i,o,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,i=[],e.next=4,Promise.all(t.map((function(e){return a.findLibraryDependencies(e)})));case 4:if((o=e.sent).forEach((function(e){r.push(e),e.dependencies.forEach((function(e){r.find((function(t){return t.libraryPath===e}))||o.find((function(t){return t.libraryPath===e}))||i.push(e)}))})),!(i.length>0)){e.next=8;break}return e.abrupt("return",this.loadDependencies(i,r));case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e,this)}))),function(e,t){return r.apply(this,arguments)})},{key:"findLibraryDependencies",value:(n=c(regeneratorRuntime.mark((function e(t){var n,r,i,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getJSONPromise("".concat(this.path,"/").concat(t,"/library.json"));case 2:return n=e.sent,r=this.libraryPath(n),i=[],n.preloadedDependencies&&(i=n.preloadedDependencies.map((function(e){return o.libraryPath(e)}))),e.abrupt("return",{libraryPath:r,dependencies:i,preloadedCss:n.preloadedCss,preloadedJs:n.preloadedJs});case 7:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"sortDependencies",value:(t=c(regeneratorRuntime.mark((function e(t){var n,r,i,o,a,s=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new q,r={},i={},t.forEach((function(e){n.add(e.libraryPath,e.dependencies),e.preloadedCss&&(r[e.libraryPath]=r[e.libraryPath]?r[e.libraryPath]:[],e.preloadedCss.forEach((function(t){r[e.libraryPath].push("".concat(s.path,"/").concat(e.libraryPath,"/").concat(t.path))}))),e.preloadedJs&&(i[e.libraryPath]=i[e.libraryPath]?i[e.libraryPath]:[],e.preloadedJs.forEach((function(t){i[e.libraryPath].push("".concat(s.path,"/").concat(e.libraryPath,"/").concat(t.path))})))})),o=[],a=[],n.sort().reverse().forEach((function(e){Array.prototype.push.apply(o,r[e]),Array.prototype.push.apply(a,i[e])})),Array.prototype.push.apply(o,this.mainLibrary.preloadedCss.map((function(e){return"".concat(s.path,"/").concat(s.mainLibraryPath,"/").concat(e.path)}))),Array.prototype.push.apply(a,this.mainLibrary.preloadedJs.map((function(e){return"".concat(s.path,"/").concat(s.mainLibraryPath,"/").concat(e.path)}))),e.abrupt("return",{styles:o,scripts:a});case 10:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}(),q=function(){function e(){u(this,e),this.edges=[]}return p(e,[{key:"add",value:function(e,t){if("string"!=typeof e||!e)throw new TypeError("Dependent name must be given as a not empty string");if((t=Array.isArray(t)?t:[t]).length>0){var n,r=j(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;if("string"!=typeof i||!i)throw new TypeError("Dependency name must be given as a not empty string");this.edges.push([e,i])}}catch(e){r.e(e)}finally{r.f()}}else this.edges.push([e]);return this}},{key:"sort",value:function(){var e,t=this,n=[],r=j(this.edges);try{for(r.s();!(e=r.n()).done;){var i,o=j(e.value);try{for(o.s();!(i=o.n()).done;){var a=i.value;-1===n.indexOf(a)&&n.push(a)}}catch(e){o.e(e)}finally{o.f()}}}catch(e){r.e(e)}finally{r.f()}for(var s=n.length,c=new Array(n.length),u=function e(r,i){if(0!==i.length&&-1!==i.indexOf(r))throw new Error("Cyclic dependency found. ".concat(r," is dependent of itself.\nDependency chain: ").concat(i.join(" -> ")," => ").concat(r));var o=n.indexOf(r);if(-1!==o){var a=!1;n[o]=!1;var u,l=j(t.edges);try{for(l.s();!(u=l.n()).done;){var p=u.value;p[0]===r&&(a=a||i.concat([r]),e(p[1],a))}}catch(e){l.e(e)}finally{l.f()}c[--s]=r}},l=0;l<n.length;l++){var p=n[l];if(!1!==p){n[l]=!1;var h,d=j(this.edges);try{for(d.s();!(h=d.n()).done;){var f=h.value;f[0]===p&&u(f[1],[p])}}catch(e){d.e(e)}finally{d.f()}c[--s]=p}}return c}},{key:"clear",value:function(){return this.edges=[],this}}]),e}();e.H5PElement=E,e.H5PStandalone=H,e.Toposort=q,Object.defineProperty(e,"__esModule",{value:!0})}));
