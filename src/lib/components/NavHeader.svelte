<script lang="ts">
	import SignOut from './SignOut.svelte';
	import SiteTitle from './SiteTitle.svelte';
	import CollectionTitle from './CollectionTitle.svelte';
	import CollectionDek from './CollectionDek.svelte';
	import EssayLink from './EssayLink.svelte';
	import InterviewLink from './InterviewLink.svelte';
	import { collectionState } from '$lib/states.svelte';
	import ColophonLink from './ColophonLink.svelte';
	import StyledButton from './StyledButton.svelte';
	let {
		headerHeight = $bindable(),
		isContentPage = false,
		isColophonPage = false,
		backLink = undefined
	} = $props();
</script>

<div
	bind:clientHeight={headerHeight}
	class="z-9999 border-primary-text bg-bg sticky top-0 flex w-dvw items-start justify-between gap-8 border-b p-4 pb-3"
>
	<div class="w-[100px] self-stretch flex  {isContentPage ? 'flex items-center gap-8' : ''}">
		<div class="self-stretch flex gap-8 flex-col justify-between  h-auto ">
			<SiteTitle></SiteTitle>	
		</div>
		{#if !isColophonPage}
			<div class="flex items-center gap-8 text-sm">
				{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'slug')}
					<a
						class="hover:underline {isContentPage ? '' : 'hidden'}"
						href="/collection/{collectionState.currCollection?.slug?.current}"
						><StyledButton>
							Back&nbsp;to&nbsp;Collection
						</StyledButton></a
					>
				{/if}
			</div>
		{/if}

		{#if backLink}
		<a href={backLink} class="text-sm {isColophonPage ? '' : 'hidden'}">Back</a>

		{/if}
	</div>
	
	{#if !isContentPage}
		<div class=" w-xl {isContentPage ? 'hidden' : ''}">
			<div class="-mt-1">
				<CollectionTitle></CollectionTitle>

			</div>
			<div class="{isContentPage ? 'hidden' : ''} py-2">
				<CollectionDek></CollectionDek>
			</div>
			<div class="flex gap-8">
				<EssayLink></EssayLink>
				<InterviewLink></InterviewLink>
			</div>
		</div>
	{/if}

	<div class="flex flex-col self-stretch justify-between items-end  w-[100px]">
			<SignOut></SignOut>
			{#if !isContentPage}
				<ColophonLink></ColophonLink>
			{/if}

	
	</div>
</div>
