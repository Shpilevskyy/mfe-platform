import { MfeContext, MfeStoreType } from "./MfeContext.js";

export abstract class MFEComponent extends HTMLElement {
  static tagName: string;
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
    if (!this.tagName) {
      throw new Error("tagName must be defined");
    }

    if (!customElements.get(this.tagName)) {
      customElements.define(
        this.tagName,
        this as unknown as CustomElementConstructor,
      );
    }
  }

  updateStore(event: MfeStoreType) {
    this.context.dispatch(event);
  }
}
