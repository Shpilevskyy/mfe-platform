import "./GithubStatus.js";
import "./GithubUser.js";
import { MFEComponent, MfeStoreType } from "mfe-common";

const githubStatusModuleUrl = import.meta.resolve("./GithubStatus.js");
const githubUserModuleUrl = import.meta.resolve("./GithubUser.js");

export class GithubInfo extends MFEComponent {
  tagName = "github-info";

  constructor() {
    super();

    this.staticRender();
  }

  private onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const githubUsername = target.value;

    this.updateStore({ githubUsername });
  }

  staticRender() {
    this.innerHTML = `
      <h2>Github Info</h2>
      
      <sl-input 
        label="GitHub Username"
        help-text="Please provide a username of any GitHub account to be able to render information" 
        id="githubUsername"
        style="padding-bottom: 20px"
      ></sl-input>

      <sl-tab-group>
        <sl-tab>
          <sl-button href="#github-info/status">Github Status</sl-button>
        </sl-tab>
        <sl-tab>
          <sl-button href="#github-info/user">Github User</sl-button>
        </sl-tab>
      </sl-tab-group>
      <mfe-router>
        <mfe-route path="/github-info/status" component="github-status" host="${githubStatusModuleUrl}"></mfe-route>
        <mfe-route path="/github-info/user" component="github-user" host="${githubUserModuleUrl}"></mfe-route>
        <mfe-outlet></mfe-outlet>
      </mfe-router>
      <style>
        h2 {
            color: red;
        }   
      </style>
    `;
  }

  render(store: MfeStoreType) {
    const input = this.querySelector("#githubUsername") as HTMLInputElement;

    if (input) {
      input.value = store?.githubUsername || "";
      input.addEventListener("input", this.onInputChange.bind(this));
    }
  }
}

export default GithubInfo;

GithubInfo.registerComponentName("github-info");
