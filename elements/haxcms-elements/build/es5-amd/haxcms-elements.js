define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js"
], function(_exports, _polymerElement) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.HaxcmsElements = void 0;
  var HaxcmsElements = (function(_PolymerElement) {
    babelHelpers.inherits(HaxcmsElements, _PolymerElement);
    function HaxcmsElements() {
      babelHelpers.classCallCheck(this, HaxcmsElements);
      return babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(HaxcmsElements).apply(this, arguments)
      );
    }
    babelHelpers.createClass(HaxcmsElements, null, [
      {
        key: "tag",
        get: function get() {
          return "haxcms-elements";
        }
      }
    ]);
    return HaxcmsElements;
  })(_polymerElement.PolymerElement);
  _exports.HaxcmsElements = HaxcmsElements;
  window.customElements.define(HaxcmsElements.tag, HaxcmsElements);
});
