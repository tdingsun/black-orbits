<script lang="ts">
    let { children } = $props();
</script>

<div class="font-mono text-sm tracking-tight flex gap-2">
    ↳ {@render children()}
</div>