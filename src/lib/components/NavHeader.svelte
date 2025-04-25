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
	import { onMount } from 'svelte';
	let { headerHeight = $bindable(), isContentPage = false, isColophonPage = false } = $props();

	let header: HTMLDivElement;

	let isScrollingDown = $state(false);

	onMount(() => {
		window.onscroll = function () {
			scrollFunction();
		};
		let prevScrollPos = window.pageYOffset;
		function scrollFunction() {
			let currentScrollPos = window.pageYOffset;

			if (prevScrollPos > currentScrollPos) {
				header.style.top = '0';
				isScrollingDown = false;
			} else {
				header.style.top = `-${headerHeight}px`;
				isScrollingDown = true;
			}
			prevScrollPos = currentScrollPos;
		}
	});
</script>

<div
	bind:clientHeight={headerHeight}
	bind:this={header}
	class="border-primary-text bg-bg sticky top-0 z-9999 flex w-dvw flex-col items-start justify-between gap-8 border-b p-4 pb-3 transition-[top] duration-500 sm:flex-row"
>
	<div class="flex self-stretch sm:w-[100px] {isContentPage ? 'flex items-center gap-8' : ''}">
		<div class="flex h-auto w-full justify-between gap-8 self-stretch">
			<SiteTitle></SiteTitle>
			<div class="flex gap-4 sm:hidden">
				{#if !isContentPage}
					<StyledButton>
						<ColophonLink></ColophonLink>
					</StyledButton>
				{/if}
				<SignOut></SignOut>
			</div>
		</div>
	</div>

	{#if !isColophonPage}
		{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'slug')}
			<a
				class="{isContentPage ? '' : 'hidden'} text-sm font-bold hover:underline"
				href="/collection/{collectionState.currCollection?.slug?.current}"
			>
				[Back&nbsp;to&nbsp;Collection]
			</a>
		{/if}
	{/if}

	{#if !isContentPage}
		<div class=" max-w-xl {isContentPage ? 'hidden' : ''}">
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

	<div class="hidden w-[100px] flex-col items-end justify-between self-stretch sm:flex">
		<SignOut></SignOut>
		{#if !isContentPage}
			<StyledButton>
				<ColophonLink></ColophonLink>
			</StyledButton>
		{/if}
	</div>
</div>
