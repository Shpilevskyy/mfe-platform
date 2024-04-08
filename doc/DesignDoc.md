## Task
Build a micro-frontend platform

## Requirements
- **A menu**: with links to the different microfrontends (MFE) available
- **main area**: where the MFE renders to
- **Routing logic:** such that the MFE can be switched out without reloading.

## TODO
### Create at least two micro-frontends you can demonstrate switching between them.
### In assessing your design, we value approaches that are creative and useful.
### We do not expect you spend time on "busy work", for example, adding a few jest test-cases just because.
### Spend what ever amount of time you feel is appropriate to make a solution that you are proud of.
### Put thought into every line of code
### Minimalism is a good thing, especially in the context of an assignment such as this one.
### We encourage you to use the most bleeding edge functionality of the web platform (as long you tell us which browser to test in :)
### Feel free to try approaches which would be impractical in practice, but could be interesting from a theoretical perspective

## Problems to solve
### What if we completely forego build tooling?
- Only typescript compiler and a simple web server.

### Can we use ESM?
- Yes, we can use ESM to load the MFEs.

### Are there clever ways to test the shell itself?
- Mock the MFEs and test the functionality of shell with the mocked MFEs. (Routing, authentication, etc.
- We can use https://mswjs.io/ to mock requests.

### What can we do to test the MFE themselves?
- Each MFE is a standalone application, so we can test them separately.

### Are there up and coming options for build tooling that we can consider?
- https://single-spa.js.org/
- https://bit.dev/
- https://webpack.js.org/concepts/module-federation/
- ...

### Is a view library (e.g. React) really necessary?
- No, but each MFE could use its own view library.

### Could be Web components be applied?
- Yes

### Can we isolate the CSS of the different MFEs somehow?
### How to prevent CSS from leaking from one MFE to anotther?
Shadow DOM? CSS Modules? CSS-in-JS?


## Research

## How to Implement Micro-frontend Architecture?
iframe-based, web-component-based, Framework-based (Rect, Vue, etc.), Webpack Module Federation.

## Shell application
- Responsible for loading and orchestrating the MFEs. Shared data and state management (Custom events).

## How to integrate Micro Frontends?
- Build-Time integration (Old way ?)
- Run-Time integration
  - Server-Side Integration
  - Client-Side Integration (Current one, using ESM and importmap) https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap

## Possible issues
- Code duplication (Move shared code to a shared library)
- Shadow DOM: Functional tests selectors, css variables, etc. (Creating shadow DOM only at the micro frontend container level, not for each and every element)
