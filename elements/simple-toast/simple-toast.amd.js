define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/paper-toast/paper-toast.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/polymer/lib/utils/async.js"],function(_exports,_polymerElement,_paperToast,_paperButton,_polymerDom,async){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimpleToast=void 0;async=babelHelpers.interopRequireWildcard(async);function _templateObject_1f44d470022911e9b1edaba3fc704796(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<paper-toast id=\"toast\" text=\"[[text]]\" duration=\"[[duration]]\" opened=\"{{opened}}\">\n  <slot></slot>\n  <paper-button hidden$=\"[[!closeButton]]\" on-tap=\"hide\">[[closeText]]</paper-button>\n</paper-toast>"]);_templateObject_1f44d470022911e9b1edaba3fc704796=function _templateObject_1f44d470022911e9b1edaba3fc704796(){return data};return data}window.SimpleToast=window.SimpleToast||{};window.SimpleToast.requestAvailability=function(){if(!window.SimpleToast.instance){window.SimpleToast.instance=document.createElement("simple-toast");document.body.appendChild(window.SimpleToast.instance)}return window.SimpleToast.instance};var SimpleToast=function(_PolymerElement){babelHelpers.inherits(SimpleToast,_PolymerElement);function SimpleToast(){babelHelpers.classCallCheck(this,SimpleToast);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SimpleToast).apply(this,arguments))}babelHelpers.createClass(SimpleToast,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SimpleToast.prototype),"connectedCallback",this).call(this);window.addEventListener("simple-toast-hide",this.hideSimpleToast.bind(this));window.addEventListener("simple-toast-show",this.showSimpleToast.bind(this))}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SimpleToast.prototype),"connectedCallback",this).call(this);window.removeEventListener("simple-toast-hide",this.hideSimpleToast.bind(this));window.removeEventListener("simple-toast-show",this.showSimpleToast.bind(this))}},{key:"hideSimpleToast",value:function hideSimpleToast(e){}},{key:"showSimpleToast",value:function showSimpleToast(e){var _this=this;if(e.detail.duration){this.duration=e.detail.duration}if(e.detail.text){this.text=e.detail.text}if(e.detail.closeText){this.closeText=e.detail.closeText}if(e.detail.closeButton){this.closeButton=e.detail.closeButton}while(null!==(0,_polymerDom.dom)(this).firstChild){(0,_polymerDom.dom)(this).removeChild((0,_polymerDom.dom)(this).firstChild)}if(e.detail.slot){(0,_polymerDom.dom)(this).appendChild(e.detail.slot)}async.microTask.run(function(){setTimeout(function(){_this.show()},50)})}},{key:"show",value:function show(){this.$.toast.show()}},{key:"hide",value:function hide(){this.$.toast.hide()}},{key:"_openedChanged",value:function _openedChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){console.log(newValue)}}},{key:"_closeTextChanged",value:function _closeTextChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){console.log(newValue)}}},{key:"_durationChanged",value:function _durationChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){console.log(newValue)}}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_1f44d470022911e9b1edaba3fc704796())}},{key:"properties",get:function get(){return{opened:{name:"opened",type:"Boolean",value:!1,reflectToAttribute:!0},text:{name:"text",type:"String",value:"Saved"},closeText:{name:"closeText",type:"String",value:"Close"},duration:{name:"duration",type:"Number",value:600},closeButton:{name:"closeButton",type:"Boolean",value:!0,reflectToAttribute:!0}}}},{key:"tag",get:function get(){return"simple-toast"}}]);return SimpleToast}(_polymerElement.PolymerElement);_exports.SimpleToast=SimpleToast;window.customElements.define(SimpleToast.tag,SimpleToast)});