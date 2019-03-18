define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./lib/shadows-safari.js","./node_modules/@polymer/iron-a11y-keys/iron-a11y-keys.js","./node_modules/@polymer/iron-icon/iron-icon.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@polymer/iron-icons/editor-icons.js","./node_modules/@lrnwebcomponents/json-outline-schema/json-outline-schema.js"],function(_exports,_polymerElement,_shadowsSafari,_ironA11yKeys,_ironIcon,_ironIcons,_editorIcons,_jsonOutlineSchema){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.EditableOutline=void 0;function _templateObject_db18d410459211e9b81dbb1e8e47667c(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n  font-family: 'Noto Serif', serif;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nul, ol {\n  font-size: 16px;\n  line-height: 32px;\n  padding-left: 32px;\n}\nli {\n  font-size: 16px;\n  line-height: 32px;\n  padding: 4px;\n}\n\nli:focus,\nli:active,\nli:hover {\n  background-color: #EEEEEE;\n  outline: 1px solid #CCCCCC;\n}\n\niron-icon {\n  pointer-events: none;\n}</style>\n<button on-click=\"buttonEvents\" id=\"down\">\n  <iron-icon icon=\"icons:arrow-downward\"></iron-icon> Move down\n</button>\n<button on-click=\"buttonEvents\" id=\"up\">\n  <iron-icon icon=\"icons:arrow-upward\"></iron-icon> Move up\n</button>\n<button on-click=\"buttonEvents\" id=\"outdent\">\n  <iron-icon icon=\"editor:format-indent-decrease\"></iron-icon> Outdent\n</button>\n<button on-click=\"buttonEvents\" id=\"indent\">\n  <iron-icon icon=\"editor:format-indent-increase\"></iron-icon> Indent\n</button>\n<button on-click=\"buttonEvents\" id=\"duplicate\">\n  <iron-icon icon=\"icons:content-copy\"></iron-icon> Duplicate structure\n</button>\n\n<ul id=\"outline\" contenteditable$=\"[[editMode]]\">\n  <li contenteditable=\"true\"></li>\n</ul>\n\n<iron-a11y-keys target=\"[[__outlineNode]]\" keys=\"shift+tab\" on-keys-pressed=\"_tabBackKeyPressed\"\n  stop-keyboard-event-propagation></iron-a11y-keys>\n<iron-a11y-keys target=\"[[__outlineNode]]\" keys=\"tab\" on-keys-pressed=\"_tabKeyPressed\"\n  stop-keyboard-event-propagation></iron-a11y-keys>"]);_templateObject_db18d410459211e9b81dbb1e8e47667c=function _templateObject_db18d410459211e9b81dbb1e8e47667c(){return data};return data}var EditableOutline=function(_PolymerElement){babelHelpers.inherits(EditableOutline,_PolymerElement);babelHelpers.createClass(EditableOutline,null,[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_db18d410459211e9b81dbb1e8e47667c())}},{key:"properties",get:function get(){return{items:{name:"items",type:"Array",value:[],notify:!0},editMode:{name:"editMode",type:"Boolean",notify:!0,observer:"_editModeChanged"},__outlineNode:{name:"__outlineNode",type:"Object"}}}}]);function EditableOutline(){var _this;babelHelpers.classCallCheck(this,EditableOutline);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(EditableOutline).call(this));_this.polyfillSafe=_this.__computePolyfillSafe();window.JSONOutlineSchema.requestAvailability();return _this}babelHelpers.createClass(EditableOutline,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(EditableOutline.prototype),"connectedCallback",this).call(this);this.__outlineNode=this.$.outline;this._observer=new MutationObserver(this._observer.bind(this));this._observer.observe(this.__outlineNode,{childList:!0,subtree:!0})}},{key:"_observer",value:function _observer(record){var _this2=this,reference;for(var index in record){var info=record[index];if(0<info.removedNodes.length&&this.__outdent){for(var i in info.removedNodes){if(info.removedNodes[i].tagName&&"LI"===info.removedNodes[i].tagName&&null!==info.removedNodes[i].getAttribute("data-jos-id")){reference.setAttribute("data-jos-id",info.removedNodes[i].getAttribute("data-jos-id"));if(null!==info.removedNodes[i].getAttribute("data-jos-location")){reference.setAttribute("data-jos-location",info.removedNodes[i].getAttribute("data-jos-location"))}reference=null}else if("UL"===info.removedNodes[i].tagName&&info.removedNodes[i].firstChild&&"LI"===info.removedNodes[i].firstChild.tagName&&null!==info.removedNodes[i].firstChild.getAttribute("data-jos-id")){reference.setAttribute("data-jos-id",info.removedNodes[i].firstChild.getAttribute("data-jos-id"));if(null!==info.removedNodes[i].firstChild.getAttribute("data-jos-location")){reference.setAttribute("data-jos-location",info.removedNodes[i].firstChild.getAttribute("data-jos-location"))}reference=null}}if(!this.$.outline.firstChild){this.$.outline.appendChild(document.createElement("li"))}}if(0<info.addedNodes.length){if(this.__outdent){for(var _i in info.addedNodes){if(info.addedNodes[_i].tagName&&"LI"===info.addedNodes[_i].tagName){reference=info.addedNodes[_i]}}}else if(!this.__blockScrub){for(var _i2 in info.addedNodes){if(info.addedNodes[_i2].tagName){window.JSONOutlineSchema.requestAvailability().scrubElementJOSData(info.addedNodes[_i2])}}}}}setTimeout(function(){_this2.__blockScrub=!1;_this2.__outdent=!1;_this2.__indent=!1},100)}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(EditableOutline.prototype),"disconnectedCallback",this).call(this)}},{key:"_editModeChanged",value:function _editModeChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){}}},{key:"buttonEvents",value:function buttonEvents(e){switch(e.target.id){case"indent":this._indent();break;case"outdent":this._outdent();break;case"up":this._move("up");break;case"down":this._move("down");break;case"duplicate":this._duplicate();break;}}},{key:"_duplicate",value:function _duplicate(){try{var range=this.getDeepRange();if(babelHelpers.typeof(range.commonAncestorContainer)===("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){return}var activeItem=range.commonAncestorContainer;if(null===activeItem||babelHelpers.typeof(activeItem)===("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))||babelHelpers.typeof(activeItem.tagName)===("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){activeItem=activeItem.parentNode}if(activeItem){if(null!==activeItem.nextElementSibling&&"UL"===activeItem.nextElementSibling.tagName){var clone2=activeItem.nextElementSibling.cloneNode(!0);activeItem.parentNode.insertBefore(clone2,activeItem.nextElementSibling.nextElementSibling);var clone=activeItem.cloneNode(!0);activeItem.parentNode.insertBefore(clone,activeItem.nextElementSibling.nextElementSibling)}else{var _clone=activeItem.cloneNode(!0);activeItem.parentNode.insertBefore(_clone,activeItem.nextElementSibling)}}}catch(e){console.log(e)}}},{key:"_move",value:function _move(direction){try{var range=this.getDeepRange();if(babelHelpers.typeof(range.commonAncestorContainer)===("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){return}var activeItem=range.commonAncestorContainer;if(null===activeItem||babelHelpers.typeof(activeItem)===("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))||babelHelpers.typeof(activeItem.tagName)===("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){activeItem=activeItem.parentNode}var test=activeItem,valid=!1;while(!valid&&test.parentNode){if("outline"===test.id){valid=!0}test=test.parentNode}if(valid&&activeItem){if("up"===direction){if(null!==activeItem.previousElementSibling){if(activeItem.nextElementSibling&&"UL"===activeItem.nextElementSibling.tagName){if("UL"===activeItem.previousElementSibling.tagName){this.__blockScrub=!0;activeItem.parentNode.insertBefore(activeItem.previousElementSibling,activeItem.nextElementSibling.nextElementSibling)}this.__blockScrub=!0;activeItem.parentNode.insertBefore(activeItem.previousElementSibling,activeItem.nextElementSibling.nextElementSibling);activeItem.focus()}else{if("UL"===activeItem.previousElementSibling.tagName){this.__blockScrub=!0;activeItem.parentNode.insertBefore(activeItem.previousElementSibling,activeItem.nextElementSibling)}this.__blockScrub=!0;activeItem.parentNode.insertBefore(activeItem.previousElementSibling,activeItem.nextElementSibling);activeItem.focus()}}}else if("down"===direction){if(null!==activeItem.nextElementSibling){if(activeItem.nextElementSibling&&"UL"===activeItem.nextElementSibling.tagName&&null!==activeItem.nextElementSibling.nextElementSibling){if("LI"===activeItem.nextElementSibling.nextElementSibling.tagName&&null!==activeItem.nextElementSibling.nextElementSibling.nextElementSibling&&"UL"===activeItem.nextElementSibling.nextElementSibling.nextElementSibling.tagName){this.__blockScrub=!0;activeItem.parentNode.insertBefore(activeItem.nextElementSibling.nextElementSibling,activeItem)}this.__blockScrub=!0;activeItem.parentNode.insertBefore(activeItem.nextElementSibling.nextElementSibling,activeItem);activeItem.focus()}else if("LI"===activeItem.nextElementSibling.tagName){if(null!==activeItem.nextElementSibling.nextElementSibling&&"UL"===activeItem.nextElementSibling.nextElementSibling.tagName){this.__blockScrub=!0;activeItem.parentNode.insertBefore(activeItem.nextElementSibling,activeItem)}this.__blockScrub=!0;activeItem.parentNode.insertBefore(activeItem.nextElementSibling,activeItem);activeItem.focus()}}}}}catch(e){console.log(e)}}},{key:"importJsonOutlineSchemaItems",value:function importJsonOutlineSchemaItems(){this.__blockScrub=!0;while(null!==this.$.outline.firstChild){this.$.outline.removeChild(this.$.outline.firstChild)}if(0===this.items.length){this.set("items",window.JSONOutlineSchema.requestAvailability().items)}var outline=window.JSONOutlineSchema.requestAvailability().itemsToNodes(this.items);while(null!==outline.firstChild){this.__blockScrub=!0;this.$.outline.appendChild(outline.firstChild)}return outline}},{key:"exportJsonOutlineSchemaItems",value:function exportJsonOutlineSchemaItems(){var save=0<arguments.length&&arguments[0]!==void 0?arguments[0]:!1;return window.JSONOutlineSchema.requestAvailability().nodesToItems(this.$.outline,save)}},{key:"_tabKeyPressed",value:function _tabKeyPressed(e){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();if(e.detail.keyboardEvent){e.detail.keyboardEvent.preventDefault();e.detail.keyboardEvent.stopPropagation();e.detail.keyboardEvent.stopImmediatePropagation()}try{this._indent()}catch(e){}}},{key:"_indent",value:function _indent(){if(this.polyfillSafe){this.__indent=!0;this.__blockScrub=!0;document.execCommand("indent")}}},{key:"_tabBackKeyPressed",value:function _tabBackKeyPressed(e){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();if(e.detail.keyboardEvent){e.detail.keyboardEvent.preventDefault();e.detail.keyboardEvent.stopPropagation();e.detail.keyboardEvent.stopImmediatePropagation()}try{this._outdent()}catch(e){}}},{key:"_outdent",value:function _outdent(){if(this.polyfillSafe){this.__outdent=!0;this.__blockScrub=!0;document.execCommand("outdent")}}},{key:"getDeepSelection",value:function getDeepSelection(){if(this.shadowRoot.getSelection){return this.shadowRoot.getSelection()}else if((0,_shadowsSafari.getRange)(this.$.outline.parentNode)){return(0,_shadowsSafari.getRange)(this.$.outline.parentNode)}return window.getSelection()}},{key:"getDeepRange",value:function getDeepRange(){var sel=this.getDeepSelection();if(sel.getRangeAt&&sel.rangeCount){return sel.getRangeAt(0)}else if(sel){return sel}else!1}},{key:"__computePolyfillSafe",value:function __computePolyfillSafe(){if(document.head.createShadowRoot||document.head.attachShadow){return!0}else{console.log("Shadow DOM missing, certain operations hidden");return!1}}}],[{key:"tag",get:function get(){return"editable-outline"}}]);return EditableOutline}(_polymerElement.PolymerElement);_exports.EditableOutline=EditableOutline;window.customElements.define(EditableOutline.tag,EditableOutline)});