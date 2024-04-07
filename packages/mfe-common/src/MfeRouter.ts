class MfeRoute extends HTMLElement {
  static get observedAttributes() {
    return ["path", "component", "host"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
  }
}

customElements.define("mfe-route", MfeRoute);

class MfeRouter extends HTMLElement {
  constructor() {
    super();
  }

  get routes() {
    return Array.from(this.querySelectorAll("mfe-route"))
      .filter((node) => node.parentNode === this)
      .map((r) => ({
        path: r.getAttribute("path"),
        host: r.getAttribute("host"),
        component: r.getAttribute("component"),
      }));
  }

  get outlet() {
    return this.querySelector("mfe-outlet");
  }

  _handlePopstate = () => {
    this.render();
  };

  connectedCallback() {
    window.addEventListener("popstate", this._handlePopstate);
    this.render();
  }

  disconnectedCallback() {
    window.removeEventListener("popstate", this._handlePopstate);
  }

  render() {
    const path = window.location.hash.length
      ? window.location.hash.replace("#", "/")
      : "/";
    const route = this.routes.find((r) => path.startsWith(r.path));

    if (route) {
      import(route.host).then(() => {
        this.outlet.innerHTML = `<${route.component}></${route.component}>`;
      });
    }
  }
}

customElements.define("mfe-router", MfeRouter);
