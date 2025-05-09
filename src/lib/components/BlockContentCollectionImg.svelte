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

<div class="{isEssayPage ? ' w-full sm:flex gap-2 sm:border-t my-6' : 'pb-4'}  ">
    <!-- <a href="/photo/{portableText.value.slug.current}"> -->
    <img oncontextmenu={(e) => {e.preventDefault(); return false}} onclick={showModal}  class="{isEssayPage ? 'sm:h-30 max-w-full rounded-xs sm:rounded-none sm:hover:border-t-0' : 'rounded-xs hover:border'}  hover:border-primary-text hover:border  cursor-pointer" src={getImgUrl(portableText.value.image)} alt={portableText.value.image.alt ? portableText.value.image.alt : ''}/>
    <!-- </a> -->
    {#if portableText.value.caption}
    <div class="">
        <Caption withArrow={!isEssayPage}>
            <BlockContent value={portableText.value.caption} ></BlockContent>
        </Caption>
    </div>

    {/if}
    
</div>

<!-- {#if modalVisible} -->
    <div onclick={hideModal} class="photoDetailModalContainer cursor-pointer z-9999 fixed w-dvw h-dvh p-8 md:p-16 lg:px-32 xl:px-48 top-0 left-0 backdrop-blur-md transition-discrete transition-all  {modalVisible ? 'opacity-100 pointer-events-auto block' : 'opacity-0 pointer-events-none hidden '}">
        <div onclick={(e) => e.stopImmediatePropagation()} class="cursor-default bg-bg border border-primary-text h-full relative">
            <button onclick={hideModal} class=" cursor-pointer absolute w-8 h-8 -top-4 -right-4 border border-primary-text bg-bg hover:bg-primary-text hover:text-bg transition-colors">[X]</button>

            <PhotoDetailModal photo={portableText.value}></PhotoDetailModal>
        </div>
    </div>
<!-- {/if} -->
