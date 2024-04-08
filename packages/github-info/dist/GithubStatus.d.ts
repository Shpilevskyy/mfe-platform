export declare class GithubStatus extends HTMLElement {
    constructor();
    connectedCallback(): void;
    fetchGithubStatus(): Promise<any>;
    render(): Promise<void>;
}
export default GithubStatus;
