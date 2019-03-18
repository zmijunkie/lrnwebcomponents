define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/polymer/lib/utils/async.js","./node_modules/@polymer/polymer/lib/mixins/element-mixin.js","./node_modules/@polymer/app-layout/app-header/app-header.js","./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js","./node_modules/@polymer/app-layout/app-drawer/app-drawer.js","./node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js","./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./node_modules/@lrnwebcomponents/hax-body/lib/hax-shared-styles.js","./node_modules/@lrnwebcomponents/haxcms-elements/lib/theme/site-menu.js","./node_modules/@lrnwebcomponents/haxcms-elements/lib/theme/site-menu-button.js","./node_modules/@lrnwebcomponents/haxcms-elements/lib/HAXCMSThemeWiring.js","./node_modules/@lrnwebcomponents/haxcms-elements/lib/haxcms-site-store.js","./node_modules/mobx/lib/mobx.module.js"],function(_exports,_polymerLegacy,_polymerDom,async,_elementMixin,_appHeader,_appToolbar,_appDrawer,_appDrawerLayout,_appHeaderLayout,_simpleColors,_haxSharedStyles,_siteMenu,_siteMenuButton,_HAXCMSThemeWiring,_haxcmsSiteStore,_mobxModule){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.OutlinePlayer=void 0;async=babelHelpers.interopRequireWildcard(async);function _templateObject_76d333e0459411e9833e6f08425e132f(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"simple-colors hax-shared-styles\">\n      :host {\n        display: block;\n        font-family: libre baskerville;\n        position: relative;\n        overflow: hidden;\n        --outline-player-min-height: 100vh;\n        --app-drawer-width: 300px;\n        --outline-player-dark: #222222;\n        --outline-player-light: #f8f8f8;\n      }\n\n      :host([closed]) {\n        --app-drawer-width: 0px;\n      }\n\n      h1 {\n        font-size: 48px;\n        line-height: 16px;\n      }\n\n      h2 {\n        font-size: 32px;\n      }\n\n      h3 {\n        font-size: 28px;\n      }\n\n      p {\n        line-height: 26px;\n        min-height: 26px;\n      }\n\n      a,\n      a:visited,\n      a:active {\n        color: #000;\n      }\n\n      a:hover {\n        color: #2196f3;\n      }\n\n      ul li {\n        padding-bottom: 24px;\n        line-height: 1.5;\n        color: #424242;\n        max-width: 448px;\n      }\n\n      ul li:last-child {\n        padding-bottom: 16px;\n      }\n\n      app-drawer-layout {\n        min-height: 100vh;\n        min-height: -moz-available; /* WebKit-based browsers will ignore this. */\n        min-height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */\n        min-height: fill-available;\n        /* if the user has set a specific value then override the defaults */\n        min-height: var(--outline-player-min-height);\n      }\n\n      .outline-title {\n        font-size: 24px;\n        font-weight: normal;\n        line-height: 32px;\n        vertical-align: middle;\n        padding: 16px;\n        height: 32px;\n        margin: 0;\n        text-align: center;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        word-break: break-word;\n        border-bottom: 1px solid #eeeeee;\n        position: sticky;\n      }\n\n      site-menu {\n        padding: 8px;\n      }\n\n      outline-player-navigation {\n        --outline-player-dark: var(--outline-player-dark);\n      }\n\n      div[main-title] {\n        margin-left: 16px;\n        font-size: 20px;\n        line-height: 20px;\n        overflow-wrap: break-word;\n        text-overflow: ellipsis;\n        display: inline-block;\n        word-break: break-word;\n      }\n\n      paper-progress {\n        display: block;\n        width: 100%;\n        --paper-progress-active-color: rgba(255, 255, 255, 0.5);\n        --paper-progress-container-color: transparent;\n      }\n\n      app-header {\n        color: var(--outline-player-dark);\n        /* Enable outline to be placed anywhere in the dom */\n        /* This will override the app-header-layout forcing fixed mode */\n        /*position: absolute !important;\n        left: 0 !important;*/\n        --app-header-background-rear-layer: {\n          /* app-header-layout will force fixed */\n          background-color: var(--outline-player-light);\n        }\n      }\n\n      app-toolbar {\n        border-bottom: none;\n        background-color: #ffffff;\n        box-shadow: 0 0 6px -3px var(--outline-player-dark);\n      }\n      app-drawer {\n        box-shadow: 0 0 6px -3px var(--outline-player-dark);\n        overflow: hidden;\n        --app-drawer-scrim-background: rgba(80, 80, 80, 0.8);\n        --app-drawer-content-container: {\n          overflow: hidden;\n          background-color: var(--outline-player-light);\n        }\n      }\n      app-drawer-layout[narrow] app-toolbar {\n        position: fixed !important;\n        left: 0;\n        right: 0;\n      }\n      app-drawer-layout[narrow] #contentcontainer {\n        padding-top: 64px;\n      }\n      #content {\n        justify-content: center;\n        padding: 8px 8px 8px 8px;\n      }\n\n      #content > * {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      /* Required for HAX */\n      :host([edit-mode]) #slot {\n        display: none !important;\n      }\n      :host([edit-mode]) #content {\n        padding: 32px 8px 8px 8px;\n      }\n      #contentcontainer {\n        max-width: 840px;\n        margin: 0 auto;\n        padding: 0 16px 16px 16px;\n        flex: 1 1 auto;\n        order: 1;\n        display: flex;\n      }\n      #contentcontainer > * {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n      }\n      #contentcontainer h-a-x {\n        margin: 0;\n      }\n      site-menu {\n        height: calc(100vh - 64px);\n        color: #000000;\n        padding: 0;\n        background-color: #ffffff;\n        --site-menu-active-color: rgba(0, 0, 0, 0.1);\n        --site-menu-scrolltrack-bg-color: rgba(0, 0, 0, 0.3);\n        --site-menu-bg-shadow: rgba(0, 0, 0, 0.3);\n        --site-menu-bg-color: #fafafa;\n        --site-menu: {\n          padding: 0;\n          background-color: #ffffff;\n          color: #000000;\n        }\n        --site-menu-container: {\n          padding: 0;\n          background-color: #ffffff;\n          color: #000000;\n        }\n        --site-menu-item-active-item: {\n          color: #000000;\n        }\n      }\n      site-menu-button {\n        --site-menu-button-button: {\n          border-radius: 50%;\n          background-color: rgba(0, 0, 0, 0.1);\n          height: 40px;\n          width: 40px;\n        }\n        --site-menu-button-button-hover: {\n          background-color: rgba(0, 0, 0, 0.2);\n        }\n      }\n    </style>\n    <!-- Control the sites query paremeters -->\n\n    <!-- Begin Layout -->\n    <app-drawer-layout narrow=\"{{narrow}}\">\n      <app-drawer id=\"drawer\" swipe-open=\"\" slot=\"drawer\" opened=\"{{opened}}\">\n        <template is=\"dom-if\" if=\"[[__hasTitle(manifest.title)]]\">\n          <h2 class=\"outline-title\">[[manifest.title]]</h2>\n        </template>\n        <site-menu></site-menu>\n      </app-drawer>\n      <app-header-layout>\n        <app-header slot=\"header\" reveals>\n          <app-toolbar>\n            <paper-icon-button\n              icon=\"menu\"\n              on-click=\"_toggleMenu\"\n            ></paper-icon-button>\n            <div main-title>\n              [[activeItem.title]]\n              <div id=\"slotTitle\"><slot name=\"title\"></slot></div>\n            </div>\n            <site-menu-button\n              type=\"prev\"\n              position=\"bottom\"\n              label=\"Prev\"\n              raised\n            ></site-menu-button>\n            <site-menu-button\n              type=\"next\"\n              position=\"bottom\"\n              label=\"Next\"\n              raised\n            ></site-menu-button>\n          </app-toolbar>\n        </app-header>\n        <div id=\"content\">\n          <div id=\"contentcontainer\">\n            <div id=\"slot\"><slot></slot></div>\n          </div>\n        </div>\n      </app-header-layout>\n    </app-drawer-layout>\n  "]);_templateObject_76d333e0459411e9833e6f08425e132f=function _templateObject_76d333e0459411e9833e6f08425e132f(){return data};return data}var OutlinePlayer=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_76d333e0459411e9833e6f08425e132f()),is:"outline-player",properties:{opened:{type:Boolean,reflectToAttribute:!0},editMode:{type:Boolean,reflectToAttribute:!0,observer:"_editModeChanged"},activeItem:{type:Object},manifest:{type:Object},contentContainer:{type:Object},auto:{type:Boolean,notify:!0,value:!1},outlineFile:{type:String,value:"outline.json",notify:!0},outlineLocation:{type:String,notify:!0},closed:{type:Boolean,notify:!0,reflectToAttribute:!0,value:!1},_activeItemContent:{type:String,observer:"_activeItemContentChanged"},outline:{type:Array,notify:!0,observer:"_outlineChanged"},fillRemaining:{type:Boolean,value:!1,reflectToAttribute:!0},_location:{type:Object,observer:"_locationChanged"},activeId:{type:String,observer:"_activeIdChanged"},narrow:{type:Boolean,reflectToAttribute:!0}},_editModeChanged:function _editModeChanged(newValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){async.microTask.run(function(){window.dispatchEvent(new Event("resize"));(0,_elementMixin.updateStyles)()})}},created:function created(){this.HAXCMSThemeWiring=new _HAXCMSThemeWiring.HAXCMSThemeWiring(this)},ready:function ready(){this.contentContainer=this.$.contentcontainer;this.HAXCMSThemeWiring.connect(this,this.contentContainer)},attached:function attached(){var _this=this;this.__disposer=(0,_mobxModule.autorun)(function(){_this._location=_haxcmsSiteStore.store.location});this.__disposer2=(0,_mobxModule.autorun)(function(){_this.activeId=(0,_mobxModule.toJS)(_haxcmsSiteStore.store.activeId)});this.__disposer3=(0,_mobxModule.autorun)(function(){_this.activeItem=(0,_mobxModule.toJS)(_haxcmsSiteStore.store.activeItem)})},detached:function detached(){this.HAXCMSThemeWiring.disconnect(this);this.__disposer2();this.__disposer3()},_locationChanged:function _locationChanged(newValue){if(!newValue||"undefined"===typeof newValue.route)return;var location=newValue,name=location.route.name;if("home"===name||"404"===name){var firstItem=this.manifest.items.find(function(i){return"undefined"!==typeof i.id});if(firstItem){_haxcmsSiteStore.store.activeId=firstItem.id}}},_toggleMenu:function _toggleMenu(e){this.$.drawer.toggle();this.closed=!this.$.drawer.opened;async.microTask.run(function(){window.dispatchEvent(new Event("resize"));(0,_elementMixin.updateStyles)()})},wipeSlot:function wipeSlot(element){var slot=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"*";if("*"===slot){while(null!==(0,_polymerDom.dom)(element).firstChild){(0,_polymerDom.dom)(element).removeChild((0,_polymerDom.dom)(element).firstChild)}}else{for(var i in(0,_polymerDom.dom)(element).childNodes){if(babelHelpers.typeof((0,_polymerDom.dom)(element).childNodes[i])!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&(0,_polymerDom.dom)(element).childNodes[i].slot===slot){(0,_polymerDom.dom)(element).removeChild((0,_polymerDom.dom)(element).childNodes[i])}}}},_activeItemContentChanged:function _activeItemContentChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){this.wipeSlot(this,"*");if(null!==newValue){var frag=document.createRange().createContextualFragment(newValue);(0,_polymerDom.dom)(this).appendChild(frag)}}},_activeIdChanged:function _activeIdChanged(newValue){if(this.opened&&this.narrow){this.$.drawer.toggle()}window.scrollTo({top:0,left:0,behavior:"smooth"})},__hasTitle:function __hasTitle(outlineTitle){return outlineTitle?!0:!1}});_exports.OutlinePlayer=OutlinePlayer});