<script lang="ts">
	import NavHeader from './NavHeader.svelte';
	import Tags from './Tags.svelte';
	import PhotoLayer from './PhotoLayer.svelte';
	import { tagsState } from '$lib/states.svelte';
	import ColophonLink from './ColophonLink.svelte';
	import StyledButton from './StyledButton.svelte';
	import bgImg from '$lib/images/scratches3.png';
	import { onMount } from 'svelte';

	let isScrollingDown = $state();
	let tagsContainer: HTMLDivElement;
	let headerHeight = $state(0);
	

	onMount(() => {
		window.addEventListener('scroll', scrollFunction);
		// window.onscroll = function () {
		// 	scrollFunction();
		// };
		let prevScrollPos = window.pageYOffset;
		function scrollFunction() {
			let currentScrollPos = window.pageYOffset;

			if (prevScrollPos > currentScrollPos) {
				tagsContainer.style.top = `${headerHeight}px`;
				isScrollingDown = false;
			} else {
				tagsContainer.style.top = `0`;
				isScrollingDown = true;
			}
			prevScrollPos = currentScrollPos;
		}
	});

</script>

<div class="w-full">
	<NavHeader bind:headerHeight={headerHeight}></NavHeader>

	<div style="background-image: url({bgImg})" class="flex sm:flex-row flex-col  bg-fixed   ">
		<div bind:this={tagsContainer} class="sticky top-0 transition-[top] duration-500 sm:top-[unset] z-10 sm:fixed border-b sm:border-b-0 border-primary-text p-4 bg-bg flex basis-0 flex-col sm:gap-8 sm:w-24">
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
		<div class="p-4 sm:px-28 pt-6  flex basis-full flex-shrink flex-grow justify-center ">
			<PhotoLayer></PhotoLayer>
		</div>
		<!-- <div class="fixed right-0 flex basis-0 flex-col gap-8 pr-4">

		</div> -->
	</div>
</div>
