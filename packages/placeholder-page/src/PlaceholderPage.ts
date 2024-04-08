/**
 * Simple component that does not extend MFEComponent as it does not need to subscribe to the store
 */
export class PlaceholderPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h2>Placeholder page</h2>
        <p>This is a placeholder page for demo purposes only. Please click on a GitHub User info button to proceed</p>
    `;
  }
}

export default PlaceholderPage;

if (!customElements.get("placeholder-page")) {
  customElements.define("placeholder-page", PlaceholderPage);
}
