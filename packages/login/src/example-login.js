import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import styles from "./login.lazy.css";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap } = lifecycles;

export const mount = [
  lifecycles.mount,
  () => {
    styles.use();
    return Promise.resolve();
  },
];

export const unmount = [
  lifecycles.unmount,
  () => {
    styles.unuse();
    return Promise.resolve();
  },
];
