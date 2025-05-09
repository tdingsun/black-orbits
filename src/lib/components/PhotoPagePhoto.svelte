<script lang="ts">
	import { getImgUrl } from '$lib/sanity';
	import BlockContent from '$lib/components/BlockContent.svelte';
	import Caption from '$lib/components/Caption.svelte';
	import { photoState, highlightHotspot, dehighlightHotspot } from '$lib/states.svelte';
	import { onMount } from 'svelte';
	let { photo, isModal=false } = $props();

	let imgW = $state(1);
	let imgH = $state(1);
	let img: HTMLImageElement;
	let imgContainer: HTMLDivElement
	let imgNaturalAspect = $state(1);

	let fullContainerH = $state(1);
	let fullContainerW = $state(1);

	let captionH = $state(1);
	

	onMount(() => {
		let imgNaturalAspectRatio = img.naturalHeight/img.naturalWidth;
		console.log(imgNaturalAspectRatio);
		imgNaturalAspect = imgNaturalAspectRatio;
		// imgContainer.style.aspectRatio = `${imgNaturalAspectRatio}`;
	})

	let onImgClick = (e: MouseEvent) => {
		let xPercentage = (e.offsetX / imgW) * 100;
		let yPercentage = (e.offsetY / imgH) * 100;

		photoState.xPixel = e.offsetX;
		photoState.yPixel = e.offsetY;

		photoState.xPos = xPercentage;
		photoState.yPos = yPercentage;
	};
</script>


<div bind:clientWidth={fullContainerW}
bind:clientHeight={fullContainerH}  class="h-full w-full flex-col relative  {imgW > 1 ? 'opacity-100' : 'opacity-0'}">
	<div bind:this={imgContainer} class=" p-4">
		<img
		role="presentation"
		alt={photo.alt}
		draggable="false"
		oncontextmenu={(e) => e.preventDefault()}
		bind:this={img}
		bind:clientWidth={imgW}
		bind:clientHeight={imgH}
		onclick={(e) => onImgClick(e)}
		style="max-height: calc({fullContainerH}px - {captionH}px - 4rem);"
		class="{photoState.showForm ? 'cursor-pointer' : ''}   w-auto h-auto max-w-full max-h-full mx-auto"
		src={getImgUrl(photo.image)}
		/>
	</div>
	<div class="h-full w-full absolute p-4 top-0 left-0 pointer-events-none">
		<div style="width:{imgW}px; height:{imgH}px;" class="mx-auto relative top-0">
			{#if photo.hotspots}
			{#each photo.hotspots.filter((hotspot) => hotspot.isPublished) as hotspot, idx}
				<div
					role="presentation"
					onmouseenter={() => highlightHotspot(idx)}
					onmouseleave={dehighlightHotspot}
					style="top:{hotspot.yPos}%; left:{hotspot.xPos}%;"
					class="{photoState.showAllHotspots && !photoState.showForm
						? ''
						: 'hidden'} {photoState.hotspotHover === idx + 1
						? 'bg-bg border border-solid border-yellow-200 opacity-100'
						: photoState.hotspotHover === 0
							? 'bg-white opacity-100 blur-xs'
							: 'opacity-0'} pointer-events-auto border-bg absolute mt-[-5%] ml-[-5%] aspect-square w-[10%] cursor-pointer rounded-full border mix-blend-overlay transition-[color,_background-color,_border-color,_opacity]"
				></div>
			{/each}
		{/if}
		{#if photoState.xPos > 0 && photoState.yPos > 0 && photoState.showForm}
			<div
				style="top:{photoState.yPos}%; left:{photoState.xPos}%;"
				class="{photoState.showAllHotspots
					? ''
					: 'hidden'} pointer-events-none absolute mt-[-5%] ml-[-5%] aspect-square w-[10%] cursor-pointer rounded-full border border-solid border-red-500 bg-transparent mix-blend-overlay transition-colors"
			></div>
		{/if}
		</div>
	</div>
	
	<div class="  flex-grow border-t overflow-scroll justify-center flex p-4 pt-2">
		<div style="min-width:min({imgW}px, 100%); max-width:max({imgW}px, 672px);" bind:clientHeight={captionH}  class="min-h-[25px]">
			<Caption>
				<BlockContent value={photo.caption}></BlockContent>
			</Caption>
		</div>

	</div>
</div>
