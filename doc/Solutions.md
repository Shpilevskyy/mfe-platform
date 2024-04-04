## Project structure

Project is a monorepo with the following core packages:

- shell - The shell application that loads the MFEs and orchestrating the communication between them.
- common - Shared code between the MFEs. (components, themes, etc.)
- state - Shared state management between the MFEs. (To be able to know types of the shared state)

Monorepo can simplify onboarding of a new MFE as they can start integration with the shell and the shared code right away.
After stabilisation of the MFE, it can be moved to its own repository.

## Routing

How can routing be done both inside and outside?

- Inside the shell: The shell can use a router to navigate between the MFEs.
-
