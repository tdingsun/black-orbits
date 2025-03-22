<script lang="ts">
  import HotspotForm from './HotspotForm.svelte';

	import ColophonLink from './ColophonLink.svelte';

	import BlockContent from './BlockContent.svelte';
	import SignOut from './SignOut.svelte';
	import SiteTitle from './SiteTitle.svelte';
	import { client } from '$lib/sanity';
	import { photoState } from '$lib/states.svelte';
	let {
		showAllHotspots = $bindable(),
		photo,
		highlightHotspot,
		dehighlightHotspot,
		hotspotHover = $bindable()
	} = $props();
	let isInEssay = $derived(
		photo.collection.essay.filter((obj) => obj.slug && obj.slug.current === photo.slug.current)
	);
	const toggleAllHotspots = () => {
		showAllHotspots = !showAllHotspots;
	};

    let toggleForm = () => {
        photoState.showForm = !photoState.showForm
    }

</script>

<div
	class="border-primary-text relative flex h-dvh overflow-auto min-w-xs basis-1/4 flex-col justify-between border-r"
>
	<div class="p-4 pb-0 flex flex-col h-full ">
		<div class="border-primary-text flex justify-between border-b pb-4">
			<div class="flex flex-col gap-1">
				<SiteTitle></SiteTitle>
				<div class="text-sm">
					<ColophonLink></ColophonLink>
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<SignOut></SignOut>
			</div>
		</div>

		<div class="border-primary-text border-b py-2 text-sm">
			<div class="pb-8 ">
				This image is a part of <a
					class="font-bold hover:underline"
					href="/collection/{photo.collection.slug.current}">[{photo.collection.title}]</a
				>
				{#if isInEssay}
					and is referenced in the essay <a
						href="/essay/{photo.collection.slug.current}"
						class="font-bold hover:underline">[{photo.collection.essayTitle}]</a
					>
				{:else}
					.
				{/if}
			</div>
			<div class="flex flex-col gap-2 text-sm {photoState.showForm ? 'hidden' : ''}">
				<div class="flex gap-2">
					<div class="w-24 flex-shrink-0">title</div>
					<div>{photo.title}</div>
				</div>
				<div class="flex gap-2">
					<div class="w-24 flex-shrink-0">attribution</div>
					<div><BlockContent value={photo.attribution}></BlockContent></div>
				</div>
				<div class="flex gap-2">
					<div class="w-24 flex-shrink-0">year</div>
					<div>{photo.year}</div>
				</div>
				<div class="flex gap-2">
					<div class="w-24 flex-shrink-0">tags</div>
					<div class="flex gap-2">
						{#each photo.imgTags as tag}
							<div>{tag.value}</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="py-2 text-sm {photoState.showForm ? 'hidden' : ''}">
			<div class="mb-4 flex justify-between">
				<div>hotspots</div>
				<div class="cursor-pointer hover:font-bold" onclick={toggleAllHotspots}>
					{showAllHotspots ? '[hide]' : '[show]'}
				</div>
			</div>
			{#if photo.hotspots}
			{#each photo.hotspots.filter(hotspot => hotspot.isPublished) as hotspot, idx}
				{#if hotspot.isPublished}
				<div
					onmouseenter={() => highlightHotspot(idx)}
					onmouseleave={dehighlightHotspot}
					class="{showAllHotspots ? '' : 'hidden'} {idx + 1 === hotspotHover
						? 'opacity-100'
						: 'opacity-50'} pb-4"
				>
					<div class="font-bold">
						{idx + 1}. {hotspot.title}
					</div>
					<div>
						{hotspot.content}
					</div>
				</div>
				{/if}
			{/each}
			{/if}
			<div class="p-4 bottom-0 left-0 absolute">
				<button onclick={toggleForm} class="cursor-pointer border-primary-text border px-2 py-1 text-sm">Submit an observation</button>
			</div>
		</div>

		<div class=" flex-grow  {photoState.showForm ? 'pt-2 pb-4' : 'hidden h-0 overflow-hidden'}  text-sm w-full  bg-bg  border-primary-text">
			<HotspotForm {photo} id={photo._id}></HotspotForm>
		</div>
	</div>


	
</div>
