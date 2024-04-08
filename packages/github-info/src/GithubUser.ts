import { MFEComponent, MfeStoreType } from "mfe-common";

export class GithubUser extends MFEComponent {
  constructor() {
    super();
  }

  async getGithubUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    window.localStorage.setItem(username, JSON.stringify(data));

    return data;
  }

  async render(store: MfeStoreType) {
    if (!store?.githubUsername) {
      this.innerHTML =
        "<h2>Please provide a username of any GitHub account to be able to render information</h2>";

      return;
    }

    const data = await this.getGithubUser(store.githubUsername);

    this.innerHTML = `
      <sl-card class="card-image">
        <img
          slot="image"
          src="${data.avatar_url}" 
          alt="${data.name}"
        />
        ${data.name}
      </sl-card>
    `;
  }
}

export default GithubUser;

GithubUser.tagName = "github-user";
GithubUser.register();
