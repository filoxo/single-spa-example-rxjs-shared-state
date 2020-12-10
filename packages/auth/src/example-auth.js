import { BehaviorSubject } from "rxjs";

export const auth$ = new BehaviorSubject({
  sessionToken: localStorage.getItem("sessionToken"),
  error: false,
  pending: false,
});

// This promise represents a request being made to some backend to have the user validated and logged in
// but is mocked here for convenience. I don't want to have to setup a backend just for this example.
const GET_LOGGED_IN = (username, password) =>
  new Promise((resolve, reject) => {
    auth$.next({
      sessionToken: null,
      error: false,
      pending: true,
    });
    setTimeout(() => {
      if (username === "exampleuser" && password === "examplepassword") {
        const sessionToken = "abc123def456";
        localStorage.setItem("sessionToken", sessionToken);
        resolve({
          sessionToken,
          error: false,
          pending: false,
        });
      } else {
        // Why resolve when invalid? Because the "backend" provided a valid response
        resolve({
          sessionToken: null,
          error: "Invalid user or password",
          pending: false,
        });
      }
    }, 2500);
  });

export function login(username, password) {
  if (!auth$.value.pending) {
    GET_LOGGED_IN(username, password).then((user) => {
      auth$.next(user);
    });
  }
}

export function logout() {
  // Trigger side-effects
  localStorage.removeItem("sessionToken");
  auth$.next({
    sessionToken: null,
    error: false,
  });
}
