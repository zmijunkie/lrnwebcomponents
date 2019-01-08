!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/lib/legacy/polymer.dom.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/lib/legacy/polymer.dom.js"],t):t((e=e||self).HaxBodyBehaviors={},e.polymer_dom_js)}(this,function(e,t){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function e(){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.haxProperties={canScale:!1,canPosition:!1,canEditSource:!1,settings:{quick:[],configure:[],advanced:[]},wipeSlot:{}},this.setup=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;return"undefined"!==i(r.tagName)&&(t=r.tagName.toLowerCase()),window.addEventListener("hax-store-ready",r._haxStoreReady.bind(r)),"undefined"!==i(window.HaxStore)&&null!=window.HaxStore.instance&&window.HaxStore.ready?r.setHaxProperties(e,t,o,!0):r.setHaxProperties(e,t,o,!1)},this._haxStoreReady=function(e){if(e.detail&&"undefined"!==i(r.tagName)&&"undefined"!==i(r.haxProperties)){var t=r.tagName,o=r.haxProperties,a=r;if(""!=t&&"undefined"===i(window.HaxStore)){var n=new CustomEvent("hax-register-properties",{bubbles:!0,cancelable:!0,detail:{tag:t.toLowerCase(),properties:o,polymer:!1}});a.dispatchEvent(n)}else if(""!=t&&"undefined"===i(window.HaxStore.instance.elementList[t.toLowerCase()])){var d=new CustomEvent("hax-register-properties",{bubbles:!0,cancelable:!0,detail:{tag:t.toLowerCase(),properties:o}});a.dispatchEvent(d)}else if("undefined"!==i(r.tagName)&&"undefined"===i(window.HaxStore.instance.elementList[r.tagName.toLowerCase()])){var s=new CustomEvent("hax-register-properties",{bubbles:!0,cancelable:!0,detail:{tag:r.tagName.toLowerCase(),properties:o}});a.dispatchEvent(s)}}},this.setHaxProperties=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("undefined"===i(e.api)&&(e.api="1"),"1"==e.api){if("undefined"===i(e.canPosition)&&(e.canPosition=!0),"undefined"===i(e.canScale)&&(e.canScale=!0),"undefined"===i(e.canEditSource)&&(e.canEditSource=!1),"undefined"===i(e.gizmo)&&(e.gizmo=!1),"undefined"!==i(e.settings)){"undefined"===i(e.settings.quick)&&(e.settings.quick=[]);for(var n=0;n<e.settings.quick.length;n++)e.settings.quick[n]=r.validateSetting(e.settings.quick[n]),e.settings.quick[n]||e.settings.quick.splice(n,1);"undefined"===i(e.settings.configure)&&(e.settings.configure=[]);for(var d=0;d<e.settings.configure.length;d++)e.settings.configure[d]=r.validateSetting(e.settings.configure[d]),e.settings.configure[d]||e.settings.configure.splice(d,1);"undefined"===i(e.settings.advanced)&&(e.settings.advanced=[]);for(var s=0;s<e.settings.advanced.length;s++)e.settings.advanced[s]=r.validateSetting(e.settings.advanced[s]),e.settings.advanced[s]||e.settings.advanced.splice(s,1);e.settings.advanced.push({attribute:"class",title:"Classes",description:"CSS classes applied manually to the element",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"style",title:"Styles",description:"Custom CSS styles as applied to the element",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"prefix",title:"Schema: prefix",description:"Schema prefixes",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"typeof",title:"Schema: TypeOf",description:"typeof definition for Schema usage",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"property",title:"Schema: Property",description:"typeof definition for Schema usage",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"resource",title:"Schema: Resource ID",description:"Schema resource identifier",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"id",title:"ID",description:"element ID, only set this if you know why",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"slot",title:"slot",description:"DOM slot area",inputMethod:"textfield"})}if("undefined"===i(e.saveOptions)&&(e.saveOptions={wipeSlot:!1}),a)if(""!=t&&"undefined"===i(window.HaxStore)){var p=new CustomEvent("hax-register-properties",{bubbles:!0,cancelable:!0,detail:{tag:t.toLowerCase(),properties:e,polymer:!1}});o.dispatchEvent(p)}else if(""!=t){var u=new CustomEvent("hax-register-properties",{bubbles:!0,cancelable:!0,detail:{tag:t.toLowerCase(),properties:e}});o.dispatchEvent(u)}else if("undefined"!==i(r.tagName)){var c=new CustomEvent("hax-register-properties",{bubbles:!0,cancelable:!0,detail:{tag:r.tagName.toLowerCase(),properties:e}});o.dispatchEvent(c)}else console.warn("".concat(t," missed our checks and has an issue in implementation with HAX"));""===t&&("function"==typeof r._setHaxProperties?r._setHaxProperties(e):r.haxProperties=e)}else console.warn("This is't a valid usage of hax API. See hax-body-behaviors/lib/HAXWiring.js for more details on how to implement the API. Most likely your hax item just was placed in an iframe as a fallback as opposed to a custom element.")},this.validateSetting=function(e){return("undefined"!==i(e.property)||"undefined"!==i(e.slot)||"undefined"!==i(e.attribute))&&("undefined"===i(e.title)&&("undefined"===i(e.attribute)?e.title=e.property:e.title=e.attribute),"undefined"===i(e.description)&&(e.description=""),"undefined"===i(e.inputMethod)&&(e.inputMethod="textfield"),"undefined"===i(e.type)&&(e.type="settings"),"undefined"===i(e.icon)&&(e.icon="android"),"undefined"===i(e.options)&&(e.options={}),"undefined"===i(e.required)&&(e.required=!1),"undefined"===i(e.validation)&&(e.validation=".*"),"undefined"===i(e.validationType)&&(e.validationType=""),e)},this.getHaxProperties=function(){return r.haxProperties},this.getHaxJSONSchema=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;"undefined"===i(e)&&(e="configure"),"undefined"===i(t)&&(t=o.haxProperties);var a=t.settings[e],n={$schema:"http://json-schema.org/schema#",title:"HAX "+e+" form schema",type:"object",properties:{}};return n.properties=o._getHaxJSONSchemaProperty(a,o),n=o.postProcessgetHaxJSONSchema(n)},this.postProcessgetHaxJSONSchema=function(e){return e},this._getHaxJSONSchemaProperty=function(e,r){var o={};for(var a in e)if(e.hasOwnProperty(a))if("undefined"!==i(e[a].property))switch(o[e[a].property]={title:e[a].title,type:r.getHaxJSONSchemaType(e[a].inputMethod)},"undefined"!==i(r[e[a].property])&&(o[e[a].property].value=r[e[a].property]),"url"==e[a].validationType&&(o[e[a].property].format="uri"),"datepicker"==e[a].inputMethod&&(o[e[a].property].format="date-time"),".*"!=e[a].validation&&(o[e[a].property].pattern=e[a].validation),e[a].inputMethod){case"number":o[e[a].property].component={name:"paper-input",valueProperty:"value",properties:{required:e[a].required},attributes:{type:"number"}};break;case"select":var n="";if("undefined"!==i(e[a].options))for(var d in e[a].options)n+='<paper-item value="'+d+'">'+e[a].options[d]+"</paper-item>\n";o[e[a].property].component={name:"dropdown-select",valueProperty:"value",slot:n,properties:{required:e[a].required}};break;case"textarea":o[e[a].property].component={name:"paper-textarea",valueProperty:"value",properties:{required:e[a].required},attributes:{"auto-validate":"auto-validate","char-counter":"char-counter"}};break;case"code-editor":o[e[a].property].component={name:"code-editor",valueProperty:"editorValue",attributes:{id:"haxcodeeditor"},properties:{title:e[a].title,readOnly:!1,theme:"ace/theme/monokai",mode:"ace/mode/html",fontsize:"16px",className:"hax-code-editor"}};break;case"array":o[e[a].property].items={type:"object",properties:r._getHaxJSONSchemaProperty(e[a].properties,r)};break;case"textfield":o[e[a].property].component={name:"paper-input",valueProperty:"value",properties:{required:e[a].required},attributes:{"auto-validate":"auto-validate"}};break;case"alt":o[e[a].property].component={name:"paper-input-flagged",valueProperty:"value",properties:{required:e[a].required},attributes:{"auto-validate":"auto-validate"}};break;case"colorpicker":o[e[a].property].component={name:"paper-swatch-picker",valueProperty:"color",properties:{required:e[a].required}};break;case"iconpicker":o[e[a].property].component={name:"paper-icon-picker",valueProperty:"icon",properties:{required:e[a].required}},e[a].options.constructor===Array&&(o[e[a].property].component.properties.iconList=e[a].options);break;case"datepicker":o[e[a].property].component={name:"app-datepicker",valueProperty:"date",properties:{required:e[a].required,autoUpdateDate:!0}}}else if("undefined"!==i(e[a].attribute))switch(o[e[a].attribute]={title:e[a].title,type:r.getHaxJSONSchemaType(e[a].inputMethod)},"class"===e[a].attribute?o[e[a].attribute].value=r.className:"style"===e[a].attribute?o[e[a].attribute].value=r.style.cssText:"undefined"!==i(r.attributes[e[a].attribute])&&(o[e[a].attribute].value=r.getAttribute(e[a].attribute)),"href"!=a&&"src"!=a||(o[e[a].attribute].format="uri"),"url"==e[a].validationType&&(o[e[a].attribute].format="uri"),"datepicker"==e[a].inputMethod&&(o[e[a].attribute].format="date-time"),".*"!=e[a].validation&&(o[e[a].attribute].pattern=e[a].validation),e[a].inputMethod){case"number":o[e[a].attribute].component={name:"paper-input",valueProperty:"value",properties:{required:e[a].required},attributes:{type:"number"}};break;case"select":n="";if("undefined"!==i(e[a].options))for(var d in e[a].options)n+='<paper-item value="'+d+'">'+e[a].options[d]+"</paper-item>\n";o[e[a].attribute].component={name:"dropdown-select",valueProperty:"value",slot:n,properties:{required:e[a].required}};break;case"textarea":o[e[a].attribute].component={name:"paper-textarea",valueProperty:"value",properties:{required:e[a].required},attributes:{"auto-validate":"auto-validate","char-counter":"char-counter"}};break;case"code-editor":o[e[a].attribute].component={name:"code-editor",valueProperty:"editorValue",attributes:{id:"haxcodeeditor"},properties:{title:e[a].title,readOnly:!1,theme:"ace/theme/monokai",mode:"ace/mode/html",fontsize:"16px",className:"hax-code-editor"}};break;case"textfield":o[e[a].attribute].component={name:"paper-input",valueProperty:"value",properties:{required:e[a].required},attributes:{"auto-validate":"auto-validate"}};break;case"alt":o[e[a].attribute].component={name:"paper-input-flagged",valueProperty:"value",properties:{required:e[a].required},attributes:{"auto-validate":"auto-validate"}};break;case"colorpicker":o[e[a].attribute].component={name:"paper-swatch-picker",valueProperty:"color",properties:{required:e[a].required}}}else{o[e[a].slot]={title:e[a].title,type:r.getHaxJSONSchemaType(e[a].inputMethod),value:"",component:{name:"code-editor",valueProperty:"editorValue",attributes:{id:"haxcodeeditor"},properties:{title:e[a].title,readOnly:!1,theme:"ace/theme/monokai",mode:"ace/mode/html",fontsize:"16px",className:"hax-code-editor"}}};n="";for(var s in t.dom(r).childNodes)"undefined"!==i(t.dom(r).childNodes[s])&&(1===t.dom(r).childNodes[s].nodeType?n+=t.dom(r).childNodes[s].innerHTML:1!==t.dom(r).childNodes[s].nodeType&&"undefined"!==i(t.dom(r).childNodes[s].textContent)&&""!==t.dom(r).childNodes[s].textContent&&(n+=t.dom(r).childNodes[s].textContent));o[e[a].slot].component.slot=n}return o},this.getHaxJSONSchemaType=function(e){if(r.validHAXPropertyInputMethod().includes(e))switch(e){case"flipboolean":case"boolean":return"boolean";case"number":return"number";case"select":case"textarea":case"colorpicker":case"iconpicker":case"datepicker":case"textfield":case"alt":return"string";case"array":return"array";default:return"string"}},this.validHAXPropertyInputMethod=function(){return["flipboolean","boolean","select","textfield","textarea","datepicker","colorpicker","iconpicker","alt","number","code-editor","array"]},this.prototypeHaxProperties=function(){return{api:"1",canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Tag name",description:"A description",icon:"av:play-circle-filled",color:"blue",groups:["Content"],handles:[{type:"data",url:"src"}],meta:{author:""}},settings:{quick:[{property:"title",title:"Title",inputMethod:"textfield",icon:"android"},{property:"primaryColor",title:"Primary color",inputMethod:"colorpicker",icon:"color"}],configure:[{slot:"",title:"Inner content",description:"The slotted content that lives inside the tag",inputMethod:"textfield",icon:"android",required:!0,validationType:"text"},{slot:"button",title:"Button content",description:"The content that can override the button",inputMethod:"textfield",icon:"android",required:!0,validationType:"text"},{property:"title",title:"Title",description:"",inputMethod:"textfield",icon:"android",required:!0,validationType:"text"},{property:"primaryColor",title:"Title",description:"",inputMethod:"textfield",icon:"android",required:!1,validation:".*",validationType:"text"}],advanced:[{property:"secondaryColor",title:"Secondary color",description:"An optional secondary color used in certain edge cases.",inputMethod:"colorpicker",icon:"color"},{property:"endPoint",title:"API endpoint",description:"An optional endpoint to hit and load in more data dymaically.",inputMethod:"textfield",icon:"android",validation:"[a-z0-9]",validationType:"url"}]},saveOptions:{wipeSlot:!1,unsetAttributes:["end-point","secondary-color"]}}}};window.HAXWiring=new r,window.HAXBehaviors=window.HAXBehaviors||{},window.HAXBehaviors.PropertiesBehaviors={properties:{haxProperties:window.HAXWiring.haxProperties},setHaxProperties:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;return"undefined"!==i(this.tagName)&&(t=this.tagName.toLowerCase()),window.addEventListener("hax-store-ready",this._haxStoreReady.bind(this)),"undefined"!==i(window.HaxStore)&&null!=window.HaxStore.instance&&window.HaxStore.ready?window.HAXWiring.setHaxProperties(e,t,r,!0):window.HAXWiring.setHaxProperties(e,t,r,!1)},_haxStoreReady:function(e){return window.HAXWiring._haxStoreReady(e)},validateSetting:function(e){return window.HAXWiring.validateSetting(e)},getHaxProperties:function(){return this.haxProperties},getHaxJSONSchema:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;return window.HAXWiring.getHaxJSONSchema(e,t,i)},postProcessgetHaxJSONSchema:function(e){return window.HAXWiring.postProcessgetHaxJSONSchema(e)},_getHaxJSONSchemaProperty:function(e,t){return window.HAXWiring._getHaxJSONSchemaProperty(e,t)},getHaxJSONSchemaType:function(e){return window.HAXWiring.getHaxJSONSchemaType(e)},validHAXPropertyInputMethod:function(){return window.HAXWiring.validHAXPropertyInputMethod()},prototypeHaxProperties:function(){return window.HAXWiring.prototypeHaxProperties()}},e.HAXWiring=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=hax-body-behaviors.umd.js.map
