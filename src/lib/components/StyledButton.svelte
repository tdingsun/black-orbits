<script lang="ts">
    let { children, onclick = undefined, class: className = "" } = $props()
</script>

<button {onclick} class="border border-primary-text text-sm hover:bg-primary-text hover:text-bg cursor-pointer py-1 px-2 text-center min-w-12 transition-colors rounded-xs whitespace-nowrap {className}">
    {@render children()}
</button>