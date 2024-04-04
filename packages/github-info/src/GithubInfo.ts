export class GithubInfo extends HTMLElement {
    username: string;

    constructor() {
        super();
        this.username = this.getAttribute('username') || '';
    }

    connectedCallback() {
        this.render();
    }

    async render() {
        const response = await fetch(`https://api.github.com/users/${this.username}`);
        const data = await response.json();
        this.innerHTML = `
            <h1>${data.name}</h1>
        `;
    }
}

customElements.define('github-info', GithubInfo);