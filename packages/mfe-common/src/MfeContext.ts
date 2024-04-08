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
  subscribers: Record<string, (context: MfeStoreType) => void> = {};

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
    console.log(1, event);
    if (event.key === MfeStoreStorageKey) {
      const store = event.newValue ? JSON.parse(event.newValue) : this.store;

      Object.values(this.subscribers).forEach((callback) => callback(store));
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

  subscribe = (name: string, callback: (context: MfeStoreType) => void) => {
    this.subscribers[name] = callback;
  };

  unsubscribe = (name: string) => {
    delete this.subscribers[name];
  };
}
