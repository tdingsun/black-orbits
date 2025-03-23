<script lang="ts">
    let { children, withArrow=true } = $props();
</script>

<div class="pt-1 font-mono text-xs tracking-tight flex gap-2">
    {#if withArrow}
    <span>↳</span>
    {/if}
    <div>
        {@render children()}
    </div>
</div>