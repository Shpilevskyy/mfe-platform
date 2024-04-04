export type MicroFrontendConfigType = {
    name: string;
    host: string;
}

export const microFrontendConfig: MicroFrontendConfigType[] = [
    {
        name: 'github-avatar',
        host: 'http://localhost:3001'
    }
]