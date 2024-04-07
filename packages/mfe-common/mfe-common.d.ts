declare module "mfe-common" {
  export type MfeStoreType = {
    githubUsername?: string;
  };

  export class MfeContext {
    static getInstance(): MfeContext;
    dispatch(newContext: MfeStoreType): void;
    subscribe(callback: (context: MfeStoreType) => void): void;
    unsubscribe(callback: (context: MfeStoreType) => void): void;
  }
}
