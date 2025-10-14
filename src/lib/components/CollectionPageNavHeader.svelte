<script lang="ts">
	import SignOut from './SignOut.svelte';
	import SiteTitle from './SiteTitle.svelte';
	import CollectionTitle from './CollectionTitle.svelte';
	import CollectionDek from './CollectionDek.svelte';
	import EssayLink from './EssayLink.svelte';
	import InterviewLink from './InterviewLink.svelte';
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
	class="border-primary-text bg-bg fixed hidden sm:flex top-0 z-9999  w-dvw items-start justify-between gap-8 border-b px-4    flex-row"
>
	<div class="flex gap-4 ">
		<div class="pt-3 md:pt-2 flex self-stretch md:w-64 w-54 shrink-0 {isContentPage ? 'flex items-center gap-8' : ''}">
			<div class="flex h-auto w-full justify-between gap-8 self-stretch pb-2 ">
				<SiteTitle></SiteTitle>
			</div>
		</div>
	
		<div class=" max-w-xl pt-4">
			<div class="">
				<CollectionTitle></CollectionTitle>
			</div>
			<div
				class="grid  {isScrollingDown
					? 'grid-rows-[0fr]'
					: 'grid-rows-[1fr]'} transition-[grid-template-rows] duration-500"
			>
				<div class="overflow-auto">
					<div class="pt-2 pb-4 ">
						<CollectionDek></CollectionDek>
					</div>
					<div class="flex gap-8 pb-4">
						<EssayLink></EssayLink>
						<InterviewLink></InterviewLink>
					</div>
				</div>
			</div>
		</div>
	</div>
	

	<div class=" pt-4  shrink-0 flex-col items-end justify-between self-stretch flex ">
		<SignOut></SignOut>
		{#if !isContentPage}
			<div
				class="grid  {isScrollingDown
					? 'grid-rows-[0fr]'
					: 'grid-rows-[1fr]'} overflow-hidden transition-[grid-template-rows] duration-500"
			>
				<div class=" overflow-auto transition-none pb-4 flex gap-2 {isScrollingDown ? '-mb-16' : '' } ">
					<StyledButton>
						<a href="/call-for-future-writers">Call for Writers</a>
					</StyledButton>
					<StyledButton>
						<ColophonLink></ColophonLink>
					</StyledButton>
				</div>
			</div>
		{/if}
	</div>
</div>
