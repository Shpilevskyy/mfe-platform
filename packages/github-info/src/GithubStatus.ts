import { MFEComponent } from "mfe-common";

export class GithubStatus extends MFEComponent {
  constructor() {
    super();
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
      <h2>Status: ${data.status.description}</h2>
      <p>Indicator: ${data.status.indicator}</p>
      <p>Time zone: ${data.page.time_zone}</p>
      <style>
        h2 {
            color: green;
        }   
      </style>
    `;
  }
}

export default GithubStatus;

GithubStatus.register();
