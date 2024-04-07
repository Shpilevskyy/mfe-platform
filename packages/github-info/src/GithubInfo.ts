import "./GithubStatus.js";
import "./GithubUser.js";
import { MfeContext } from "mfe-common";

export class GithubInfo extends HTMLElement {
  private context: MfeContext;

  constructor() {
    super();

    this.context = MfeContext.getInstance();
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const githubUsername = target.value;

    this.context.dispatch({ githubUsername });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h1>Github Info</h1>
      <p>Please provide a username of any GitHub account to be able to render his information</p>
      <input type="text" placeholder="GitHub Username" id="githubUsername" />
      <ul>
        <li><a href="#github-info/status">Github Status</a></li>
        <li><a href="#github-info/user">Github User</a></li>
      </ul>
      <mfe-router>
        <mfe-route path="/github-info/status" component="github-status" host="http://localhost:3002/dist/GithubStatus.js"></mfe-route>
        <mfe-route path="/github-info/user" component="github-user" host="http://localhost:3002/dist/GithubUser.js"></mfe-route>
        <mfe-outlet></mfe-outlet>
      </mfe-router>
      <style>
        h1 {
            color: red;
        }   
      </style>
    `;

    const input = this.querySelector("#githubUsername") as HTMLInputElement;

    input.value = this.context.store.githubUsername || "";
    input?.addEventListener("input", this.onInputChange.bind(this));
  }
}

export default GithubInfo;

if (!customElements.get("github-info")) {
  customElements.define("github-info", GithubInfo);
}
