<script lang="ts">
    let { children } = $props()
</script>

<div class="border border-primary-text text-xs hover:bg-primary-text hover:text-bg cursor-pointer py-1 px-2 text-center min-w-12 transition-colors rounded-xs">
    {@render children()}
</div>