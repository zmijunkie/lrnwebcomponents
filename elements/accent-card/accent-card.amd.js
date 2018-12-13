define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js"],function(_exports,_polymerElement,_HAXWiring,_schemaBehaviors,_simpleColors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.AccentCard=void 0;function _templateObject_ab19b1b0fe4011e88b5f05b27f7101b7(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style is=\"custom-style\" include=\"simple-colors\">\n        :host {\n          display: block;\n          border-radius: 2px;\n          margin: 0 0 15px;\n          box-shadow: var(\n            --accent-card-box-shadow,\n            0 2px 2px 0 rgba(0, 0, 0, 0.14),\n            0 1px 5px 0 rgba(0, 0, 0, 0.12),\n            0 3px 1px -2px rgba(0, 0, 0, 0.2)\n          );\n          color: var(\n            --accent-card-color,\n            var(--simple-colors-default-theme-grey-9, #222)\n          );\n          background-color: var(\n            --accent-card-background-color,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          --accent-card-image-width: 30%;\n          --accent-card-image-height: 10%;\n          --accent-card-border-color: var(\n            --simple-colors-default-theme-accent-6,\n            #ddd\n          );\n          --accent-card-heading-color: var(\n            --simple-colors-default-theme-accent-7,\n            #000\n          );\n          --accent-card-footer-border-color: var(\n            --simple-colors-default-theme-grey-3,\n            #ddd\n          );\n          @apply --accent-card;\n        }\n        :host([dark]) {\n          color: var(\n            --accent-card-color,\n            var(--simple-colors-default-theme-grey-12, #fff)\n          );\n          --accent-card-border-color: var(\n            --simple-colors-default-theme-accent-7,\n            #fff\n          );\n          --accent-card-footer-border-color: var(\n            --simple-colors-default-theme-grey-6,\n            #666\n          );\n        }\n        :host([accent-background]) {\n          background-color: var(\n            --accent-card-background-color,\n            var(--simple-colors-default-theme-accent-1, #fff)\n          );\n          --accent-card-footer-border-color: var(--accent-card-border-color);\n        }\n        :host section {\n          width: 100%;\n          box-sizing: border-box;\n        }\n        :host([horizontal]) section {\n          display: flex;\n          justify-content: space-between;\n          align-items: stretch;\n        }\n        :host([flat]) {\n          box-shadow: none;\n        }\n        :host([flat]:not([accent-background])) {\n          border: 1px solid var(--accent-card-footer-border-color);\n        }\n        :host(:not([horizontal]):not([no-border])) section {\n          border-top: 4px solid var(--accent-card-border-color);\n        }\n        :host([horizontal]:not([no-border])) section {\n          border-left: 4px solid var(--accent-card-border-color);\n        }\n        :host .image-outer {\n          box-sizing: border-box;\n          position: relative;\n          overflow: visible;\n        }\n        :host([horizontal]) .image-outer {\n          height: auto;\n          width: var(--accent-card-image-width);\n        }\n        :host(:not([horizontal])) .image-outer {\n          height: auto;\n          width: 100%;\n        }\n        :host .image {\n          height: 100%;\n          width: 100%;\n          background-size: cover;\n          background-position-x: var(--accent-card-image-x, center);\n          background-position-y: var(--accent-card-image-y, center);\n          @apply --accent-card-image;\n        }\n        :host([horizontal]) .image {\n          @apply --accent-card-image-horizontal;\n        }\n        :host(:not([horizontal])) .image {\n          height: 0;\n          padding-top: var(--accent-card-image-height);\n          @apply --accent-card-image-vertical;\n        }\n        :host .body {\n          flex-grow: 1;\n          overflow: visible;\n          @apply --accent-card-body;\n        }\n        :host #heading {\n          padding-top: var(--accent-card-padding, 20px);\n          padding-left: var(--accent-card-padding, 20px);\n          padding-right: var(--accent-card-padding, 20px);\n          padding-bottom: 0;\n          margin: 0;\n          @apply --accent-card-heading;\n        }\n        :host([accent-heading][accent-color]) #heading {\n          color: var(--accent-card-heading-color);\n        }\n        :host #subheading {\n          font-size: 90%;\n          font-style: italic;\n          padding-left: var(--accent-card-padding, 20px);\n          padding-right: var(--accent-card-padding, 20px);\n          @apply --accent-card-subheading;\n        }\n        :host #content {\n          font-size: 100%;\n          padding: var(--accent-card-padding, 20px);\n          @apply --accent-card-content;\n        }\n        :host #content:not(:last-child) {\n          border-bottom: 1px solid var(--accent-card-footer-border-color);\n        }\n        :host #footer {\n          padding-left: var(--accent-card-padding, 20px);\n          padding-right: var(--accent-card-padding, 20px);\n          @apply --accent-card-footer;\n        }\n      </style>\n      <section id=\"card\">\n        <div class=\"image-outer\" hidden$=\"[[!_hasProp(imageSrc)]]\">\n          <div class=\"image\" style$=\"[[__backgroundStyle]]\"></div>\n        </div>\n        <div class=\"body\">\n          <h1 id=\"heading\"><slot name=\"heading\"></slot></h1>\n          <div id=\"subheading\"><slot name=\"subheading\"></slot></div>\n          <div id=\"content\"><slot name=\"content\"></slot></div>\n          <div id=\"footer\"><slot name=\"footer\"></slot></div>\n        </div>\n      </section>\n    "]);_templateObject_ab19b1b0fe4011e88b5f05b27f7101b7=function _templateObject_ab19b1b0fe4011e88b5f05b27f7101b7(){return data};return data}var AccentCard=function(_SimpleColors){babelHelpers.inherits(AccentCard,_SimpleColors);function AccentCard(){babelHelpers.classCallCheck(this,AccentCard);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(AccentCard).apply(this,arguments))}babelHelpers.createClass(AccentCard,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(AccentCard.prototype),"connectedCallback",this).call(this);this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setHaxProperties(AccentCard.haxProperties,AccentCard.tag,this)}},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(AccentCard.prototype),"ready",this).call(this)}},{key:"_hasProp",value:function _hasProp(prop){return prop!==void 0&&null!==prop}},{key:"_getBackgroundStyle",value:function _getBackgroundStyle(imageSrc){if(this._hasProp(imageSrc)){return"background-image: url("+imageSrc+");"}else{return"display: none;"}}}],[{key:"tag",get:function get(){return"accent-card"}},{key:"behaviors",get:function get(){return[_simpleColors.SimpleColors]}},{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_ab19b1b0fe4011e88b5f05b27f7101b7())}},{key:"haxProperties",get:function get(){var _ref;return _ref={canEditSource:!1,canPosition:!0},babelHelpers.defineProperty(_ref,"canEditSource",!1),babelHelpers.defineProperty(_ref,"gizmo",{title:"Accent Card",description:"A card with optional accent styling.",icon:"image:crop-landscape",color:"grey",groups:["Media","Text"],handles:[{type:"media",url:"source"},{type:"text",url:"source"}],meta:{author:"nikkimk",owner:"The Pennsylvania State University"}}),babelHelpers.defineProperty(_ref,"settings",{quick:[{property:"imageSrc",title:"Image",description:"Optional image",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"accentColor",title:"Accent Color",description:"Accent Color",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark Theme",description:"Use dark theme?",inputMethod:"toggle"},{property:"horizontal",title:"Horizontal",description:"Horizontal orientation?",inputMethod:"toggle"}],configure:[{property:"accentHeading",title:"Heading Accent",description:"Apply the accent color to the heading?",inputMethod:"toggle"},{property:"accentBackground",title:"Background Accent",description:"Apply the accent color to the card background?",inputMethod:"toggle"},{property:"noBorder",title:"No Border Accent",description:"Remove the border accent?",inputMethod:"toggle"},{property:"flat",title:"Flat",description:"Remove the box shadow?",inputMethod:"toggle"}],advanced:[]}),_ref}},{key:"properties",get:function get(){return{accentBackground:{type:Boolean,value:!1,reflectToAttribute:!0},accentHeading:{type:Boolean,value:!1,reflectToAttribute:!0},flat:{type:Boolean,value:!1,reflectToAttribute:!0},horizontal:{type:Boolean,value:!1,reflectToAttribute:!0},imageSrc:{type:String,value:null},noBorder:{type:Boolean,value:!1,reflectToAttribute:!0},__backgroundStyle:{type:String,computed:"_getBackgroundStyle(imageSrc)"}}}}]);return AccentCard}(_simpleColors.SimpleColors);_exports.AccentCard=AccentCard;window.customElements.define(AccentCard.tag,AccentCard)});