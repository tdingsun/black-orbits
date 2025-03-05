<script lang="ts">
    import { getImgUrl } from "$lib/sanity";
	import BlockContent from "./BlockContent.svelte";
    let { portableText } = $props();
</script>

<img src={getImgUrl(portableText.value)} alt={portableText.value.alt ? portableText.value.alt : ''}/>
{#if portableText.value.caption}
    <BlockContent value={portableText.value.caption}></BlockContent>
{/if}
