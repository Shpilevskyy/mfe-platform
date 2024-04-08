import { MfeRouter } from "./MfeRouter.js";

export class MFELinkButton extends HTMLElement {
  static observedAttributes = ["href"];

  constructor() {
    super();
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    window.addEventListener("popstate", this.render.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener("popstate", this.render.bind(this));
  }

  render() {
    const href = this.getAttribute("href") || "";
    const label = this.textContent || "";
    const variant = MfeRouter.isRouteActive(href) ? "primary" : "default";

    this.innerHTML = `
      <sl-button href="${href}" variant="${variant}">${label}</sl-button>
    `;
  }
}

if (!customElements.get("mfe-link-button")) {
  customElements.define("mfe-link-button", MFELinkButton);
}
