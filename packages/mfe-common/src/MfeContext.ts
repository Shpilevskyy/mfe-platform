export type MfeStoreType = {
  githubUsername?: string;
};

export const MfeStoreDefault: MfeStoreType = {
  githubUsername: "",
};

export const MfeStoreStorageKey = "mfe-store";

export class MfeContext {
  private static instance: MfeContext;
  store: MfeStoreType = MfeStoreDefault;
  subscribers: Array<(context: MfeStoreType) => void> = [];

  private constructor() {
    const store = localStorage.getItem(MfeStoreStorageKey);

    if (store) {
      this.store = JSON.parse(store);
    }

    window.addEventListener("storage", this.handleStorageEvent);
  }

  public static getInstance(): MfeContext {
    if (!MfeContext.instance) {
      MfeContext.instance = new MfeContext();
    }

    return MfeContext.instance;
  }

  private handleStorageEvent = (event: StorageEvent) => {
    if (event.key === MfeStoreStorageKey) {
      const store = event.newValue ? JSON.parse(event.newValue) : this.store;

      this.subscribers.forEach((callback) => callback(store));
    }
  };

  dispatch = (newContext: MfeStoreType = {}) => {
    this.store = { ...this.store, ...newContext };

    localStorage.setItem(MfeStoreStorageKey, JSON.stringify(this.store));

    window.dispatchEvent(
      new StorageEvent("storage", {
        key: MfeStoreStorageKey,
        newValue: JSON.stringify(this.store),
      }),
    );
  };

  subscribe = (callback: (context: MfeStoreType) => void) => {
    this.subscribers.push(callback);
  };

  unsubscribe = (callback: (context: MfeStoreType) => void) => {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== callback,
    );
  };
}
