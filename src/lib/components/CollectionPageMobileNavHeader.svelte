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

	let { mobileHeaderHeight = $bindable(), isContentPage = false, isColophonPage = false } = $props();

	let tagsContainer: HTMLDivElement;
	let isScrollingDown = $state(false);

	onMount(() => {
		window.addEventListener('scroll', scrollFunction);
		let prevScrollPos = window.pageYOffset;
		function scrollFunction() {
			let currentScrollPos = window.pageYOffset;

			if (prevScrollPos > currentScrollPos || currentScrollPos < 100) {
				isScrollingDown = false;
			} else if (currentScrollPos > 50) {
				isScrollingDown = true;
			}
			prevScrollPos = currentScrollPos;
		}
	});
</script>


<div
	bind:clientHeight={mobileHeaderHeight}
	class="flex sm:hidden border-primary-text bg-bg fixed top-0 z-9999 w-dvw flex-col  border-b"
>
	<div class="sticky top-0 flex self-stretch px-4 {isContentPage ? 'flex items-center gap-8' : ''}">
		<div class="flex min-h-16 h-auto w-full justify-between items-top gap-4 self-stretch">
            <div class="py-2.5">
			<SiteTitle></SiteTitle>

            </div>
			<div class="flex gap-4 items-top h-0 pt-4">
				{#if !isContentPage}
                    <div>
				    <StyledButton>
						<ColophonLink></ColophonLink>
					</StyledButton>
                    </div>

	
				{/if}
				<SignOut></SignOut>
			</div>
		</div>
	</div>

    <div
        class="grid {isScrollingDown
            ? 'grid-rows-[0fr]'
            : 'grid-rows-[1fr]'} transition-[grid-template-rows] duration-500"
    >
        <div class="overflow-auto">
            {#if !isColophonPage}
            {#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'slug')}
                <a
                    class="{isContentPage ? '' : 'hidden'} text-sm font-bold hover:underline"
                    href="/collection/{collectionState.currCollection?.slug?.current}"
                >
                    [Back&nbsp;to&nbsp;Collection]
                </a>
            {/if}
        {/if}
    
        {#if !isContentPage}
            <div class="px-4 max-w-xl {isContentPage ? 'hidden' : ''}">
                <div class="mt-8">
                    <CollectionTitle></CollectionTitle>
                </div>
                <div class="py-2 pb-8">
                    <CollectionDek></CollectionDek>
                </div>
                <div class="flex gap-8 justify-between text-lg">
                    <EssayLink></EssayLink>
                    <InterviewLink></InterviewLink>
                </div>
            </div>
        {/if}
    
        <div bind:this={tagsContainer} class="transition-[top] duration-500   border-primary-text  bg-bg  basis-0 flex flex-col gap-2 border-t mt-4 p-4">
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
            {#if !isContentPage}
                <StyledButton>
                    <ColophonLink></ColophonLink>
                </StyledButton>
            {/if}
        </div>
        </div>
    </div>

	
</div>
