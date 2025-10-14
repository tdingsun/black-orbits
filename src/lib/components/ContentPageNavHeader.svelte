<script lang="ts">
	import SignOut from './SignOut.svelte';
	import SiteTitle from './SiteTitle.svelte';
	import { collectionState } from '$lib/states.svelte';
	import { onMount } from 'svelte';
	import StyledButton from './StyledButton.svelte';
	let { headerHeight = $bindable() } = $props();

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
	class="border-primary-text bg-bg sticky z-9999 flex w-dvw flex-col items-start justify-between gap-4 transition-[top] duration-250 sm:flex-row"
>
	<div class="hidden w-full items-center justify-between px-4 sm:flex">
		<div class="basis-1/3">
			{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'slug')}
				<StyledButton>
					<a class="" href="/collection/{collectionState.currCollection?.slug?.current}">
						Back&nbsp;to&nbsp;Collection
					</a>
				</StyledButton>
			{/if}
		</div>

			
		<div class="w-60 px-3 py-2 self-center"><SiteTitle></SiteTitle></div>

		<div class="basis-1/3 flex justify-end gap-2">
		
			<SignOut></SignOut>
		</div>
	</div>

	<div class="flex w-full flex-col items-center pr-4 sm:hidden">
		<div class="flex w-full justify-between gap-4">
			<div class="w-full py-2.5 pl-4"><SiteTitle></SiteTitle></div>

			<div class="flex items-start justify-end pt-4 lg:w-60">
				<SignOut></SignOut>
			</div>
		</div>

		<div class="flex w-full justify-end py-4">
			{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'slug')}
				<StyledButton>
					<a class="" href="/collection/{collectionState.currCollection?.slug?.current}">
						Back&nbsp;to&nbsp;Collection
					</a>
				</StyledButton>
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
