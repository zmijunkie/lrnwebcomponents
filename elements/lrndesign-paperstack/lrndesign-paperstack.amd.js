define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/iron-icon/iron-icon.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js","./node_modules/@lrnwebcomponents/lrn-icons/lrn-icons.js"],function(_exports,_polymerLegacy,_ironIcon,_simpleColors,_HAXWiring,_a11yBehaviors,_lrnIcons){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignPaperstack=void 0;function _templateObject_3d5ad4b0459411e9a71dd507ab1f27ea(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"simple-colors\">\n      :host {\n        display: block;\n        font-size: 14px;\n        --lrndesign-paperstack-bg: var(--simple-colors-default-theme-grey-1);\n        --lrndesign-paperstack-faded-bg: var(\n          --simple-colors-default-theme-grey-2\n        );\n        --lrndesign-paperstack-border: var(\n          --simple-colors-default-theme-grey-4\n        );\n        --lrndesign-paperstack-shadow: var(\n          --simple-colors-default-theme-grey-12\n        );\n        --lrndesign-paperstack-accent: var(\n          --simple-colors-default-theme-accent-8\n        );\n        --lrndesign-paperstack-text: var(--simple-colors-default-theme-grey-12);\n        --lrndesign-paperstack-heading-font: cursive;\n      }\n      :host([dark]) {\n        --lrndesign-paperstack-bg: var(--simple-colors-default-theme-accent-4);\n        --lrndesign-paperstack-faded-bg: var(\n          --simple-colors-default-theme-accent-3\n        );\n        --lrndesign-paperstack-border: var(\n          --simple-colors-default-theme-accent-1\n        );\n        --lrndesign-paperstack-shadow: var(\n          --simple-colors-default-theme-grey-1\n        );\n        --lrndesign-paperstack-accent: var(\n          --simple-colors-default-theme-grey-12\n        );\n        --lrndesign-paperstack-text: var(--simple-colors-default-theme-grey-12);\n      }\n      .stack {\n        width: 100%;\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n      }\n      .paper {\n        min-height: 160px;\n        width: 80%;\n        padding: 12px 24px;\n        position: absolute;\n        flex: 1 1 auto;\n        left: 0;\n        top: 0;\n        box-shadow: 0 0 1px var(--lrndesign-paperstack-shadow);\n        border: 1px solid var(--lrndesign-paperstack-border);\n      }\n      .paper:first-of-type {\n        left: -0.32px;\n        top: 0.32px;\n        transform: rotate(-2.5deg);\n        background-color: var(--lrndesign-paperstack-faded-bg);\n      }\n      .paper:nth-of-type(2) {\n        right: -0.32px;\n        top: 1.6px;\n        transform: rotate(1.4deg);\n        background-color: var(--lrndesign-paperstack-faded-bg);\n      }\n      .front {\n        flex: 0 0 100%;\n        position: relative;\n        margin-bottom: 48px;\n        background-color: var(--lrndesign-paperstack-bg);\n        color: var(--lrndesign-paperstack-text);\n      }\n\n      iron-icon {\n        width: 90%;\n        height: 90%;\n        flex: 1 1 auto;\n        color: var(--lrndesign-paperstack-bg);\n      }\n      .heading {\n        display: flex;\n        align-items: center;\n      }\n      .icon-container {\n        width: 48px;\n        height: 48px;\n        border-radius: 50%;\n        background-color: var(--lrndesign-paperstack-accent);\n        margin-right: 8px;\n        display: flex;\n        align-items: center;\n      }\n      .title {\n        font-size: 16px;\n        color: var(--lrndesign-paperstack-accent);\n        font-family: var(--lrndesign-paperstack-heading-font);\n      }\n    </style>\n    <div class=\"stack\">\n      <div class=\"paper\"></div>\n      <div class=\"paper\"></div>\n      <div class=\"front paper\">\n        <div class=\"heading\">\n          <div class=\"icon-container circle\">\n            <iron-icon icon=\"[[icon]]\"></iron-icon>\n          </div>\n          <span class=\"title\">[[title]]</span>\n        </div>\n        <p><slot></slot></p>\n      </div>\n    </div>\n  "]);_templateObject_3d5ad4b0459411e9a71dd507ab1f27ea=function _templateObject_3d5ad4b0459411e9a71dd507ab1f27ea(){return data};return data}var LrndesignPaperstack=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_3d5ad4b0459411e9a71dd507ab1f27ea()),is:"lrndesign-paperstack",behaviors:[HAXBehaviors.PropertiesBehaviors,A11yBehaviors.A11y,_simpleColors.SimpleColors],properties:{title:{type:String,value:"Title"},icon:{type:String,value:"lrn:assignment"}},attached:function attached(){var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Paper stack",description:"A stack of papers",icon:"icons:content-copy",color:"grey",groups:["Video","Media"],handles:[],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"Title of the cards",inputMethod:"textfield",icon:"editor:title"},{property:"accentColor",title:"Accent Color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"}],configure:[{property:"title",title:"Title",description:"Title of the cards",inputMethod:"boolean"},{property:"accentColor",title:"Accent Color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"},{property:"icon",title:"Icon",description:"Icon for the card",inputMethod:"iconpicker"},{slot:"",title:"Contents",description:"card contents",inputMethod:"code-editor"}],advanced:[]}};this.setHaxProperties(props)}});_exports.LrndesignPaperstack=LrndesignPaperstack});