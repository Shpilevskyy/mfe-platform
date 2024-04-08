export type MfeStoreType = {
    githubUsername?: string;
};
export declare const MfeStoreDefault: MfeStoreType;
export declare const MfeStoreStorageKey = "mfe-store";
export declare class MfeContext {
    private static instance;
    store: MfeStoreType;
    subscribers: Record<string, (context: MfeStoreType) => void>;
    private constructor();
    static getInstance(): MfeContext;
    private handleStorageEvent;
    dispatch: (newContext?: MfeStoreType) => void;
    subscribe: (name: string, callback: (context: MfeStoreType) => void) => void;
    unsubscribe: (name: string) => void;
}
