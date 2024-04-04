import { MicroFrontendConfigType } from "./mfe-config.js";

console.log("MfeMenu loaded");
export class MfeMenu extends HTMLElement {
  private config: Array<MicroFrontendConfigType> = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  setConfig(config: Array<MicroFrontendConfigType>) {
    this.config = config;
    this.render();
  }

  render() {
    const list = this.config.map((config) => {
      return `<li><a href="/#${config.path}">${config.name}</a></li>`;
    });

    this.innerHTML = `
          <style>
            :host {
              display: block;
              padding: 16px;
              color: white;
              background-color: darkblue;
            }
          </style>
          <h1>Micro Frontend Menu</h1>
          <ul>
            ${list.join("")}
          </ul>
        `;
  }
}

customElements.define("mfe-menu", MfeMenu);
