!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/es-global-bridge/es-global-bridge.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).BarcodeReader={},e.lit)}(this,(function(e,t){"use strict";function n(e,t,n,o,i,r,a){try{var c=e[r](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(o,i)}function o(e){return function(){var t=this,o=arguments;return new Promise((function(i,r){var a=e.apply(t,o);function c(e){n(a,i,r,c,s,"next",e)}function s(e){n(a,i,r,c,s,"throw",e)}c(void 0)}))}}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=r(e);if(t){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return s(this,n)}}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l,h,f,p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(b,e);var n,r,s,p,v,m,y=d(b);function b(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(e=y.call(this)).value="",e.hideinput=!1,window.ESGlobalBridge.requestAvailability().load("ZXing",decodeURIComponent("undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("barcode-reader.umd.js",document.baseURI).href)+"/../lib/zxing.js"),window.addEventListener("es-bridge-zxing-loaded",e._control.bind(c(e))),e}return n=b,r=[{key:"render",value:function(){return t.html(l||(l=u(['\n      <div class="hidden" hidden>\n        <div>\n          <video\n            muted\n            autoplay\n            playsinline\n            width="','%"\n            height="','%"\n          ></video>\n          <canvas style="display: none; float: bottom;"></canvas>\n        </div>\n      </div>\n      <div class="input" ?hidden="','">\n        Result: <span><input type="text" .value="','" /> </span>\n      </div>\n      <span>\n        <div class="hidden2" hidden>\n          <div class="select">\n            <label for="videoSource">Video source: </label>\n            <select></select>\n          </div>\n          <button class="go">Scan</button>\n        </div>\n        <simple-icon-button\n          aria-labelledby="label"\n          icon="image:camera-alt"\n          class="render"\n        ></simple-icon-button>\n        <label id="label">Initialize</label>\n      </span>\n    '])),this.scale,this.scale,this.hideinput,this.value)}},{key:"_control",value:function(){var e=this,t=this.shadowRoot.querySelector("video"),n=this.shadowRoot.querySelector("canvas"),i=n.getContext("2d"),r=this.shadowRoot.querySelector(".go"),a=!0,c=null,s=null;!function e(){window.ZXing?setTimeout((function(){console.log("loaded zxing instance"),c=new window.ZXing,s=c.Runtime.addFunction(w)}),100):setTimeout(e,100)}();var d,u,l,h,p,v,m,y,b,w=function(){var t=o(regeneratorRuntime.mark((function t(n,o,i,a){var s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=new Uint8Array(c.HEAPU8.buffer,n,o),console.log(String.fromCharCode.apply(null,s)),e.value=String.fromCharCode.apply(null,s),r.removeAttribute("disabled");case 4:case"end":return t.stop()}}),t)})));return function(e,n,o,i){return t.apply(this,arguments)}}();function g(){if(null==c)return r.removeAttribute("disabled"),void alert("Barcode Reader is not ready!");var e=null,n=0,o=0;a?(e=i,n=640,o=480):(e=mobileCtx,n=240,o=320),e.drawImage(t,0,0,n,o);var d=document.createElement("canvas");d.width=f.videoWidth,d.height=f.videoHeight;var u=d.getContext("2d"),l=f.videoWidth,h=f.videoHeight;u.drawImage(t,0,0,l,h);var p=u.getImageData(0,0,l,h).data,v=c._resize(l,h);console.time("decode barcode");for(var m=0,y=0;m<p.length;m+=4,y++)c.HEAPU8[v+y]=p[m];var b=c._decode_any(s);console.timeEnd("decode barcode"),console.log(b),-2==b?setTimeout(g,30):-3==b?(console.error("error code: ",b),r.removeAttribute("disabled")):0===b&&r.removeAttribute("disabled")}a="pc"==(d=navigator.userAgent.toLowerCase(),u="ipad"==d.match(/ipad/i),l="iphone os"==d.match(/iphone os/i),h="midp"==d.match(/midp/i),p="rv:1.2.3.4"==d.match(/rv:1.2.3.4/i),v="ucweb"==d.match(/ucweb/i),m="android"==d.match(/android/i),y="windows ce"==d.match(/windows ce/i),b="windows mobile"==d.match(/windows mobile/i),u||l||h||p||v||m||y||b?"phone":"pc"),r.onclick=function(){console.log("click"),e.value="",n.style.display="none",r.setAttribute("disabled",""),g()};var R=this.shadowRoot.querySelector("select");function _(){r.removeAttribute("disabled"),window.stream&&window.stream.getTracks().forEach((function(e){e.stop()}));var e={video:{deviceId:{exact:R.value}}};navigator.mediaDevices.getUserMedia(e).then(S).catch(k)}function S(e){window.stream=e,t.srcObject=e}function k(e){console.error("Error: ",e)}navigator.mediaDevices.enumerateDevices().then((function(e){for(var t=e.length-1;t>=0;--t){var n=e[t],o=document.createElement("option");o.value=n.deviceId,"videoinput"===n.kind?(o.text=n.label||"camera "+(R.length+1),R.appendChild(o)):console.log("Found one other kind of source/device: ",n)}})).then(_).catch(k),R.onchange=_,this.shadowRoot.querySelector(".render").addEventListener("click",(function(){if("Show"===e.shadowRoot.querySelector(".render").innerHTML&&window.stream){window.stream.getTracks().forEach((function(e){}));var t={video:{deviceId:{exact:R.value}}};navigator.mediaDevices.getUserMedia(t).then(S).catch(k)}}))}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){"value"===n&&t.dispatchEvent(new CustomEvent("value-changed",{detail:t}))}))}},{key:"firstUpdated",value:function(){this.start().then((function(e){})),this.__context=this.shadowRoot.querySelector("canvas").getContext("2d"),this.__video=this.shadowRoot.querySelector("video"),this.__videoInputSelector=this.shadowRoot.querySelector("#videoInput"),f=this.shadowRoot.querySelector("video"),this._renderVideo().then((function(e){})),this.hideinput||this.shadowRoot.querySelector(".input").removeAttribute("hidden")}},{key:"_onFrame",value:(m=o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.__video.videoWidth>0&&this._drawFrame(this.__video),this.__animationFrameId=requestAnimationFrame(this._onFrame.bind(this));case 2:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})},{key:"_drawFrame",value:function(e){this.__context.drawImage(e,0,0,this.width,this.height,0,0,this.width,this.height)}},{key:"start",value:(v=o(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.shadowRoot.querySelector("simple-icon-button").addEventListener("click",(function(){"Initialize"===t.shadowRoot.querySelector(".render").innerHTML&&t._control()}));case 1:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{key:"_renderVideo",value:(p=o(regeneratorRuntime.mark((function e(){var t,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.shadowRoot.querySelector(".hidden"),n=this.shadowRoot.querySelector("simple-icon-button"),o=this.shadowRoot.querySelector(".hidden2"),t.style.display="none",this.shadowRoot.querySelector("simple-icon-button").addEventListener("click",(function(){setTimeout((function(){"none"===t.style.display?(t.style.display="inline",n.innerHTML="Hide",o.style.display="inline"):(t.style.display="none",n.innerHTML="Show",o.style.display="none",window.stream.getTracks().forEach((function(e){e.stop()})))}),100)}));case 5:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})}],s=[{key:"styles",get:function(){return t.css(h||(h=u(["\n      :host([hidden]) {\n        display: none;\n      }\n      canvas {\n        display: none;\n      }\n      video {\n        border-style: solid;\n        border-color: rgba(0, 0, 0, 0.5);\n        border-width: 5px;\n      }\n    "])))}},{key:"properties",get:function(){return{value:{type:String,reflect:!0},scale:{type:Number,reflect:!0},hideinput:{type:Boolean}}}},{key:"tag",get:function(){return"barcode-reader"}}],r&&i(n.prototype,r),s&&i(n,s),Object.defineProperty(n,"prototype",{writable:!1}),b}(t.LitElement);customElements.define(p.tag,p),e.BarcodeReader=p,Object.defineProperty(e,"__esModule",{value:!0})}));
