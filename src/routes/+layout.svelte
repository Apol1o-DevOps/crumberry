<script>
  import '../app.css';
  let { children } = $props();
</script>

<div class="glow" aria-hidden="true"><span></span><span></span></div>

<div class="container">
  <i class="tick tl" aria-hidden="true"></i>
  <i class="tick tr" aria-hidden="true"></i>
  <i class="tick bl" aria-hidden="true"></i>
  <i class="tick br" aria-hidden="true"></i>

  <header class="statusbar">
    <span class="prompt">crumberry<span class="at">@</span>lab:~$<span class="cursor" aria-hidden="true"></span></span>
    <span class="state"><i class="live" aria-hidden="true"></i>signal steady</span>
  </header>

  {@render children()}
</div>
