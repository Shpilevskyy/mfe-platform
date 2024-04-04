import {MicroFrontendConfigType} from "./mfe-config";

class HashRouter extends HTMLElement {
    private routes: Array<MicroFrontendConfigType> = [];
    private routeMap: any = {};

    static get observedAttributes() {
        return ['routes'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'routes') {
            this.routes = JSON.parse(newValue);

            console.log(this.routes)

            this.setupRouter();
        }
    }

    connectedCallback() {
        window.addEventListener('hashchange', () => this.loadRoute());

        this.loadRoute();
    }

    setupRouter() {
        this.routeMap = this.routes.reduce((map, route) => {
            map[route.path] = route.host;

            return map;
        }, {});

        console.log('routeMap', this.routeMap)
    }

    async loadRoute() {
        const path = window.location.hash.slice(1); // remove the '#' symbol
        const componentPath = this.routeMap[path];

        if (componentPath) {
            // load component from the server
            const module = await import(componentPath);
            const component = new module.default("Shpilevskyy");

            // clear the previous content
            this.innerHTML = '';
            this.appendChild(component);
        } else {
            this.innerHTML = '404 Not Found';
        }
    }
}

customElements.define('mfe-router', HashRouter);