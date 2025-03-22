<script lang="ts">
	import type { PageData } from './$types';
	import { getImgUrl } from '$lib/sanity';
	import BlockContent from '$lib/components/BlockContent.svelte';
	import PhotoPageSidebar from '$lib/components/PhotoPageSidebar.svelte';
	import Caption from '$lib/components/Caption.svelte';
	import { photoState } from '$lib/states.svelte';
	import { preventDefault } from 'svelte/legacy';
	let { data }: { data: PageData } = $props();

	let currPhotoIdxInCollection = $derived(
		data.photo.collection.photos.findIndex(
			(photo) => photo.slug.current === data.photo.slug.current
		)
	);
	let numPhotosInCollection = $derived(data.photo.collection.photos.length);
	let nextPhotoSlug = $derived(
		data.photo.collection.photos[
			currPhotoIdxInCollection === numPhotosInCollection - 1 ? 0 : currPhotoIdxInCollection + 1
		].slug.current
	);
	let prevPhotoSlug = $derived(
		data.photo.collection.photos[
			currPhotoIdxInCollection === 0 ? numPhotosInCollection - 1 : currPhotoIdxInCollection - 1
		].slug.current
	);
	let hotspotHover = $state(0);
	let showAllHotspots = $state(true);

	let highlightHotspot = (hotspotID: number) => {
		hotspotHover = hotspotID + 1; //1 indexed, so 0 means no hover
	};

	let dehighlightHotspot = () => {
		hotspotHover = 0; //1 indexed, so 0 means no hover
	};

	let imgW = $state(1);
	let imgH = $state(1);
	let onImgClick = (e: MouseEvent) => {
		let xPercentage = Math.floor((e.offsetX / imgW) * 100);
		let yPercentage = Math.floor((e.offsetY / imgH) * 100);

		photoState.xPos = xPercentage;
		photoState.yPos = yPercentage;
	};
</script>

<div class="flex">
	<PhotoPageSidebar
		bind:showAllHotspots
		{dehighlightHotspot}
		{highlightHotspot}
		bind:hotspotHover
		photo={data.photo}
	></PhotoPageSidebar>
	<div class="flex h-dvh w-full flex-col justify-between p-4">
		<div class="mx-auto">
			<div class="relative">
				<img
					draggable="false"
					oncontextmenu={(e) => e.preventDefault()}
					bind:clientWidth={imgW}
					bind:clientHeight={imgH}
					onclick={(e) => onImgClick(e)}
					class="{photoState.showForm
						? 'cursor-pointer'
						: ''} mb-2 max-h-[calc(100dvh-8rem)] max-w-full"
					src={getImgUrl(data.photo.image)}
				/>
				{#if data.photo.hotspots}
					{#each data.photo.hotspots.filter((hotspot) => hotspot.isPublished) as hotspot, idx}
						<div
							onmouseenter={() => highlightHotspot(idx)}
							onmouseleave={dehighlightHotspot}
							style="top:{hotspot.yPos}%; left:{hotspot.xPos}%;"
							class="{showAllHotspots && !photoState.showForm ? '' : 'hidden'} {hotspotHover ===
							idx + 1
								? 'border-solid border-yellow-300 bg-bg blur-none'
								: hotspotHover === 0 ? 'bg-white blur-xs' : 'bg-transparent border-none'} border-bg absolute mt-[-5%] ml-[-5%] h-[10%] w-[10%] cursor-pointer rounded-full border mix-blend-overlay transition-colors"
						></div>
					{/each}
				{/if}
				{#if photoState.xPos > 0 && photoState.yPos > 0 && photoState.showForm}
					<div
						style="top:{photoState.yPos}%; left:{photoState.xPos}%;"
						class="{showAllHotspots
							? ''
							: 'hidden'} pointer-events-none absolute mt-[-5%] ml-[-5%] h-[10%] w-[10%] cursor-pointer rounded-full border border-solid border-red-500 bg-transparent mix-blend-overlay transition-colors"
					></div>
				{/if}
				<div></div>
			</div>
			<Caption>
				<BlockContent value={data.photo.caption}></BlockContent>
			</Caption>
		</div>
		<div class="flex justify-between text-sm">
			<a href="/photo/{prevPhotoSlug}">
				<div class="border-primary-text border px-2 py-1">prev photo</div>
			</a>
			<a href="/photo/{nextPhotoSlug}">
				<div class="border-primary-text border px-2 py-1">next photo</div>
			</a>
		</div>
	</div>
</div>
