export class PlaceholderPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h1>Placeholder page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus</p>
    `;
  }
}

export default PlaceholderPage;

if (!customElements.get("placeholder-page")) {
  customElements.define("placeholder-page", PlaceholderPage);
}
