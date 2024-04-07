export class GithubStatus extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    void this.render();
  }

  async fetchGithubStatus() {
    const response = await fetch(
      `https://www.githubstatus.com/api/v2/summary.json`,
    );

    return await response.json();
  }

  async render() {
    const data = await this.fetchGithubStatus();

    this.innerHTML = `
      <h1>Status: ${data.status.description}</h1>
      <p>Indicator: ${data.status.indicator}</p>
      <p>Time zone: ${data.page.time_zone}</p>
    `;
  }
}

export default GithubStatus;

customElements.define("github-status", GithubStatus);
