export type MicroFrontendConfigType = {
  name: string;
  host: string;
  path: string;
};

export const mfeConfig: MicroFrontendConfigType[] = [
  {
    path: "github-avatar",
    name: "github-avatar",
    host: "http://localhost:3001/src/GithubAvatar.js",
  },
  {
    path: "github-info",
    name: "github-info",
    host: "http://localhost:3002/src/GithubInfo.js",
  },
];
