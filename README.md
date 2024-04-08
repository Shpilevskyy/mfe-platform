# Requirements:
* Node.js (v20 is recommended)
* npm (v10 is recommended)

## Installation:
* Clone the repository
* Run `npm install` in the root directory
* Run `npm run prepare` to build the mfe-common package, as other packages depend on it
* Run `npm run build` to build the project
* Run `npm start` to start the server. It will open 3 tabs in your browser:
  * `http://localhost:3000` - Shell app
  * `http://localhost:3001` - Placeholder micro-frontend
  * `http://localhost:3002` - GitHub info micro-frontend
  * `http://localhost:3003` - mfe-common package

## Project structure:
* `packages/github-info` - Micro-frontend that shows the user's GitHub information and GitHub status
* `packages/placeholder-page` - Micro-frontend with placeholder content
* `packages/mfe-common` - Shared code between micro-frontends (Imports via importmap)
* `packages/shell` - Container app that loads the micro-frontends