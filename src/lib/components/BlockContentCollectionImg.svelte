<script lang="ts">
    import { getImgUrl } from "$lib/sanity";
	import BlockContent from "$lib/components/BlockContent.svelte";
	import Caption from "$lib/components/Caption.svelte";
    import { page } from "$app/state";
	import PhotoDetailModal from "$lib/components/PhotoDetailModal.svelte";
    import { photoState, siteState } from "$lib/states.svelte";
    let { portableText } = $props();

    let isEssayPage = $derived(page.url.pathname.startsWith('/essay'));

    let modalVisible = $state(false);

    let hideModal = () => {
        modalVisible = false;
        siteState.modalIsVisible = false;
        photoState.showForm = false;

    }

    let showModal = () => {
        modalVisible = true
        siteState.modalIsVisible = true;
    }
</script>

<div class="{isEssayPage ? ' w-[468px] flex gap-2 border-t my-6' : 'pb-4'}  ">
    <!-- <a href="/photo/{portableText.value.slug.current}"> -->
    <img oncontextmenu={(e) => {e.preventDefault(); return false}} onclick={showModal}  class="{isEssayPage ? 'h-30 max-w-full' : ''}  hover:border-primary-text hover:border hover:border-t-0 cursor-pointer" src={getImgUrl(portableText.value.image)} alt={portableText.value.image.alt ? portableText.value.image.alt : ''}/>
    <!-- </a> -->
    {#if portableText.value.caption}
    <div class="">
        <Caption withArrow={!isEssayPage}>
            <BlockContent value={portableText.value.caption} ></BlockContent>
        </Caption>
    </div>

    {/if}
    
</div>

{#if modalVisible}
    <div onclick={hideModal} class="cursor-pointer z-9999 fixed w-dvw h-dvh p-16 top-0 left-0 backdrop-blur-md">
        <button onclick={hideModal} class=" cursor-pointer absolute top-15 right-8 hover:underline">[X]</button>
        <div onclick={(e) => e.stopImmediatePropagation()} class="cursor-default bg-bg border border-primary-text h-full">
            <PhotoDetailModal photo={portableText.value}></PhotoDetailModal>
        </div>
    </div>
{/if}
