# single-spa example: Rxjs shared state

This example consists of:

- root-config: setup of infra for microfrontends
- navbar: basic Svelte application with navigation responsibilities
- home: basic React application for logged-in users
- login: basic React application for logged-out users
- auth: uility module, using Rxjs

### Setup

- `git clone git@github.com:filoxo/single-spa-example-rxjs-shared-state.git`
- run `yarn setup`

### Running

- run `yarn start`
  - root-config runs on port 9000
  - auth runs on port 9001
  - navbar runs on port 5000
  - home runs on port 5001
  - login runs on port 5002
- go to http://localhost:9000/
- celebrate good times 🎉

## Additional notes

- These are implemented within the same repo **for illustration purposes**. In an organizational setting, each of the modules should be in its own repo.
