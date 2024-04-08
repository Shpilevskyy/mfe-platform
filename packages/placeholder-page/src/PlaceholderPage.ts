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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus</p>
    `;
  }
}

export default PlaceholderPage;

if (!customElements.get("placeholder-page")) {
  customElements.define("placeholder-page", PlaceholderPage);
}
