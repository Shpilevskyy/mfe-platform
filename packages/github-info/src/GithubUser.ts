import { MfeContext, MfeStoreType } from "mfe-common";

export class GithubUser extends HTMLElement {
  private context: MfeContext;

  constructor() {
    super();

    this.context = MfeContext.getInstance();
    this.context.subscribe("GithubUser", this.render.bind(this));
  }

  async getGithubUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    window.localStorage.setItem(username, JSON.stringify(data));

    return data;
  }

  async render(store: MfeStoreType) {
    if (!store.githubUsername) {
      this.innerHTML =
        "<h1>Please provide a username of any GitHub account to be able to render his information in home page</h1>";

      return;
    }

    const data = await this.getGithubUser(store.githubUsername);

    this.innerHTML = `
        <h1>${data.name}</h1>
        <img src="${data.avatar_url}" alt="${data.name}" />
        <style>
          h1 {
              color: gold;
          }   
      </style>
    `;
  }

  connectedCallback() {
    void this.render(this.context.store);
  }

  disconnectedCallback() {
    this.context.unsubscribe("GithubUser");
  }
}

export default GithubUser;

if (!customElements.get("github-user")) {
  customElements.define("github-user", GithubUser);
}
