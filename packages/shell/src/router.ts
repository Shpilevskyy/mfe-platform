export class Router {
    constructor(private contentElement: HTMLElement) {
        window.addEventListener('hashchange', () => this.render());
    }

    navigate(hash) {
        window.location.hash = hash;
    }

    async render() {
        const {hash} = window.location;
        this.contentElement.innerHTML = '';

        // switch (hash) {
        //     case '#microfrontend1':
        //         const {MicroFrontend1} = await import('./microfrontend1.js');
        //         new MicroFrontend1().render(this.contentElement);
        //         break;
        //     case '#microfrontend2':
        //         const {MicroFrontend2} = await import('./microfrontend2.js');
        //         new MicroFrontend2().render(this.contentElement);
        //         break;
        //     default:
        //         this.contentElement.innerHTML = '<h1>Welcome!</h1>';
        // }
    }
}