import { MicroFrontendConfigType } from "./mfe-config.js";

console.log("MfeMenu loaded");
export class MfeMenu extends HTMLElement {
  private config: Array<MicroFrontendConfigType> = [];

  constructor(config: Array<MicroFrontendConfigType>) {
    super();

    console.log("MfeMenu loaded", config);
    this.config = config;
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
