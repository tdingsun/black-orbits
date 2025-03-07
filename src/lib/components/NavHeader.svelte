<script lang="ts">
  import SignOut from './SignOut.svelte';
	import SiteTitle from './SiteTitle.svelte';
	import CollectionTitle from './CollectionTitle.svelte';
	import CollectionDek from './CollectionDek.svelte';
	import EssayLink from './EssayLink.svelte';
	import InterviewLink from './InterviewLink.svelte';
	import { collectionState } from '$lib/states.svelte';
	import ColophonLink from './ColophonLink.svelte';
	let { headerHeight=$bindable(), isContentPage=false, isColophonPage=false, backLink } = $props();
</script>

<div bind:clientHeight={headerHeight} class=" border-primary-text  sticky top-0 flex items-start justify-between border-b p-4 pb-3 gap-8 w-dvw bg-bg">
		<div class="w-[100px] {isContentPage ? 'flex gap-4 items-center' : ''}">
			<div class="mb-1">
				<SiteTitle></SiteTitle>
			</div>
			{#if !isColophonPage}
				<div class="{isColophonPage ? 'hidden' : ''} flex gap-4 text-sm items-center">
					<a class="hover:underline {isContentPage ? '' : 'hidden'}" href="/collection/{collectionState.currCollection.slug.current}">Back&nbsp;to&nbsp;Collection</a>
					<ColophonLink></ColophonLink>
				</div>
			{/if}
			
			<a href={backLink} class="text-sm {isColophonPage ? '' : 'hidden'}">Back</a>
		</div>
		{#if !isContentPage}
		<div class=" w-xl  {isContentPage ? 'hidden' : ''}">
			<CollectionTitle></CollectionTitle>
			<div class="{isContentPage ? 'hidden' : ''} py-2">
				<CollectionDek></CollectionDek>

			</div>
			<div class="flex gap-8">
				<EssayLink></EssayLink>
				<InterviewLink></InterviewLink>
			</div>
		</div>
		{/if}
		
		<div class="flex w-[100px] justify-end">
			<SignOut></SignOut>
		</div>
	</div>

