<script>
  import { logout } from '@example/auth';
</script>

<style>
  nav {
    background: crimson;
    color: white;
    padding: 1rem 2rem;
    text-align: right;
  }

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
</style>

<nav>
  <span>Welcome!</span>
  <button class="action" type="button" on:click|once={logout}>Logout</button>
</nav>
