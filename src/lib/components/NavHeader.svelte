<script lang="ts">
  import SignOut from './SignOut.svelte';


	import SiteTitle from './SiteTitle.svelte';
	import CollectionTitle from './CollectionTitle.svelte';
	import CollectionDek from './CollectionDek.svelte';
	import EssayLink from './EssayLink.svelte';
	import InterviewLink from './InterviewLink.svelte';
	import { collectionState } from '$lib/states.svelte';

	let { headerHeight=$bindable(), isContentPage=false } = $props();


</script>

<div bind:clientHeight={headerHeight} class=" border-primary-text  sticky top-0 flex items-start justify-between border-b p-4 gap-8 w-dvw">
		<div class="w-[100px] {isContentPage ? 'flex gap-8' : ''}">
			<SiteTitle></SiteTitle>
			<a class="hover:underline" href="/collection/{collectionState.currCollection.slug.current}">Back&nbsp;to&nbsp;Collection</a>
			<a class="hover:underline" href="/colophon">Colophon</a>
		</div>
		<div class=" w-xl  {isContentPage ? 'hidden' : ''}">
			<CollectionTitle></CollectionTitle>
			<div class="{isContentPage ? 'hidden' : ''}">
				<CollectionDek></CollectionDek>

			</div>
			<div class="flex gap-8">
				<EssayLink></EssayLink>
				<InterviewLink></InterviewLink>
			</div>
		</div>
		<div class="flex w-[100px] justify-end">
			<SignOut></SignOut>
		</div>
	</div>

