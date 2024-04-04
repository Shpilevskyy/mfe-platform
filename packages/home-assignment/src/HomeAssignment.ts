// Placeholder component that renders lorem ipsum text
export class HomeAssignment extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
                <h1>Home Assignment</h1>
                <p>
                    This is a placeholder component that renders lorem ipsum text.
                </p>
            `;
  }
}

export default HomeAssignment;

customElements.define("home-assignment", HomeAssignment);
