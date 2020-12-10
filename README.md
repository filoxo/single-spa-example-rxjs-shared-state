# single-spa example: Rxjs shared state

In this example, I hope to showcase how to use a utility module that shares application state across multiple single-spa applications and multiple frameworks.

This example consists of:

- root-config: shared HTML layout for microfrontends
- navbar: basic Svelte application with navigation responsibilities
- home: basic React application for logged-in users
- login: basic React application for logged-out users
- auth: utility module, using Rxjs and plain JavaScript

### Setup

> ⚠️ This project relies on [yarn](https://yarnpkg.com/) for start and build scripts. You may need to make changes to scripts/lerna.json to get it working with npm client.

- `git clone git@github.com:filoxo/single-spa-example-rxjs-shared-state.git`
- run `yarn bootstrap`

### Running locally

- run `yarn start`
  - root-config runs on port 9000
  - auth runs on port 9001
  - navbar runs on port 5000
  - home runs on port 5001
  - login runs on port 5002
- go to http://localhost:9000/
- celebrate good times 🎉

## Details

Live demo available at https://single-spa-example-rxjs-shared-state.netlify.app/login

### Login and guards

1. Log in using any credentials to show an error, as expected.

   - Also attempt going to [/home](http://localhost:9000/home) route directly. It will redirect you back to login since there is no valid user.

1. Log in using **exampleuser** with **examplepassword** as the password.<br/>Once logged in, you will be redirected to [/home](http://localhost:9000/home). If you try going back to [/login](http://localhost:9000/login) you'll no longer be able to and will be redirected back to home.

### Logout

Log out of the system using the "Logout" button in the navbar. Once again, after logging out, you will be redirected back to login.

## Additional notes

These are implemented within the same repo using lerna **for illustration purposes**. In an organizational setting, each of the modules should be in its own repo (though [a monorepo setup could still work with the right deployment setup](https://github.com/single-spa/single-spa.js.org/pull/329)).

### Utility module?

[Utility modules have lots of use cases](https://single-spa.js.org/docs/recommended-setup/#utility-modules-styleguide-api-etc), not just authentication, and are great for [sharing common logic](https://single-spa.js.org/docs/module-types/#utility-modules-share-common-logic) in one centralized place.

### Why Rxjs?

Preference. I think Rxjs is extremely powerful when leveraged correctly, even though it has a high learning curve. However using Rxjs is just [one of many options for sharing UI state](https://single-spa.js.org/docs/faq/#how-can-i-share-application-state-between-applications)

### Why wouldn't I do this for \*all\* of my applications' state?

By doing so, you introduce:

- tighter coupling between applications, which is a bad practice in a microservices environment
- potential for bugs (eg. two apps modifying the same state at the same time)
- potential performance issues due to re-renders of top-level components

See also ["How can I share application state between applications?"](https://single-spa.js.org/docs/faq/#how-can-i-share-application-state-between-applications) and ["Recommended Setup: UI State"](https://single-spa.js.org/docs/recommended-setup/#ui-state) on the single-spa documentation.

### Why not do the auth check inside of the root-config?

Definitely could be done! The implementation of _how auth happens_ is **not the focus** of this repo.

For an example of how to do that, check out the [`check-auth-in-root-config` branch](https://github.com/filoxo/single-spa-example-rxjs-shared-state/tree/check-auth-in-root-config).
