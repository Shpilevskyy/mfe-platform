import { mfeConfig } from "./mfe-config.js";

import "./MfeMenu.js";
import "mfe-common";

export class MfeShell extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <aside style="padding: 20px">
          <mfe-menu></mfe-menu>
        </aside>
        <main style="padding: 20px">
          <mfe-router></mfe-router>
        </main>
    `;

    this.provideConfig();
  }

  provideConfig() {
    document
      .querySelector("mfe-menu")
      .setAttribute("config", JSON.stringify(mfeConfig));
    document
      .querySelector("mfe-router")
      .setAttribute("routes", JSON.stringify(mfeConfig));
  }
}

customElements.define("mfe-shell", MfeShell);
