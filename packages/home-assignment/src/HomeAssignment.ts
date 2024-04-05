import { MfeContext } from "mfe-common";

export class HomeAssignment extends HTMLElement {
  private context: MfeContext;

  constructor() {
    super();

    this.context = new MfeContext();
  }

  connectedCallback() {
    this.render();
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const githubUsername = target.value;

    this.context.dispatch({ githubUsername });
  }

  render() {
    this.innerHTML = `
        <h1>Home Assignment</h1>
        <p>Please provide a username of any GitHub account to be able to render his information</p>
        <input type="text" placeholder="GitHub Username" id="githubUsername" />
    `;

    const input = this.querySelector("#githubUsername") as HTMLInputElement;

    input.value = this.context.store.githubUsername || "";
    input?.addEventListener("input", this.onInputChange.bind(this));
  }
}

export default HomeAssignment;

customElements.define("home-assignment", HomeAssignment);
