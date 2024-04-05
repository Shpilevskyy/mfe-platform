export class GithubAvatar extends HTMLImageElement {
  username: string;

  constructor(username: string) {
    super();
    this.username = username || this.getAttribute("username") || "";
  }

  async connectedCallback() {
    const response = await fetch(
      `https://api.github.com/users/${this.username}`,
    );
    const data = await response.json();

    this.src = data.avatar_url;
  }
}

export default GithubAvatar;

customElements.define("github-avatar", GithubAvatar, { extends: "img" });
