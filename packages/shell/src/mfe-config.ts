export type MicroFrontendConfigType = {
    name: string;
    host: string;
    path: string;
}

export const mfeConfig: MicroFrontendConfigType[] = [
    {
        path: "/",
        name: 'github-avatar',
        host: 'http://localhost:3001'
    }
]