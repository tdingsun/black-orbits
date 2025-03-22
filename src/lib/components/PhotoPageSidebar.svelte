<script lang="ts">
	import StyledButton from './StyledButton.svelte';
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
			.length
	);
	let isInInterview = $derived(
		photo.collection.interview.filter((obj) => obj.slug && obj.slug.current === photo.slug.current)
			.length
	);

	const toggleAllHotspots = () => {
		showAllHotspots = !showAllHotspots;
	};

	let toggleForm = () => {
		photoState.showForm = !photoState.showForm;
	};
</script>

<div
	class="border-primary-text relative flex h-dvh min-w-xs basis-1/4 flex-col justify-between overflow-auto border-r"
>
	<div class="flex h-full flex-col p-4 pb-0">
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

		<div class="border-primary-text border-b py-2 text-sm {photoState.showForm ? 'flex-grow' : ''}">
			<div class="pb-4">
				<span>This image is a part of</span>
				 <a
					class="font-bold hover:underline"
					href="/collection/{photo.collection.slug.current}">[{photo.collection.title}]
				</a>{#if isInEssay || isInInterview}
					{` and is referenced in`}
				{/if}{#if isInEssay}
					{` the essay `}
					<a
						href="/essay/{photo.collection.slug.current}"
						class="font-bold hover:underline">[{photo.collection.essayTitle}]
					</a>
					<span>
						by {photo.collection.essayAuthor}{#if isInInterview}, and{/if}
					</span>
				{/if}{#if isInInterview}
					{` the interview `}<a
						href="/interview/{photo.collection.slug.current}"
						class="font-bold hover:underline">[{photo.collection.interviewTitle}]</a
					>
					by {photo.collection.interviewAuthor}
				{/if}.
			</div>
			<div class="flex flex-col gap-2 text-xs {photoState.showForm ? 'hidden' : ''}">
				<div class="flex gap-2">
					<div class="w-24 flex-shrink-0">title</div>
					<div>{photo.title}</div>
				</div>
				<div class="flex gap-2">
					<div class="w-24 flex-shrink-0">attribution</div>
					<div><BlockContent value={photo.attribution}></BlockContent></div>
				</div>
				<div class="flex gap-2">
					<div class="w-24 flex-shrink-0">size</div>
					<div>{photo.size}</div>
				</div>
				<div class="flex gap-2">
					<div class="w-24 flex-shrink-0">year</div>
					<div class="flex gap-2">
						{#each photo.time as tag}
							<div>{tag.value}</div>
						{/each}
					</div>
				</div>
				<div class="flex gap-2">
					<div class="w-24 flex-shrink-0">color</div>
					<div class="flex gap-2">
						{#each photo.color as tag}
							<div>{tag.value}</div>
						{/each}
					</div>
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
			{#if photo.hotspots && photo.hotspots.filter((hotspot) => hotspot.isPublished).length > 0}
				<div class="mb-4 flex justify-between">
					<div>hotspots</div>
					<button onclick={toggleAllHotspots}>
						<StyledButton>
							{showAllHotspots ? 'hide' : 'show'}

						</StyledButton>
					</button>
				</div>
			{/if}
			
			{#if photo.hotspots}
				<div class="{showAllHotspots ? '' : 'hidden'}">
					{#each photo.hotspots.filter((hotspot) => hotspot.isPublished) as hotspot, idx}
					{#if hotspot.isPublished}
						<div
							onmouseenter={() => highlightHotspot(idx)}
							onmouseleave={dehighlightHotspot}
							class="  pb-4 relative"
						>
							<div class="relative flex gap-3">
								<div class="{idx + 1 === hotspotHover
								? 'text-bg bg-primary-text'
								: ''} border-primary-text transition-colors rounded-full border  w-8 h-8 flex justify-center items-center">
									{idx + 1}
								</div>
								<div class="-top-0.5 relative">
									<div class="font-bold">
										{hotspot.title}
									</div>
									<div>
										{hotspot.content}
									</div>
								</div>
								
							</div>
							
						</div>
					{/if}
				{/each}
				</div>
				
			{/if}
			<div class="absolute bottom-0 left-0 p-4">
				<button
					onclick={toggleForm}>
					<StyledButton>
						Submit an Observation
					</StyledButton>
					</button>
			</div>
		</div>

		<div
			class=" {photoState.showForm
				? 'pt-2 pb-4'
				: 'hidden h-0 overflow-hidden'}  bg-bg border-primary-text w-full text-sm"
		>
			{#if photoState.showFormError}
				<div class="flex h-full items-center justify-center p-4 text-center">
					Sorry, something went wrong with form submission. Please try again later.
				</div>
			{:else if photoState.formSubmitted}
				<div class="flex h-full items-center justify-center p-4 text-center">
					Thank you for submitting!<br /><br />Your observation will be added to the photo upon
					review.
				</div>
			{:else}
				<HotspotForm {photo} id={photo._id}></HotspotForm>
			{/if}
		</div>
	</div>
</div>
