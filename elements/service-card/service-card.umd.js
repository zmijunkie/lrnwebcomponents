!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e=e||self).ServiceCard={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function l(){var e=u(['\n      :host {\n        display: inline-flex;\n        margin: 16px;\n      }\n      .card {\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n        transition: 0.3s all ease-in-out;\n        width: var(--service-card-card-width, 300px);\n      }\n      .card:hover {\n        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n      }\n      .container {\n        padding: 2px 2px 2px 2px;\n      }\n      .avatar {\n        border-radius: 50%;\n        width: calc(var(--service-card-card-width, 300px) - 10px);\n        padding: 5px;\n      }\n      .title {\n        padding: 4px 4px 4px 4px;\n        text-align: center;\n        font-family: "Courier New", courier, sans-serif;\n      }\n      .info {\n        padding: 4px 4px 4px 4px;\n        height: 125px;\n        overflow-y: auto;\n      }\n    ']);return l=function(){return e},e}function s(){var e=u(['\n      <div class="card">\n        <div class="container">\n          <img\n            loading="lazy"\n            class="avatar"\n            src="','"\n            alt="','"\n          />\n          <h3 class="title"><b>','</b></h3>\n          <p class="info"><slot></slot></p>\n        </div>\n      </div>\n    ']);return s=function(){return e},e}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(i,t.LitElement);var n=a(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=n.call(this)).alt="",e}return r(i,null,[{key:"tag",get:function(){return"service-card"}},{key:"properties",get:function(){return{source:{type:String},title:{type:String},alt:{type:String}}}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Service card",description:"Simple presentation of services or info",icon:"icons:credit-card",color:"orange",groups:["Card"],handles:[],meta:{author:"McGarvelcuddy",owner:"elmsln"}},settings:{quick:[],configure:[{property:"source",title:"Source",inputMethod:"haxupload"},{property:"alt",title:"Alt Text",description:"Alternative text for non-sighted users",inputMethod:"alt"},{property:"title",title:"Title",description:"Service title / name",inputMethod:"textfield"},{slot:"",title:"Decription",description:"Details of the service",inputMethod:"code-editor"}],advanced:[]}}}}]),r(i,[{key:"render",value:function(){return t.html(s(),this.source,this.alt,this.title)}}],[{key:"styles",get:function(){return t.css(l())}}]),i}();customElements.define(p.tag,p),e.ServiceCard=p,Object.defineProperty(e,"__esModule",{value:!0})});