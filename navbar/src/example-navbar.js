import singleSpaSvelte from "single-spa-svelte";
import Navbar from "./Navbar.svelte";

const svelteLifecycles = singleSpaSvelte({
  component: Navbar,
});

export const { bootstrap, mount, unmount } = svelteLifecycles;
