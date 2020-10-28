<script>
  import { onDestroy, onMount } from 'svelte';
  import { Router, Link, navigate } from 'svelte-routing';
  import { auth$ as auth, logout } from '@example/auth';

  let sub;
  onMount(() => {
    sub = auth.subscribe(({ sessionToken }) => {
      if (!sessionToken) navigate('/login');
    });
  });

  onDestroy(() => {
    sub.unsubscribe();
  });
</script>

<style>
  nav {
    background: crimson;
    color: white;
    padding: 1rem 2rem;
  }

  nav :global(a),
  nav .action {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 3px;
    color: white;
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    text-decoration: none;
  }

  nav .action:hover,
  nav .action:focus {
    background: rgba(0, 0, 0, 0.3);
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
    {#if $auth.sessionToken}
      <Link to="/home">Home</Link>
      <button
        class="action"
        type="button"
        on:click|once={logout}>Logout</button>
    {:else}
      <Link to="/login">Login</Link>
    {/if}
  </Router>
</nav>
