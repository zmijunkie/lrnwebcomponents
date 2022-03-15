!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/paper-listbox/paper-listbox.js"),require("@polymer/paper-item/paper-item.js"),require("@polymer/paper-dropdown-menu/paper-dropdown-menu.js"),require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/paper-listbox/paper-listbox.js","@polymer/paper-item/paper-item.js","@polymer/paper-dropdown-menu/paper-dropdown-menu.js","@polymer/polymer/polymer-element.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SelectMenu={},null,null,null,e.polymerElement_js)}(this,(function(e,t,n,r,o){"use strict";function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function p(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}var c,s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(p,e);var t,n,r,i=a(p);function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),i.call(this)}return t=p,r=[{key:"template",get:function(){return o.html(c||(e=['\n      <style>\n        paper-dropdown-menu,\n        paper-listbox {\n          width: 250px;\n        }\n        paper-dropdown-menu {\n          height: 200px;\n          margin: auto;\n          display: block;\n        }\n      </style>\n      <paper-dropdown-menu\n        id="menu"\n        label$="[[label]]"\n        on-click="_menubuttonTap"\n        on-selected-item-changed="_setSelectedValue"\n      >\n        <paper-listbox\n          id="listbox"\n          slot="dropdown-content"\n          selected="{{selectedIndex}}"\n        >\n          <slot></slot>\n        </paper-listbox>\n      </paper-dropdown-menu>\n    '],t||(t=e.slice(0)),c=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))));var e,t}},{key:"tag",get:function(){return"select-menu"}},{key:"properties",get:function(){return{label:{type:String,value:"Select an option."},value:{type:String,value:null},selectedIndex:{type:Number,reflectToAttribute:!0,notify:!0,computed:"_getSelectedIndex()"}}}}],(n=[{key:"_setSelectedValue",value:function(e){if(null!==e.detail.value){var t=e.detail.value.getAttribute("value");this.setAttribute("value",t),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!0,composed:!0,detail:{value:t}}))}}},{key:"_getSelectedIndex",value:function(){this.__items=this.getElementsByTagName("paper-item");for(var e=0;e<this.__items.length;e++)if(console.log(this.value,this.__items[e],this.__items[e].getAttribute("value")),this.value==this.__items[e].getAttribute("value"))return e;return null}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),p}(o.PolymerElement);window.customElements.define(s.tag,s),e.SelectMenu=s,Object.defineProperty(e,"__esModule",{value:!0})}));
