<script lang="ts">
	import { onMount } from 'svelte';
	import { photoState, siteState } from '$lib/states.svelte';
	import type { PageData } from './$types';
	import { getImgUrl } from '$lib/sanity';
	import BlockContent from '$lib/components/BlockContent.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
	import PhotoDetailModal from "$lib/components/PhotoDetailModal.svelte";

	let { data }: { data: PageData } = $props();

	let modalVisible = $state(false);
	let titleHeight = $state(0);

let hideModal = () => {
	modalVisible = false;
	photoState.showForm = false;
	siteState.modalIsVisible = false;
}

let showModal = () => {
	modalVisible = true
	siteState.modalIsVisible = true;
}

	const transformScroll = (e: any) => {
		e.preventDefault();

		if (!e.deltaY) {
			return;
		}
		window.scrollBy((e.deltaX + e.deltaY), 0);
	};
	onMount(() => {
        document.onwheel = transformScroll

	});


    let headerHeight = $state(0);
</script>

<div class="w-full">
    <div class="fixed left-0 top-0">
        <NavHeader bind:headerHeight={headerHeight} isContentPage={true}></NavHeader>

    </div>

<div style="margin-top:{headerHeight}px; " class="{headerHeight === 0 ? 'hidden' : 'flex'} font-work">
	<div  class="flex">
		<div style="height:calc(100dvh - {headerHeight}px);" class="w-[500px] min-w-[500px] text-4xl flex flex-col p-4">
			<div bind:clientHeight={titleHeight}>
				<div>
					{data.collection.essayTitle}
				</div>
				<div class="italic mb-4">by {data.collection.essayAuthor}</div>
			
			</div>
				<img
			onclick={showModal}
			style="max-height:calc(100dvh - {headerHeight}px - {titleHeight}px - 2.5rem );"
			class="hover:cursor-pointer hover:border border-primary-text rounded-sm max-w-full mr-auto"
			src={getImgUrl(data.collection.essayCoverImgObj.image)}
			alt={data.collection.essayCoverImgObj.alt ? data.collection.essayCoverImgObj.alt : ''}
		/>
	
		</div>
		<div class="w-[500px] min-w-[500px] border-r py-4 px-8 ">
			<div class="font-mono text-xs top-1 relative">
				<BlockContent value={data.collection.essayDek}></BlockContent>
			</div>
		</div>
	</div>
	

	<div class="essayTextContainer relative w-[550px] min-w-[550px] [column-gap:4rem] [column-width:500px]  pt-4 pl-16 h-dvh max-h-[calc(100dvh-10rem)]">
			<BlockContent value={data.collection.essay}></BlockContent>
			<div class="h-[50dvw]"></div>
	</div>
</div>
</div>

{#if modalVisible}
    <div onclick={hideModal} class="cursor-pointer z-9999 fixed w-dvw h-dvh p-16 top-0 left-0 backdrop-blur-md">
        <button onclick={hideModal} class=" cursor-pointer absolute top-15 right-8 hover:underline">[X]</button>
        <div onclick={(e) => e.stopImmediatePropagation()} class="cursor-default bg-bg border border-primary-text h-full">
            <PhotoDetailModal photo={data.collection.essayCoverImgObj}></PhotoDetailModal>
        </div>
    </div>
{/if}