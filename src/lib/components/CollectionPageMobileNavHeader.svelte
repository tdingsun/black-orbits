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
	import Tags from './Tags.svelte';
	import { tagsState } from '$lib/states.svelte';

	let {
		mobileHeaderHeight = $bindable(),
	} = $props();

	let tagsContainer: HTMLDivElement;
	let isScrollingDown = $state(false);

	onMount(() => {
		window.addEventListener('scroll', scrollFunction);
		let prevScrollPos = window.pageYOffset;
		function scrollFunction() {
			let currentScrollPos = window.pageYOffset;
            if(currentScrollPos > 200) {
                isScrollingDown = true
            } else {
                				isScrollingDown = false;

            }
			// if (prevScrollPos > currentScrollPos || currentScrollPos < 100) {
			// 	isScrollingDown = false;
			// } else if (currentScrollPos > 50) {
			// 	isScrollingDown = true;
			// }
			prevScrollPos = currentScrollPos;
		}
	});
</script>

<div
	bind:clientHeight={mobileHeaderHeight}
	class="border-primary-text bg-bg fixed top-0 z-9999 flex w-dvw flex-col border-b sm:hidden "
>
	<div class="sticky top-0 flex flex-col self-stretch border-b border-dotted px-4 pb-4 mb-[-1px]">
		<div class="items-top flex h-auto min-h-24 w-full justify-between gap-4 self-stretch">
			<div class="py-2.5">
				<SiteTitle></SiteTitle>
			</div>
			<div class="mt-4 flex items-start">
				<SignOut></SignOut>
			</div>
		</div>
		<div class="flex justify-end gap-2">
			<StyledButton>
				<ColophonLink></ColophonLink>
			</StyledButton>
			<StyledButton>
				<a href="/call-for-future-writers">Call for Writers</a>
			</StyledButton>
		</div>
	</div>

	<div
		class="grid {isScrollingDown
			? 'grid-rows-[0fr]'
			: 'grid-rows-[1fr]'} transition-[grid-template-rows]"
	>
		<div class="overflow-auto">
				<div class="max-w-xl px-4">
					<div class="mt-4">
						<CollectionTitle></CollectionTitle>
					</div>
					<div class="py-2 pb-4 text-xs font-mono">
						<CollectionDek></CollectionDek>
					</div>
					<div class="flex justify-between gap-8 text-lg">
						<EssayLink></EssayLink>
						<InterviewLink></InterviewLink>
					</div>
				</div>

			<div
				bind:this={tagsContainer}
				class="border-primary-text bg-bg mt-4 flex basis-0 flex-col gap-2 border-t border-dotted p-4 transition-[top] duration-500"
			>
				{#if tagsState.imgTags.allTags.size}
					<Tags tags={tagsState.imgTags}></Tags>
				{/if}
				{#if tagsState.colorTags.allTags.size}
					<Tags tags={tagsState.colorTags}></Tags>
				{/if}
				{#if tagsState.timeTags.allTags.size}
					<Tags tags={tagsState.timeTags}></Tags>
				{/if}
			</div>

			<div class="hidden w-[100px] flex-col items-end justify-between self-stretch sm:flex">
				<SignOut></SignOut>
					<StyledButton>
						<ColophonLink></ColophonLink>
					</StyledButton>
			</div>
		</div>
	</div>
</div>
