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
    console.log("MfeShell loaded", mfeConfig);

    this.innerHTML = `
        <aside style="padding: 20px">
          <mfe-menu config="${mfeConfig}"></mfe-menu>
        </aside>
        <main style="padding: 20px">
          <mfe-router config="${mfeConfig}"></mfe-router>
        </main>
    `;
  }
}

customElements.define("mfe-shell", MfeShell);
