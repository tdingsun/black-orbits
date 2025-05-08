<script lang="ts">
	import SignOut from './SignOut.svelte';
	import SiteTitle from './SiteTitle.svelte';
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
	class="border-primary-text bg-bg sticky  z-9999 flex w-dvw flex-col  border-b  items-start justify-between gap-4  p-4 transition-[top] duration-500 sm:flex-row"
>
	<div class=" flex self-stretch sm:w-[100px] {isContentPage ? 'flex items-center gap-8' : ''}">
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

	{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'slug')}
		<a
			class="text-sm font-bold hover:underline self-end sm:self-center"
			href="/collection/{collectionState.currCollection?.slug?.current}"
		>
			[Back&nbsp;to&nbsp;Collection]
		</a>
	{/if}

	

	<div class="hidden w-[100px] flex-col items-end justify-between self-stretch sm:flex">
		<SignOut></SignOut>
		{#if !isContentPage}
		<div
		class="grid text-sm {isScrollingDown
			? 'grid-rows-[0fr]'
			: 'grid-rows-[1fr]'} transition-[grid-template-rows] duration-500"
	>
		<div class="overflow-auto {isScrollingDown ? 'pt-2' : ''}">
			<StyledButton>
				<ColophonLink></ColophonLink>
			</StyledButton>
			</div>
			</div>

		{/if}
	</div>
</div>
