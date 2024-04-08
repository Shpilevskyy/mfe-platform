import { MfeContext, MfeStoreType } from "./MfeContext.js";

export abstract class MFEComponent extends HTMLElement {
  private context: MfeContext;

  protected constructor() {
    super();

    this.context = MfeContext.getInstance();
  }

  connectedCallback() {
    this.render(this.context.store);
    this.context.subscribe(this.tagName, this.render.bind(this));
  }

  disconnectedCallback() {
    this.context.unsubscribe(this.tagName);
  }

  // This method should be implemented by subclasses
  abstract render(store?: MfeStoreType): void;

  static register() {
    if (!this.name) {
      throw new Error("tagName must be defined");
    }

    // convert CamelCase to kebab-case
    const name = this.name
      .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
      .toLowerCase()
      .replace(/^-/, "");

    if (!customElements.get(name)) {
      customElements.define(name, this as unknown as CustomElementConstructor);
    }
  }

  updateStore(event: MfeStoreType) {
    this.context.dispatch(event);
  }
}
