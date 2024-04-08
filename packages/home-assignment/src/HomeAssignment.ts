export class HomeAssignment extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h1>Home Assignment</h1>
        <p>Placeholder page for demo</p>
    `;
  }
}

export default HomeAssignment;

if (!customElements.get("home-assignment")) {
  customElements.define("home-assignment", HomeAssignment);
}
