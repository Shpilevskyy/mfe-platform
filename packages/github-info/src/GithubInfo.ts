import "./GithubAvatar.js";
import "./GithubUseName.js";
import { MfeContext, MfeStoreType } from "mfe-common";

export class GithubInfo extends HTMLElement {
  private context: MfeContext;

  constructor() {
    super();

    this.context = new MfeContext();
    this.context.subscribe(this.render.bind(this));
  }

  connectedCallback() {
    this.render(this.context.store);
  }

  render(store: MfeStoreType) {
    console.log("render", store);
    if (!this.context.store.githubUsername) {
      this.innerHTML =
        "<h1>Please provide a username of any GitHub account to be able to render his information in home page</h1>";

      return;
    }
    this.innerHTML = `
      <h1>Information about ${this.context.store.githubUsername} user</h1>
      <img is="github-avatar" alt="${store.githubUsername}" username="${store.githubUsername}"></img>
      <github-user-name username="${store.githubUsername}"></github-user-name>
      <style>
        h1 {
            color: red;
        }
      </style>
    `;
  }
}

export default GithubInfo;

customElements.define("github-info", GithubInfo);
