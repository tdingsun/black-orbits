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
				<div class="relative top-1 font-mono text-xs">
					<BlockContent value={data.collection.essayDek}></BlockContent>
				</div>
			</div>
		</div>

		<div
			class="essayTextContainer relative sm:h-dvh sm:max-h-[calc(100dvh-10rem)] sm:w-[550px] sm:min-w-[550px] sm:[column-gap:4rem] pt-4 px-4 sm:pl-16 sm:[column-width:500px]"
		>
			<BlockContent value={data.collection.essay}></BlockContent>
			<div class="h-[50dvw]"></div>
		</div>
	</div>
</div>

{#if modalVisible}
	<div
		onclick={hideModal}
		class="fixed top-0 left-0 z-9999 h-dvh w-dvw cursor-pointer p-16 backdrop-blur-md"
	>
		<button onclick={hideModal} class=" absolute top-15 right-8 cursor-pointer hover:underline"
			>[X]</button
		>
		<div
			onclick={(e) => e.stopImmediatePropagation()}
			class="bg-bg border-primary-text h-full cursor-default border"
		>
			<PhotoDetailModal photo={data.collection.essayCoverImgObj}></PhotoDetailModal>
		</div>
	</div>
{/if}
