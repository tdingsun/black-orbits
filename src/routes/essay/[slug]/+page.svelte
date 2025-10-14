<script lang="ts">
	import { onMount } from 'svelte';
	import { photoState, siteState } from '$lib/states.svelte';
	import type { PageData } from './$types';
	import { getImgUrl } from '$lib/sanity';
	import BlockContent from '$lib/components/BlockContent.svelte';
	import PhotoDetailModal from '$lib/components/PhotoDetailModal.svelte';
	import ContentPageNavHeader from '$lib/components/ContentPageNavHeader.svelte';

	let { data }: { data: PageData } = $props();

	let modalVisible = $state(false);
	let titleHeight = $state(0);

	let hideModal = () => {
		modalVisible = false;
		photoState.showForm = false;
		siteState.modalIsVisible = false;
	};

	let showModal = () => {
		modalVisible = true;
		siteState.modalIsVisible = true;
	};

	const transformScroll = (e: any) => {
		e.preventDefault();

		if (!e.deltaY) {
			return;
		}
		window.scrollBy(e.deltaX + e.deltaY, 0);
	};
	onMount(() => {
		document.onwheel = transformScroll;
	});

	let headerHeight = $state(0);
</script>

<div class="w-dvw sm:w-full">
	<div class="fixed top-0 left-0 z-10">
		<ContentPageNavHeader bind:headerHeight isContentPage={true}></ContentPageNavHeader>
	</div>

	<div
		style="margin-top:{headerHeight}px; "
		class="{headerHeight === 0 ? 'hidden' : 'flex flex-col sm:flex-row'} font-work"
	>
		<div class="flex flex-col sm:flex-row">
			<!-- desktop -->
			<div
				style="height:calc(100dvh - {headerHeight}px);"
				class="hidden sm:flex sm:w-[500px] sm:min-w-[500px] flex-col p-4 text-4xl"
			>
				<div bind:clientHeight={titleHeight}>
					<div>
						{data.collection.essayTitle}
					</div>
					<div class="mb-4 italic">by {data.collection.essayAuthor}</div>
				</div>
				<img
					onclick={showModal}
					style="max-height:calc(100dvh - {headerHeight}px - {titleHeight}px - 2.5rem );"
					class="border-primary-text mr-auto max-w-full rounded-xs hover:cursor-pointer hover:border"
					src={getImgUrl(data.collection.essayCoverImgObj.image)}
					alt={data.collection.essayCoverImgObj.alt ? data.collection.essayCoverImgObj.alt : ''}
				/>
			</div>

			<!-- mobile -->
			<div
			class="flex sm:hidden sm:w-[500px] sm:min-w-[500px] flex-col p-4 text-4xl"
		>
			<div bind:clientHeight={titleHeight}>
				<div>
					{data.collection.essayTitle}
				</div>
				<div class="mb-4 italic">by {data.collection.essayAuthor}</div>
			</div>
			<img
				onclick={showModal}
				style="max-height:calc(100dvh - {headerHeight}px - {titleHeight}px - 2.5rem );"
				class="border-primary-text mr-auto max-w-full rounded-xs hover:cursor-pointer hover:border"
				src={getImgUrl(data.collection.essayCoverImgObj.image)}
				alt={data.collection.essayCoverImgObj.alt ? data.collection.essayCoverImgObj.alt : ''}
			/>
		</div>

			<div class="sm:w-[500px] sm:min-w-[500px] border-r px-4 pb-16  sm:px-8 sm:py-4">
				<div class="relative top-1 font-mono text-sm leading-[1.5]">
					<BlockContent value={data.collection.essayDek}></BlockContent>
				</div>
			</div>
		</div>

		<div
			class=" relative sm:h-dvh sm:max-h-[calc(100dvh-8rem)] sm:w-[550px] sm:min-w-[550px] sm:[column-gap:2rem] sm:[column-rule:1px_dotted_#483c32]    pt-4 px-4 sm:pl-4 sm:[column-width:500px]"
		>
			<div class="sm:pr-16">
			<BlockContent value={data.collection.essay}></BlockContent>

			</div>
			<div class="h-[50dvw]"></div>
		</div>
	</div>
</div>



	    <div onclick={hideModal} class="photoDetailModalContainer cursor-pointer z-9999 fixed w-dvw h-dvh p-4 pt-8 pr-8 md:p-16 lg:px-32 xl:px-48 top-0 left-0 backdrop-blur-md transition-opacity  {modalVisible ? 'opacity-100 pointer-events-auto block' : 'opacity-0 pointer-events-none hidden '}">
        <div onclick={(e) => e.stopImmediatePropagation()} class="cursor-default bg-bg border border-primary-text h-full max-w-6xl relative rounded-xs">
            <button onclick={hideModal} class=" cursor-pointer absolute w-8 h-8 rounded-xs -top-4 -right-4 border border-primary-text bg-bg hover:bg-primary-text hover:text-bg transition-colors">✕</button>

            <PhotoDetailModal photo={data.collection.essayCoverImgObj}></PhotoDetailModal>
        </div>
    </div>
