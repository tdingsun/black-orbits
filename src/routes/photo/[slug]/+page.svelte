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
</script>

<div class="flex">
	<PhotoPageSidebar photo={data.photo}></PhotoPageSidebar>
	<div class="flex h-dvh flex-col justify-between p-4">
		<div>
			<img class="mb-2" src={getImgUrl(data.photo.image)} />
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
