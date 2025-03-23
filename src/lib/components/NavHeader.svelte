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
	let { headerHeight = $bindable(), isContentPage = false, isColophonPage = false } = $props();
</script>

<div
	bind:clientHeight={headerHeight}
	class="border-primary-text bg-bg sticky top-0 z-9999 flex w-dvw items-start justify-between gap-8 border-b p-4 pb-3"
>
	<div class="flex w-[100px] self-stretch {isContentPage ? 'flex items-center gap-8' : ''}">
		<div class="flex h-auto justify-between gap-8 self-stretch">
			<SiteTitle></SiteTitle>
		</div>
	</div>

	{#if !isColophonPage}
		{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'slug')}
			<a
				class="{isContentPage ? '' : 'hidden'} hover:underline"
				href="/collection/{collectionState.currCollection?.slug?.current}"
			>
				[Back&nbsp;to&nbsp;Collection]
			</a>
		{/if}
	{/if}

	{#if !isContentPage}
		<div class=" w-xl {isContentPage ? 'hidden' : ''}">
			<div class="-mt-1">
				<CollectionTitle></CollectionTitle>
			</div>
			<div class="py-2">
				<CollectionDek></CollectionDek>
			</div>
			<div class="flex gap-8">
				<EssayLink></EssayLink>
				<InterviewLink></InterviewLink>
			</div>
		</div>
	{/if}

	<div class="flex w-[100px] flex-col items-end justify-between self-stretch">
		<SignOut></SignOut>
		{#if !isContentPage}
			<StyledButton>
				<ColophonLink></ColophonLink>
			</StyledButton>
		{/if}
	</div>
</div>
