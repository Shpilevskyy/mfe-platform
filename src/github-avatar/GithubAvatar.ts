export class GithubAvatar extends HTMLImageElement {
    username: string;

    constructor() {
        super();
        this.username = this.getAttribute('username') || '';
    }

    connectedCallback() {
        this.fetchAvatar();
    }

    async fetchAvatar() {
        const response = await fetch(`https://api.github.com/users/${this.username}`);
        const data = await response.json();
        this.src = data.avatar_url;
    }
}

customElements.define('github-avatar', GithubAvatar, {extends: 'img'});