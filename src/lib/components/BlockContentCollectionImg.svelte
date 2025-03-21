<script lang="ts">
    import { getImgUrl } from "$lib/sanity";
	import BlockContent from "./BlockContent.svelte";
	import Caption from "./Caption.svelte";
    import { page } from "$app/state";
    let { portableText } = $props();

    let isEssayPage = $derived(page.url.pathname.startsWith('/essay'));
    console.log(portableText);
</script>

<div class="{isEssayPage ? 'absolute  bottom-0' : ''} pb-6 ">
    <a href="/photo/{portableText.value.slug.current}">
        <img class="{isEssayPage ? 'max-h-30' : ''}  hover:border-primary-text hover:border" src={getImgUrl(portableText.value.image)} alt={portableText.value.image.alt ? portableText.value.image.alt : ''}/>
    </a>
    {#if portableText.value.caption}
    <Caption>
        <BlockContent value={portableText.value.caption}></BlockContent>
    </Caption>
    {/if}
    
</div>
