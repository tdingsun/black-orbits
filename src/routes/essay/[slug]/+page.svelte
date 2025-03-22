<script lang="ts">
	import { onMount } from 'svelte';
	import { collectionState } from '$lib/states.svelte';
	import type { PageData } from './$types';
	import BlockContentImg from '$lib/components/BlockContentImg.svelte';
	import { getImgUrl } from '$lib/sanity';
	import BlockContent from '$lib/components/BlockContent.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
	import Caption from '$lib/components/Caption.svelte';
	let { data }: { data: PageData } = $props();

	const transformScroll = (e: any) => {
		if (!e.deltaY) {
			return;
		}
		window.scrollBy((e.deltaX + e.deltaY) * 0.5, 0);
		e.preventDefault();
	};
	onMount(() => {
        document.onwheel = transformScroll

	});


    let headerHeight = $state(0);
</script>

<div class="w-full">
    <div class="fixed left-0 top-0">
        <NavHeader bind:headerHeight={headerHeight} isContentPage={true}></NavHeader>

    </div>

<div style="margin-top:{headerHeight}px" class="{headerHeight === 0 ? 'hidden' : 'flex'}  gap-8 p-4">
	<div class="w-[500px] min-w-[500px] text-4xl">
		<div>
			{data.collection.essayTitle}
		</div>
        <div class="italic">by {data.collection.essayAuthor}</div>
		<img
			class=" rounded-sm pt-4"
			src={getImgUrl(data.collection.essayCoverImgObj.image)}
			alt={data.collection.essayCoverImgObj.alt ? data.collection.essayCoverImgObj.alt : ''}
		/>
        <Caption>
            <BlockContent value={data.collection.essayCoverImgObj.caption}></BlockContent>
        </Caption>
	</div>
	<div class="w-[400px] max-w-md min-w-[400px] h-min text-sm border border-primary-text p-4">
        <BlockContent value={data.collection.dek}></BlockContent>
	</div>
	<div class="h-[600px] w-[500px] min-w-[500px] [column-gap:2rem] [column-width:450px] pr-8">
		<BlockContent value={data.collection.essay}></BlockContent>
        <div class="p-8 h-[50dvh]"></div>
	</div>
</div>
</div>
   

