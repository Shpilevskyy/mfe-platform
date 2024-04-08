import { MfeStoreType } from "mfe-common";
export declare class GithubUser extends HTMLElement {
    private context;
    constructor();
    getGithubUser(username: string): Promise<any>;
    render(store: MfeStoreType): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export default GithubUser;
