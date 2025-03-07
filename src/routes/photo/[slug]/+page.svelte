<script lang="ts">
	import type { PageData } from './$types';
	import { getImgUrl } from '$lib/sanity';
	import BlockContent from '$lib/components/BlockContent.svelte';
	import PhotoPageSidebar from '$lib/components/PhotoPageSidebar.svelte';
	import Caption from '$lib/components/Caption.svelte';
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
    }

    let dehighlightHotspot = () => {
        hotspotHover = 0; //1 indexed, so 0 means no hover
    }
</script>

<div class="flex">
	<PhotoPageSidebar bind:showAllHotspots={showAllHotspots} {dehighlightHotspot} {highlightHotspot} bind:hotspotHover={hotspotHover} photo={data.photo}></PhotoPageSidebar>
	<div class="flex h-dvh flex-col justify-between p-4 w-full">
		<div class="mx-auto">
            <div class="relative">
                <img class="mb-2 max-w-full max-h-[calc(100dvh-8rem)]" src={getImgUrl(data.photo.image)} />
                {#each data.photo.hotspots as hotspot, idx}
                    <div onmouseenter={() => highlightHotspot(idx)} onmouseleave={dehighlightHotspot} style="top:{hotspot.yPos}%; left:{hotspot.xPos}%;" class="{showAllHotspots ? '' : 'hidden'} {hotspotHover === idx + 1 ? 'border-solid bg-transparent border-yellow-300 blur-none' : 'bg-bg blur-xs'} transition-colors cursor-pointer rounded-full w-20 h-20 border  border-bg  mix-blend-overlay absolute"></div>
                {/each}
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
