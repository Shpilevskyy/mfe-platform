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
          <ul>
            <li>
              <a href="#">Home Assignment</a>
            </li>
            <li>
              <a href="#github-info">GitHub User info</a>
            </li>
          </ul>
        </aside>
        <main style="padding: 20px">
          <mfe-router>
            <mfe-route path="/github-info" component="github-info" host="http://localhost:3002/src/GithubInfo.js"></mfe-route>
            <mfe-route path="/" component="home-assignment" host="http://localhost:3001/src/HomeAssignment.js"></mfe-route>
            <mfe-outlet></mfe-outlet>
          </mfe-router>
        </main>
    `;
  }
}

customElements.define("mfe-shell", MfeShell);
