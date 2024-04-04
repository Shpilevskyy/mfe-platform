import { MicroFrontendConfigType } from "./mfe-config.js";

export class MfeMenu extends HTMLElement {
  private config: Array<MicroFrontendConfigType> = [];

  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["config"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "config") {
      this.config = JSON.parse(newValue);

      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const list = this.config.map((config) => {
      return `<li><a href="/#${config.path}">${config.name}</a></li>`;
    });

    this.innerHTML = `
          <h1>Micro Frontend Menu</h1>
          <ul>
            ${list.join("")}
          </ul>
        `;
  }
}

customElements.define("mfe-menu", MfeMenu);
