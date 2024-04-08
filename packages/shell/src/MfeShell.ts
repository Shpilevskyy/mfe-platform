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
      <header>
        <h1 style="padding: 0 20px">Micro Frontend Shell</h1>
      </header>
      <sl-tab-group>
        <sl-tab>
          <sl-button href="#">Placeholder page</sl-button>
        </sl-tab>
        <sl-tab>
          <sl-button href="#github-info/status">GitHub User info</sl-button>
        </sl-tab>
      </sl-tab-group>
      <main style="padding: 20px">
        <mfe-router>
          <mfe-route path="/github-info" component="github-info" host="http://localhost:3002/dist/GithubInfo.js"></mfe-route>
          <mfe-route path="/" component="placeholder-page" host="http://localhost:3001/dist/PlaceholderPage.js"></mfe-route>
          <mfe-outlet></mfe-outlet>
        </mfe-router>
      </main>
    `;
  }
}

customElements.define("mfe-shell", MfeShell);
