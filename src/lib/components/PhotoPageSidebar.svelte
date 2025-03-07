<script lang="ts">
	import ColophonLink from './ColophonLink.svelte';

	import { collectionState } from '$lib/states.svelte';
	import BlockContent from './BlockContent.svelte';
	import SignOut from './SignOut.svelte';
	import SiteTitle from './SiteTitle.svelte';
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

    let showForm = $state(false);

    let toggleForm = () => {
        showForm = !showForm
    }
</script>

<div
	class="border-primary-text relative flex h-dvh min-w-xs basis-1/4 flex-col justify-between border-r"
>
	<div class="p-4">
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
			<div class="pb-8">
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
			<div class="flex flex-col gap-2 text-sm">
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

		<div class="py-2 text-sm">
			<div class="mb-4 flex justify-between">
				<div>hotspots</div>
				<div class="cursor-pointer hover:font-bold" onclick={toggleAllHotspots}>
					{showAllHotspots ? '[hide]' : '[show]'}
				</div>
			</div>
			{#each photo.hotspots as hotspot, idx}
				<div
					onmouseenter={() => highlightHotspot(idx)}
					onmouseleave={dehighlightHotspot}
					class="{showAllHotspots ? '' : 'hidden'} {idx + 1 === hotspotHover
						? 'border-primary-text border'
						: ''}"
				>
					<div class="font-bold">
						{idx + 1}. {hotspot.title}
					</div>
					<div>
						<BlockContent value={hotspot.content}></BlockContent>
					</div>
				</div>
			{/each}
		</div>
	</div>

    <div class="p-4">
        <button onclick={toggleForm} class="cursor-pointer border-primary-text border px-2 py-1 text-sm">Submit an observation</button>
    </div>
	<div class="{showForm ? 'p-4' : 'h-0 overflow-hidden'} absolute bottom-0 w-full  bg-bg border-t border-primary-text">
		<div class="flex flex-col gap-2">
			<div>1. click image to select hotspot</div>
			<div class="border-primary-text my-2 h-24 w-24 border"></div>
			<div>2. add comment</div>
			<div>
				<textarea class="border-primary-text h-72 w-full border"></textarea>
			</div>
            <div class="flex gap-3 text-sm">
                <button class="cursor-pointer flex justify-center basis-1/2 border-primary-text border px-2 py-1 ">
                    submit
                </button>
                <button onclick={toggleForm} class="cursor-pointer flex justify-center basis-1/2 border-primary-text border px-2 py-1 ">
                    cancel
                </button>
            </div>
        
		</div>
	</div>
</div>
