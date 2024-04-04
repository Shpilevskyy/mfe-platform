import "./GithubAvatar.js";
import "./GithubUseName.js";

// layout for the github-avatar and github-user-name component
export class GithubInfo extends HTMLElement {
  username: string;

  constructor(username: string) {
    super();
    this.username = username || this.getAttribute("username") || "";
  }

  async connectedCallback() {
    this.innerHTML = `
      <img is="github-avatar" alt="${this.username}" username="${this.username}"></img>
      <github-user-name username="${this.username}"></github-user-name>
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
