<script>
  import '../app.css';
  let { children } = $props();
</script>

<nav>
  <a href="/" class="logo">crumberry</a>
  <div class="nav-links">
    <a href="/">home</a>
    <a href="/about">about</a>
  </div>
</nav>

<main>
  {@render children()}
</main>

<footer>crumberry &middot; 2026</footer>
