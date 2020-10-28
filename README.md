# single-spa example: Rxjs shared state

This example consists of:

- root-config: shared HTML layout for microfrontends
- navbar: basic Svelte application with navigation responsibilities
- home: basic React application for logged-in users
- login: basic React application for logged-out users
- auth: uility module, using Rxjs and plain JavaScript

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

## Notes

In this example, I hope to showcase how to use a utility module that shares application state across multiple single-spa applications and multiple frameworks.

### Login and guards

After running, you'll see a login page. It simulates a request to log a user into the system. For demo purposes, try the following:

- log in using any dummy credentials. An error will be displayed to give the user feedback.
- going to the [/home](http://localhost:9000/home) route. It will redirect you back to login since there is no valid user.

### With current session

Log in using **exampleuser** with **examplepassword** as the password. Once logged in, you will be redirected to [/home](http://localhost:9000/home). If you try going back to [/login](http://localhost:9000/login) you'll no longer be able to and will be redirected back to home.

### Logout

Log out of the system using the "Logout" button in the navbar. Once again, after logging out, you will be redirected back to login.

## Additional notes

- These are implemented within the same repo **for illustration purposes**. In an organizational setting, each of the modules should be in its own repo.
- Utility modules are great for [sharing common logic](https://single-spa.js.org/docs/module-types/#utility-modules-share-common-logic) in one centralized place
- [Utility modules have lots of usecases, not just authentication](https://single-spa.js.org/docs/recommended-setup/#utility-modules-styleguide-api-etc)
- Using Rxjs is just [one of many options for sharing UI state](https://single-spa.js.org/docs/recommended-setup/#ui-state)
- Rxjs has a high learning curve, but is extremely powerful when used correctly
