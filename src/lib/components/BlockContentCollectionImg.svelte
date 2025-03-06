<script lang="ts">
    import { getImgUrl } from "$lib/sanity";
	import BlockContent from "./BlockContent.svelte";
	import Caption from "./Caption.svelte";
    let { portableText } = $props();
    console.log(portableText);

</script>

<div class="pb-6 absolute bottom-0">
    <a href="/photo/{portableText.value.slug.current}">
        <img class="max-h-30 hover:border-primary-text hover:border" src={getImgUrl(portableText.value.image)} alt={portableText.value.image.alt ? portableText.value.image.alt : ''}/>
    </a>
    {#if portableText.value.caption}
    <Caption>
        <BlockContent value={portableText.value.caption}></BlockContent>
    </Caption>
    {/if}
    
</div>
