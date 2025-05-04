<script lang="ts">
	import { getImgUrl } from '$lib/sanity';
	import BlockContent from '$lib/components/BlockContent.svelte';
	import Caption from '$lib/components/Caption.svelte';
	import { photoState, highlightHotspot, dehighlightHotspot, 	toggleForm,
		toggleHotspots } from '$lib/states.svelte';
	import { onMount } from 'svelte';
	let { photo, isModal = false } = $props();

	let imgW = $state(1);
	let imgH = $state(1);
	let img: HTMLImageElement;
	let imgContainer: HTMLDivElement
	let imgNaturalAspect = $state(1);

	let fullContainerH = $state(1);
	let fullContainerW = $state(1);

	let captionH = $state(1);
	
    import StyledButton from './StyledButton.svelte';
	import HotspotForm from './HotspotForm.svelte';
	import SignOut from './SignOut.svelte';
	import SiteTitle from './SiteTitle.svelte';
	import { SignedIn, SignedOut } from 'svelte-clerk';


	let currPhotoIdxInCollection = $derived(
		photo.collectionInfo.photos.findIndex(
			(currPhoto) => currPhoto.slug.current === photo.slug.current
		)
	);
	let numPhotosInCollection = $derived(photo.collectionInfo.photos.length);

	let isInEssay = $derived(
		photo.collectionInfo.essay.filter((obj) => obj.slug && obj.slug.current === photo.slug.current)
			.length
	);
	let isInInterview = $derived(
		photo.collectionInfo.interview.filter(
			(obj) => obj.slug && obj.slug.current === photo.slug.current
		).length
	);
	let nextPhotoSlug = $derived(
		photo.collectionInfo.photos[
			currPhotoIdxInCollection === numPhotosInCollection - 1 ? 0 : currPhotoIdxInCollection + 1
		].slug.current
	);
	let prevPhotoSlug = $derived(
		photo.collectionInfo.photos[
			currPhotoIdxInCollection === 0 ? numPhotosInCollection - 1 : currPhotoIdxInCollection - 1
		].slug.current
	);

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


<div>
    
</div>
<div class="p-4 flex justify-between">
    <SiteTitle></SiteTitle>
    <SignOut></SignOut>
</div>

<div class="p-4 text-sm">
    <span>This image is a part of</span>
    <a class="font-bold hover:underline" href="/collection/{photo.collectionInfo.slug.current}"
        >[{photo.collectionInfo.title}]
    </a>{#if isInEssay || isInInterview}
        {` and is referenced in`}
    {/if}{#if isInEssay}
        {` the essay `}
        <a href="/essay/{photo.collectionInfo.slug.current}" class="font-bold hover:underline"
            >[{photo.collectionInfo.essayTitle}]
        </a>
        <span>
            by {photo.collectionInfo.essayAuthor}{#if isInInterview}, and{/if}
        </span>
    {/if}{#if isInInterview}
        {` the interview `}<a
            href="/interview/{photo.collectionInfo.slug.current}"
            class="font-bold hover:underline">[{photo.collectionInfo.interviewTitle}]</a
        >
        by {photo.collectionInfo.interviewAuthor}
    {/if}.
</div>

<div bind:clientWidth={fullContainerW}
bind:clientHeight={fullContainerH}  class="w-full  flex-col relative {imgW > 1 ? 'opacity-100' : 'opacity-0'}">
	<div bind:this={imgContainer} class="p-4">
		<img
		role="presentation"
		alt={photo.alt}
		draggable="false"
		oncontextmenu={(e) => e.preventDefault()}
		bind:this={img}
		bind:clientWidth={imgW}
		bind:clientHeight={imgH}
		onclick={(e) => onImgClick(e)}
		class="{photoState.showForm ? 'cursor-pointer' : ''}"
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
	
	<div class="{photoState.showForm ? 'hidden' : ''}  flex-grow overflow-scroll justify-center flex p-4 pt-0">
		<div style="min-width:min({imgW}px, 100%); max-width:max({imgW}px, 672px);" bind:clientHeight={captionH}  class="min-h-[25px]">
			<Caption>
				<BlockContent value={photo.caption}></BlockContent>
			</Caption>
		</div>

	</div>
</div>

<div class="flex flex-col gap-2 text-xs p-4 {photoState.showForm ? 'hidden' : ''}">
    <div class="flex gap-2">
        <div class="w-24 flex-shrink-0">title</div>
        <div>{photo.title}</div>
    </div>
    <div class="flex gap-2">
        <div class="w-24 flex-shrink-0">attribution</div>
        <div><BlockContent value={photo.attribution}></BlockContent></div>
    </div>
    <div class="flex gap-2">
        <div class="w-24 flex-shrink-0">size</div>
        <div>{photo.size}</div>
    </div>
    <div class="flex gap-2">
        <div class="w-24 flex-shrink-0">year</div>
        <div class="flex gap-2">
            {#each photo.time as tag}
                <div>{tag.value}</div>
            {/each}
        </div>
    </div>
    <div class="flex gap-2">
        <div class="w-24 flex-shrink-0">color</div>
        <div class="flex gap-2">
            {#each photo.color as tag}
                <div>{tag.value}</div>
            {/each}
        </div>
    </div>
    <div class="flex gap-2">
        <div class="w-24 flex-shrink-0">tags</div>
        <div class="flex gap-2">
            {#each photo.imgTags as tag}
                <div>{tag.value}</div>
            {/each}
        </div>
    </div>
</div>

<div class="text-sm {photoState.showForm ? 'hidden' : ''} flex flex-grow flex-col">
    {#if photo.hotspots && photo.hotspots.filter((hotspot) => hotspot.isPublished).length > 0}
        <div class="mb-14 flex-grow overflow-scroll border-y p-4 pb-0">
            <div class=" flex justify-between pb-4">
                <div>Observations</div>
                <button onclick={toggleHotspots}>
                    <StyledButton>
                        {photoState.showAllHotspots ? 'hide' : 'show'}
                    </StyledButton>
                </button>
            </div>

            <div class="{photoState.showAllHotspots ? '' : 'hidden'} ">
                {#each photo.hotspots.filter((hotspot) => hotspot.isPublished) as hotspot, idx}
                    {#if hotspot.isPublished}
                        <div
                            onmouseenter={() => highlightHotspot(idx)}
                            onmouseleave={dehighlightHotspot}
                            class="relative pb-4"
                            role="presentation"
                        >
                            <div class="relative flex gap-3">
                                <div
                                    class="{idx + 1 === photoState.hotspotHover
                                        ? 'text-bg bg-primary-text'
                                        : ''} border-primary-text flex h-6 w-6 items-center justify-center rounded-full border text-xs transition-colors"
                                >
                                    {idx + 1}
                                </div>
                                <div class="relative -top-0.5">
                                    <div class="font-bold">
                                        {hotspot.title}
                                    </div>
                                    <div class="text-xs">
                                        Submitted by {hotspot.attribution ? hotspot.attribution : 'anonymous'}
                                    </div>
                                    <div class="mt-2">
                                        {hotspot.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
    {/if}
        <div class="  flex w-full justify-between p-4">
            <SignedIn>

                {#if !isModal}
                <a href="/photo/{prevPhotoSlug}">
                    <StyledButton>prev</StyledButton>
                </a>
            {/if}

            <button onclick={(e) => toggleForm(e)}>
                <StyledButton>Submit an Observation</StyledButton>
            </button>
            {#if !isModal}
                <a href="/photo/{nextPhotoSlug}">
                    <StyledButton>next</StyledButton>
                </a>
            {/if}
            </SignedIn>
            <SignedOut>
                <div class="w-full text-center">
                    Log in or sign up to submit an observation

                </div>
            </SignedOut>
            
        </div>

    
</div>

<div
			class=" {photoState.showForm
				? 'border-t p-4'
				: 'hidden h-0 overflow-hidden'}  bg-bg border-primary-text w-full text-sm"
		>
			{#if photoState.showFormError}
				<div class="flex h-full items-center justify-center p-4 text-center">
					Sorry, something went wrong with form submission. Please try again later.
				</div>
			{:else if photoState.formSubmitted}
				<div class="flex h-full items-center justify-center p-4 text-center">
					Thank you for submitting!<br /><br />Your observation will be added to the photo upon
					review.
				</div>
			{:else}
				<HotspotForm {photo} id={photo._id}></HotspotForm>
			{/if}
		</div>
