<script lang="ts">
    let { children } = $props();
</script>

<div class="font-mono text-sm tracking-tight">
    ↳ {@render children()}
</div>