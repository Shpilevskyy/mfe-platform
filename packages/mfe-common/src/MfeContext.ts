export type MfeStoreType = {
  githubUsername?: string;
};

export const MfeStoreDefault: MfeStoreType = {
  githubUsername: "",
};

export const MfeStoreStorageKey = "mfe-store";

export class MfeContext {
  store: MfeStoreType = MfeStoreDefault;

  constructor() {
    const store = localStorage.getItem(MfeStoreStorageKey);

    if (store) {
      this.store = JSON.parse(store);
    }
  }

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
    callback(this.store);

    window.addEventListener("storage", (event) => {
      if (event.key === MfeStoreStorageKey) {
        callback(event.newValue ? JSON.parse(event.newValue) : this.store);
      }
    });
  };
}
