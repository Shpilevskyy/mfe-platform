export type MicroFrontendConfigType = {
  name: string;
  host: string;
  path: string;
};

export const mfeConfig: MicroFrontendConfigType[] = [
  {
    path: "home-assignment",
    name: "home-assignment",
    host: "http://localhost:3001/src/HomeAssignment.js",
  },
  {
    path: "github-info",
    name: "github-info",
    host: "http://localhost:3002/src/GithubInfo.js",
  },
];
