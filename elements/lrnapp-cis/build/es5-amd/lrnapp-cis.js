define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnappCis = void 0;
  function _templateObject_78add570d6f511e897dc110e063eba8f() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_78add570d6f511e897dc110e063eba8f = function() {
      return data;
    };
    return data;
  }
  var LrnappCis = (function(_PolymerElement) {
    babelHelpers.inherits(LrnappCis, _PolymerElement);
    function LrnappCis() {
      babelHelpers.classCallCheck(this, LrnappCis);
      return babelHelpers.possibleConstructorReturn(
        this,
        (LrnappCis.__proto__ || Object.getPrototypeOf(LrnappCis)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      LrnappCis,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrnappCis.prototype.__proto__ ||
                  Object.getPrototypeOf(LrnappCis.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrnappCis.haxProperties,
              LrnappCis.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_78add570d6f511e897dc110e063eba8f()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Lrnapp cis",
                description: "Automated conversion of lrnapp-cis/",
                icon: "icons:android",
                color: "green",
                groups: ["Cis"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "lrnapp-cis";
          }
        }
      ]
    );
    return LrnappCis;
  })(_polymerElement.PolymerElement);
  _exports.LrnappCis = LrnappCis;
  window.customElements.define(LrnappCis.tag, LrnappCis);
});
