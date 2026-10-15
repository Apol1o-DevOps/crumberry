<script>
  import '../app.css';
  let { children } = $props();
</script>

<div class="glow" aria-hidden="true"><span></span><span></span></div>
<div class="ticks" aria-hidden="true"><i></i><i></i><i></i><i></i></div>

<div class="wrap">
  <div class="col">
    {@render children()}
  </div>
</div>
