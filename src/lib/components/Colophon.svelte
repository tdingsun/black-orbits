<script lang="ts">
	import BlockContent from "./BlockContent.svelte";
    let {colophon} = $props();
</script>

<div>
    <h1 class="text-xl mb-2">Colophon</h1>
    <BlockContent value={colophon.content}></BlockContent>
</div>