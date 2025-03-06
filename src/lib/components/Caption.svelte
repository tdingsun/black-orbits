<script lang="ts">
    let { children } = $props();
</script>

<div class="pt-1 font-mono text-sm tracking-tight flex gap-2">
    ↳ {@render children()}
</div>