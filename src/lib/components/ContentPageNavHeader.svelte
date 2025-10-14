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
	class="border-primary-text bg-bg sticky z-9999 flex w-dvw flex-col items-start justify-between gap-4 border-b transition-[top] duration-500 sm:flex-row"
>
	<div class="hidden w-full items-center justify-between pr-4 sm:flex">
		<div class="w-60 px-3 py-2"><SiteTitle></SiteTitle></div>
		{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'slug')}
			<a
				class="text-lg font-bold hover:underline"
				href="/collection/{collectionState.currCollection?.slug?.current}"
			>
				[Back&nbsp;to&nbsp;Collection]
			</a>
		{/if}
		<div class="flex justify-end lg:w-60">
			<SignOut></SignOut>
		</div>
	</div>

	<div class="flex w-full flex-col items-center pr-4 sm:hidden">
		<div class="flex w-full justify-between">
			<div class="w-60 px-3 py-2"><SiteTitle></SiteTitle></div>

			<div class="flex justify-end lg:w-60">
				<SignOut></SignOut>
			</div>
		</div>

		<div class="w-full pb-4 flex justify-end">
			{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'slug')}
				<a
					class="text-lg font-bold hover:underline"
					href="/collection/{collectionState.currCollection?.slug?.current}"
				>
					[Back&nbsp;to&nbsp;Collection]
				</a>
			{/if}
		</div>
	</div>
	<!-- <div class=" flex self-stretch  {isContentPage ? 'flex items-center gap-8' : ''}">
		<div class="flex h-auto w-full justify-between gap-8 self-stretch">
			<div class="w-48 bg-amber-50">
			<SiteTitle></SiteTitle>

			</div>
			<div class="flex gap-4 sm:hidden">

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
	</div> -->
</div>
