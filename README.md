# Requirements:
* Node.js (v20 is recommended)
* npm (v10 is recommended)

## Installation:
* Clone the repository
* Run `npm install` in the root directory
* Run `npm run build` to build the project
* Run `npm start` to start the server (It will open 3 tabs in your browser, 2 micro-frontends and the container app on port 3000)

## Project structure:
* `packages/github-info` - Micro-frontend that shows the user's GitHub information and GitHub status
* `packages/placeholder-page` - Micro-frontend with placeholder content
* `packages/mfe-common` - Shared code between micro-frontends (Imports via importmap)
* `packages/shell` - Container app that loads the micro-frontends