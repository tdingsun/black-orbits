<script lang="ts">
    import { getImgUrl } from "$lib/sanity";
	import BlockContent from "./BlockContent.svelte";
	import Caption from "./Caption.svelte";
    let { portableText } = $props();
    console.log(portableText);

</script>

<div class="pb-4">
    <img src={getImgUrl(portableText.value.image)} alt={portableText.value.image.alt ? portableText.value.image.alt : ''}/>
    {#if portableText.value.caption}
    <Caption>
        <BlockContent value={portableText.value.caption}></BlockContent>
    
    </Caption>
    {/if}
    
</div>
