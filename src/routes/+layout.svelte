<script>
  import '../app.css';
  let { children } = $props();
</script>

<div class="frame" aria-hidden="true"><i></i><i></i><i></i><i></i></div>

<div class="shell">
  <header class="bar bar--top">
    <span class="brand">crumberry</span>
    <span><i class="live"></i>signal steady</span>
  </header>

  <main>
    {@render children()}
  </main>

  <footer class="bar bar--bottom">
    <span>no scripts &middot; no trackers &middot; no cookies</span>
    <span>mmxxvi</span>
  </footer>
</div>
