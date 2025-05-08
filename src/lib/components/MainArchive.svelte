<script lang="ts">
	import CollectionPageNavHeader from './CollectionPageNavHeader.svelte';
	import CollectionPageMobileNavHeader from './CollectionPageMobileNavHeader.svelte';
	import Tags from './Tags.svelte';
	import PhotoLayer from './PhotoLayer.svelte';
	import { tagsState } from '$lib/states.svelte';
	import ColophonLink from './ColophonLink.svelte';
	import StyledButton from './StyledButton.svelte';
	import bgImg from '$lib/images/scratches3.png';
	import { onMount } from 'svelte';

	let tagsContainer: HTMLDivElement;
	let headerHeight = $state(0);
	let maxHeaderHeight = $state(0);

	let mobileHeaderHeight = $state(0);
	let maxMobileHeaderHeight = $state(0);
	$effect(() => {
		if(mobileHeaderHeight > maxMobileHeaderHeight){
			maxMobileHeaderHeight = mobileHeaderHeight
		}
	}
	)

	$effect(() => {
		if(headerHeight > maxHeaderHeight){
			maxHeaderHeight = headerHeight
		}
	}
	)

	onMount(() => {
		window.addEventListener('scroll', scrollFunction);
		// window.onscroll = function () {
		// 	scrollFunction();
		// };
		let prevScrollPos = window.pageYOffset;
		function scrollFunction() {
			let currentScrollPos = window.pageYOffset;

			if (prevScrollPos > currentScrollPos) {
				tagsContainer.style.top = `${maxHeaderHeight}px`;
			} else {
				tagsContainer.style.top = `${headerHeight}px`;
			}
			prevScrollPos = currentScrollPos;
		}
	});

</script>

<div class="w-full">
	<CollectionPageMobileNavHeader bind:mobileHeaderHeight={mobileHeaderHeight}></CollectionPageMobileNavHeader>
	<CollectionPageNavHeader bind:headerHeight={headerHeight}></CollectionPageNavHeader>

	<div style="background-image: url({bgImg})" class="flex sm:flex-row flex-col  bg-fixed   ">
		<div style="top:{headerHeight}px" bind:this={tagsContainer} class="sm:flex hidden sticky   sm:top-[unset] z-10 sm:fixed border-b sm:border-b-0 border-primary-text p-4 bg-bg  basis-0 flex-col sm:gap-8 sm:w-24">
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

		<div style="top:{maxMobileHeaderHeight}px;" class="flex sm:hidden  relative p-4 sm:px-28 pt-6  basis-full flex-shrink flex-grow justify-center ">
			<PhotoLayer></PhotoLayer>
		</div>

		<div style="top:{maxHeaderHeight}px;" class="hidden sm:flex relative p-4 sm:px-28 pt-6  basis-full flex-shrink flex-grow justify-center ">
			<PhotoLayer></PhotoLayer>
		</div>
		<!-- <div class="fixed right-0 flex basis-0 flex-col gap-8 pr-4">

		</div> -->
	</div>
</div>
