<script lang="ts">
	import BlockContent from "./BlockContent.svelte";
    let {colophon, children = undefined} = $props();
</script>

<div>
    {#if children}
        {@render children()}
    {/if}
    <BlockContent value={colophon.content}></BlockContent>
</div>