<script lang="ts">
	import StyledButton from './StyledButton.svelte';
	import HotspotForm from './HotspotForm.svelte';
	import BlockContent from './BlockContent.svelte';
	import SignOut from './SignOut.svelte';
	import SiteTitle from './SiteTitle.svelte';
	import {
		photoState,
		dehighlightHotspot,
		highlightHotspot,
		toggleForm,
		toggleHotspots
	} from '$lib/states.svelte';

	let { photo, isModal = false } = $props();

	let currPhotoIdxInCollection = $derived(
		photo.collectionInfo.photos.findIndex(
			(currPhoto) => currPhoto.slug.current === photo.slug.current
		)
	);
	let numPhotosInCollection = $derived(photo.collectionInfo.photos.length);

	let isInEssay = $derived(
		photo.collectionInfo.essay.filter((obj) => obj.slug && obj.slug.current === photo.slug.current)
			.length
	);
	let isInInterview = $derived(
		photo.collectionInfo.interview.filter(
			(obj) => obj.slug && obj.slug.current === photo.slug.current
		).length
	);
	let nextPhotoSlug = $derived(
		photo.collectionInfo.photos[
			currPhotoIdxInCollection === numPhotosInCollection - 1 ? 0 : currPhotoIdxInCollection + 1
		].slug.current
	);
	let prevPhotoSlug = $derived(
		photo.collectionInfo.photos[
			currPhotoIdxInCollection === 0 ? numPhotosInCollection - 1 : currPhotoIdxInCollection - 1
		].slug.current
	);
</script>

<div
	class="border-primary-text relative flex h-full min-w-xs basis-1/4 flex-col justify-between overflow-auto border-r"
>
	<div class="flex h-full flex-col pb-0">
		<div class="border-primary-text flex justify-between p-4 {isModal ? 'hidden' : ''}">
			<div class="flex flex-col gap-1">
				<SiteTitle></SiteTitle>
				<!-- <div class="text-sm">
					<ColophonLink></ColophonLink>
				</div> -->
			</div>
			<div class="flex flex-col gap-2">
				<SignOut></SignOut>
			</div>
		</div>

		<div class="border-primary-text p-4 text-sm {photoState.showForm ? 'flex-grow' : ''}">
			<div class="pb-4">
				<span>This image is a part of</span>
				<a class="font-bold hover:underline" href="/collection/{photo.collectionInfo.slug.current}"
					>[{photo.collectionInfo.title}]
				</a>{#if isInEssay || isInInterview}
					{` and is referenced in`}
				{/if}{#if isInEssay}
					{` the essay `}
					<a href="/essay/{photo.collectionInfo.slug.current}" class="font-bold hover:underline"
						>[{photo.collectionInfo.essayTitle}]
					</a>
					<span>
						by {photo.collectionInfo.essayAuthor}{#if isInInterview}, and{/if}
					</span>
				{/if}{#if isInInterview}
					{` the interview `}<a
						href="/interview/{photo.collectionInfo.slug.current}"
						class="font-bold hover:underline">[{photo.collectionInfo.interviewTitle}]</a
					>
					by {photo.collectionInfo.interviewAuthor}
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

		<div class="text-sm {photoState.showForm ? 'hidden' : ''} flex flex-grow flex-col">
			{#if photo.hotspots && photo.hotspots.filter((hotspot) => hotspot.isPublished).length > 0}
				<div
					class="mb-14 h-0 flex-grow overflow-scroll border-y p-4 pb-0"
				>
					<div class=" flex justify-between pb-4">
						<div>Observations</div>
						<button onclick={toggleHotspots}>
							<StyledButton>
								{photoState.showAllHotspots ? 'hide' : 'show'}
							</StyledButton>
						</button>
					</div>

					<div class="{photoState.showAllHotspots
						? ''
						: 'hidden'} ">
{#each photo.hotspots.filter((hotspot) => hotspot.isPublished) as hotspot, idx}
{#if hotspot.isPublished}
	<div
		onmouseenter={() => highlightHotspot(idx)}
		onmouseleave={dehighlightHotspot}
		class="relative pb-8"
		role="presentation"
	>
		<div class="relative flex gap-3">
			<div
				class="{idx + 1 === photoState.hotspotHover
					? 'text-bg bg-primary-text'
					: ''} border-primary-text flex h-6 w-6 items-center justify-center rounded-full border text-xs transition-colors"
			>
				{idx + 1}
			</div>
			<div class="relative -top-0.5">
				<div class="font-bold">
					{hotspot.title}
				</div>
				<div class="text-xs">
					Submitted by {hotspot.attribution ? hotspot.attribution : 'anonymous'}
				</div>
				<div class="mt-2">
					{hotspot.content}
				</div>
			</div>
		</div>
	</div>
{/if}
{/each}
					</div>

					
				</div>
			{/if}
			<div class="absolute bottom-0 left-0 flex w-full justify-between p-4">
				{#if !isModal}
					<a href="/photo/{prevPhotoSlug}">
						<StyledButton>prev</StyledButton>
					</a>
				{/if}
				
				<button onclick={(e) => toggleForm(e)}>
					<StyledButton>Submit an Observation</StyledButton>
				</button>
				{#if !isModal}
				<a href="/photo/{nextPhotoSlug}">
					<StyledButton>next</StyledButton>
				</a>
				{/if}
			</div>
		</div>

		<div
			class=" {photoState.showForm
				? 'p-4 border-t'
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
