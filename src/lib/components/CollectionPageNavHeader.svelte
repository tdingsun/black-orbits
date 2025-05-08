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

	let isScrollingDown = $state(false);

	onMount(() => {
		window.onscroll = function () {
			scrollFunction();
		};
		let prevScrollPos = window.pageYOffset;
		function scrollFunction() {
			let currentScrollPos = window.pageYOffset;

			if (prevScrollPos > currentScrollPos || currentScrollPos < 100) {
				isScrollingDown = false;
			} else {
				isScrollingDown = true;
			}
			prevScrollPos = currentScrollPos;
		}
	});
</script>

<div
	bind:clientHeight={headerHeight}
	class="border-primary-text bg-bg fixed top-0 z-9999 hidden w-dvw flex-col items-start justify-between gap-8 border-b p-4 pb-2 transition-[top] duration-500 sm:flex sm:flex-row"
>
	<div class="flex gap-4">
		<div class=" flex self-stretch sm:w-[100px] {isContentPage ? 'flex items-center gap-8' : ''}">
			<div class="flex h-auto w-full justify-between gap-8 self-stretch">
				<SiteTitle></SiteTitle>
			</div>
		</div>
	
		<div class=" max-w-xl">
			<div class="">
				<CollectionTitle></CollectionTitle>
			</div>
			<div
				class="grid text-sm {isScrollingDown
					? 'grid-rows-[0fr]'
					: 'grid-rows-[1fr]'} transition-[grid-template-rows] duration-500"
			>
				<div class="overflow-auto">
					<div class="pt-2 pb-4">
						<CollectionDek></CollectionDek>
					</div>
					<div class="flex gap-8 pb-2">
						<EssayLink></EssayLink>
						<InterviewLink></InterviewLink>
					</div>
				</div>
			</div>
		</div>
	</div>
	

	<div class="hidden w-[100px] flex-col items-end justify-between self-stretch sm:flex">
		<SignOut></SignOut>
		{#if !isContentPage}
			<div
				class="grid text-sm {isScrollingDown
					? 'grid-rows-[0fr]'
					: 'grid-rows-[1fr]'} transition-[grid-template-rows] duration-500"
			>
				<div class="relative -top-2 overflow-auto {isScrollingDown ? 'pt-2' : ''}">
					<StyledButton>
						<ColophonLink></ColophonLink>
					</StyledButton>
				</div>
			</div>
		{/if}
	</div>
</div>
