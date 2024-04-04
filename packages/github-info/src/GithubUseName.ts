export class GithubUseName extends HTMLElement {
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

export default GithubUseName;

customElements.define("github-user-name", GithubUseName);
