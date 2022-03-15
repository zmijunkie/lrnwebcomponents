import { css, html } from "lit";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js";
import { HAXCMSI18NMixin } from "./HAXCMSI18NMixin.js";

const QRCodeMixin = function (SuperClass) {
  return class extends HAXCMSI18NMixin(SuperClass) {
    constructor() {
      super();
      this.showQRCode = false;
      this.t = this.t || {};
      this.t = {
        ...this.t,
        currentPage: "Current page",
      };
    }
    /**
     * life cycle, element is afixed to the DOM
     */
    firstUpdated(changedProperties) {
      if (super.firstUpdated) {
        super.firstUpdated(changedProperties);
      }
      // hook up the pop over menu with trap to ensure theme is rendering a QR code
      if (this.shadowRoot.querySelector("#qrcodepopover")) {
        this.qrcodebtn = this.shadowRoot.querySelector("#qrcodebtn");
        this.shadowRoot.querySelector("#qrcodepopover").target = this.qrcodebtn;
      }
    }

    static get styles() {
      let styles = [];
      if (super.styles) {
        styles = super.styles;
      }
      return [
        ...styles,
        css`
          simple-popover:not(:defined) {
            display: none;
          }
          simple-popover {
            padding: 2px;
          }
          .qr-code-btn {
            color: inherit;
            --simple-icon-height: 24px;
            --simple-icon-width: 24px;
          }
          #qrcodebtnwrapper {
            display: inline-flex;
          }
        `,
      ];
    }

    QRCodeButton(direction = "left") {
      import("@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js");
      import("@lrnwebcomponents/simple-popover/simple-popover.js");
      import("@lrnwebcomponents/simple-tooltip/simple-tooltip.js");
      return html`
        <div
          id="qrcodebtnwrapper"
          part="${this.editMode ? `edit-mode-active` : ``}"
        >
          <simple-icon-button-lite
            part="qr-code-btn"
            class="qr-code-btn btn"
            label="${this.t.currentPage}"
            icon="hax:qr-code"
            @click="${this.QRCodeButtonToggle}"
            id="qrcodebtn"
          ></simple-icon-button-lite>
          <simple-tooltip for="qrcodebtn">
            ${this.t.currentPage}
          </simple-tooltip>
          <simple-popover
            ?hidden="${!this.showQRCode}"
            id="qrcodepopover"
            position="${direction}"
            fit-to-visible-bounds
            auto
          >
            ${this.showQRCode
              ? html`
                  <div style="width:190px;height:190px;">
                    <q-r
                      modulesize="4"
                      margin="0"
                      title="${store.activeTitle}"
                      data="${window.location.href}"
                    ></q-r>
                  </div>
                `
              : ``}
          </simple-popover>
        </div>
      `;
    }
    QRCodeButtonToggle(e) {
      this.showQRCode = !this.showQRCode;
    }
    static get properties() {
      let props = {};
      if (super.properties) {
        props = super.properties;
      }
      return {
        ...props,
        showQRCode: {
          type: Boolean,
        },
      };
    }
  };
};

export { QRCodeMixin };
