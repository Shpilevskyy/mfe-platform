export class GithubInfo extends HTMLElement {
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
    this.innerHTML = `
            <h1>${data.name}</h1>
        `;
  }
}

export default GithubInfo;

customElements.define("github-info", GithubInfo);
