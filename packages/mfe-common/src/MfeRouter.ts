class MfeRoute extends HTMLElement {
  path: string = "";
  component: string = "";
  host: string = "";

  static get observedAttributes() {
    return ["path", "component", "host"];
  }

  attributeChangedCallback(
    name: "path" | "component" | "host",
    oldValue: string,
    newValue: string,
  ) {
    this[name] = newValue;
  }
}

if (!customElements.get("mfe-route")) {
  customElements.define("mfe-route", MfeRoute);
}

class MfeRouter extends HTMLElement {
  constructor() {
    super();
  }

  get routes(): Array<{
    path: string | null;
    host: string | null;
    component: string | null;
  }> {
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
    void this.render();
  };

  connectedCallback() {
    window.addEventListener("popstate", this._handlePopstate);
    void this.render();
  }

  disconnectedCallback() {
    window.removeEventListener("popstate", this._handlePopstate);
  }

  async render() {
    const path = window.location.hash.length
      ? window.location.hash.replace("#", "/")
      : "/";
    const route = this.routes.find((r) => r.path && path.startsWith(r.path));

    if (route?.host) {
      await import(route.host);

      this.outlet!.shadowRoot!.innerHTML = `<${route.component}></${route.component}>`;
    }
  }
}

if (!customElements.get("mfe-router")) {
  customElements.define("mfe-router", MfeRouter);
}

export class MfeOutlet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

if (!customElements.get("mfe-outlet")) {
  customElements.define("mfe-outlet", MfeOutlet);
}
