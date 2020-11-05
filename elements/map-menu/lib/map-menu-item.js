import { LitElement, html, css } from "lit-element/lit-element.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
class MapMenuItem extends LitElement {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
          transition: 0.1s all ease-in-out;
          font-size: var(--map-menu-item-font-size);
          --map-menu-item-height: 24px;
          --map-menu-item-a-color: inherit;
        }
        :host([active]) {
          background: var(--map-menu-active-color);
          color: var(--map-menu-item-active-item-color, #000000);
        }
        button {
          width: 100%;
          background-color: transparent;
          justify-content: left;
          text-align: left;
          margin: 0;
          padding: 4px;
          border: none;
          border-radius: 0;
        }
        simple-icon {
          display: inline-block;
          --simple-icon-height: var(--map-menu-item-height);
          --simple-icon-width: var(--map-menu-item-height);
        }
        .title {
          text-transform: none;
        }
        a:visited,
        a {
          display: block;
          color: var(--map-menu-item-a-color);
          text-decoration: var(--map-menu-item-a-text-decoration, none);
        }
        a:hover,
        a:active,
        a:focus {
          color: var(
            --map-menu-item-a-active-color,
            var(--map-menu-item-a-color)
          );
          text-decoration: var(
            --map-menu-item-a-text-decoration-hover,
            underline
          );
        }
        #track {
          transition: 0.1s all ease-in-out;
          position: absolute;
          right: 0;

          margin-right: 0px;
          width: 0px;
          height: 0px;
          visibility: hidden;
          opacity: 0;
        }
        #track.show-icon {
          margin-right: 5px;
          width: 18px;
          height: 18px;
          visibility: visible;
          opacity: 1;
        }
      `,
    ];
  }
  /**
   * LitElement life cycle - render callback
   */
  render() {
    return html`
      <a tabindex="-1" href="${this.url}">
        <button id="wrapper" role="link" noink>
          ${this.__icon
            ? html` <simple-icon icon="${this.__icon}"></simple-icon> `
            : ``}
          <span class="title">${this.title}</span>
          ${this.trackIcon
            ? html`
                <simple-icon id="track" icon="${this.trackIcon}"></simple-icon>
              `
            : ``}
        </button>
      </a>
    `;
  }
  static get tag() {
    return "map-menu-item";
  }
  constructor() {
    super();
    this.icon = null;
    this.__icon = null;
    this.trackIcon = null;
    this.title = "";
    this.url = "";
    this.active = false;
    this.published = true;
  }
  /**
   * LitElement life cycle - properties definition
   */
  static get properties() {
    return {
      icon: {
        type: String,
      },
      __icon: {
        type: String,
      },
      trackIcon: {
        type: String,
        attribute: "track-icon",
      },
      title: {
        type: String,
      },
      url: {
        type: String,
      },
      id: {
        type: String,
        reflect: true,
      },
      active: {
        type: Boolean,
      },
      selected: {
        type: String,
      },
      published: {
        type: Boolean,
      },
    };
  }
  /**
   * LitElement life cycle - properties changed callback
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "trackIcon") {
        this._trackIconChanged(this[propName], oldValue);
      }
      if (["id", "selected"].includes(propName)) {
        this.__selectedChanged(this.selected, this.id);
      }
      if (propName == "published") {
        if (this.published === false) {
          this.__icon = "visibility-off";
        } else {
          this.__icon = null;
        }
      }
    });
  }
  _trackIconChanged(newValue, oldValue) {
    if (this.shadowRoot.querySelector("#track")) {
      if (newValue) {
        this.shadowRoot.querySelector("#track").classList.add("show-icon");
      } else {
        this.shadowRoot.querySelector("#track").classList.remove("show-icon");
      }
    }
  }
  __selectedChanged(selected, id) {
    if (selected === id) {
      this.dispatchEvent(
        new CustomEvent("active-item", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: this,
        })
      );
    }
  }

  _click() {
    this.dispatchEvent(
      new CustomEvent("link-clicked", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: { id: this.id },
      })
    );
  }
}
window.customElements.define(MapMenuItem.tag, MapMenuItem);
export { MapMenuItem };
