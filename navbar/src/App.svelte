<script>
  import { Router, Link } from 'svelte-routing';
</script>

<style>
  nav {
    background: crimson;
    color: white;
    padding: 1rem 2rem;
  }

  nav :global(a) {
    border: 1px solid transparent;
    border-radius: 3px;
    color: white;
    padding: 0.25rem 0.5rem;
    text-decoration: none;
  }

  nav :global(a:focus),
  nav :global(a:hover) {
    text-decoration: underline;
  }
  nav :global(a[aria-current]) {
    border-color: white;
  }
</style>

<nav>
  <Router>
    <Link to="/home">Home</Link>
    <Link to="/login">Login</Link>
  </Router>
</nav>
