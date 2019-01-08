import{html,Polymer}from"./node_modules/@polymer/polymer/polymer-legacy.js";import{FlattenedNodesObserver}from"./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js";import"./node_modules/@polymer/iron-ajax/iron-ajax.js";import"./node_modules/@lrnwebcomponents/h-a-x/h-a-x.js";import"./node_modules/@lrnwebcomponents/simple-toast/simple-toast.js";import"./lib/cms-token.js";import"./lib/cms-block.js";import"./lib/cms-views.js";import"./lib/cms-entity.js";let CmsHax=Polymer({_template:html`
    <style>
      :host {
        display: block;
        font-size: 16px;
        box-sizing: content-box;
      }
    </style>
    <iron-ajax
      id="pageupdateajax"
      url="[[endPoint]]"
      method="[[method]]"
      body="[[updatePageData]]"
      content-type="application/json"
      handle-as="json"
      on-response="_handleUpdateResponse"
    ></iron-ajax>
    <h-a-x app-store$="[[appStoreConnection]]"></h-a-x>
  `,is:"cms-hax",observers:["_noticeTagChanges(allowedTags, hideExportButton, hidePanelOps, hidePreferencesButton, align, bodyOffsetLeft)"],properties:{openDefault:{type:Boolean,value:!1},hideExportButton:{type:Boolean,value:!0},hidePanelOps:{type:Boolean,value:!1},hidePreferencesButton:{type:Boolean,value:!1},align:{type:String,value:"right"},allowedTags:{type:Array},endPoint:{type:String},method:{type:String,value:"PUT"},updatePageData:{type:String},appStoreConnection:{type:Object},bodyOffsetLeft:{type:Number,value:-164},editMode:{type:Boolean,reflectToAttribute:!0},syncBody:{type:Boolean,value:!1},bodyValue:{type:String,value:""},hideMessage:{type:Boolean,value:!1},redirectLocation:{type:String},redirectOnSave:{type:Boolean,computed:"_computeRedirectOnSave(redirectLocation)"},activeHaxBody:{type:Object,observer:"_activeHaxBodyUpdated"},__imported:{type:Boolean,value:!1}},_activeHaxBodyUpdated:function(newValue,oldValue){if(null!=newValue&&!this.__imported){this.__imported=!0;let children=this.queryEffectiveChildren("template");if(typeof children!==typeof void 0){newValue.importContent(children.innerHTML)}}},_computeRedirectOnSave:function(redirectLocation){if(typeof redirectLocation!==typeof void 0){return!0}return!1},_attachDom(dom){this.appendChild(dom)},_noticeTagChanges:function(allowedTags,hideExportButton,hidePanelOps,hidePreferencesButton,align,bodyOffsetLeft){if(window.HaxStore.ready){if(allowedTags){window.HaxStore.instance.validTagList=allowedTags}window.HaxStore.instance.haxPanel.hideExportButton=hideExportButton;window.HaxStore.instance.haxPanel.hidePanelOps=hidePanelOps;window.HaxStore.instance.haxPanel.hidePreferencesButton=hidePreferencesButton;window.HaxStore.instance.haxPanel.align=align;window.HaxStore.instance.activeHaxBody.contextOffsetLeft=bodyOffsetLeft}},_storeReady:function(e){this._noticeTagChanges(this.allowedTags,this.hideExportButton,this.hidePanelOps,this.hidePreferencesButton,this.align,this.bodyOffsetLeft)},created:function(){window.addEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this));window.addEventListener("hax-store-ready",this._storeReady.bind(this))},detached:function(){window.removeEventListener("hax-store-ready",this._storeReady.bind(this));window.removeEventListener("hax-save",this._saveFired.bind(this))},attached:function(){window.SimpleToast.requestAvailability();this.__lock=!1;window.addEventListener("hax-save",this._saveFired.bind(this));if(this.openDefault){window.HaxStore.write("editMode",!0,this)}if(this.syncBody){FlattenedNodesObserver(window.HaxStore.instance.activeHaxBody,info=>{if(!this.__lock){this.__lock=!0;this.fire("hax-body-content-changed",window.HaxStore.instance.activeHaxBody.haxToContent());setTimeout(()=>{this.__lock=!1},100)}})}},_haxStorePropertyUpdated:function(e){if(e.detail&&typeof e.detail.value!==typeof void 0&&e.detail.property){if("object"===typeof e.detail.value){this.set(e.detail.property,null)}this.set(e.detail.property,e.detail.value);this.notifyPath(e.detail.property)}},_saveFired:function(e){this.updatePageData=window.HaxStore.instance.activeHaxBody.haxToContent();this.$.pageupdateajax.generateRequest()},_handleUpdateResponse:function(e){if(!this.hideMessage){const evt=new CustomEvent("simple-toast-show",{bubbles:!0,cancelable:!0,detail:{text:"Saved!",duration:3e3}});this.dispatchEvent(evt);if(this.redirectOnSave){setTimeout(()=>{window.HaxStore.instance.haxPanel.toggle();window.location=this.redirectLocation},1e3)}}}});export{CmsHax};