<script lang="ts">
  import AudioPlayer from '$lib/components/AudioPlayer.svelte';

	import { onMount } from "svelte";
    import type { PageData } from './$types';

	import BlockContent from "$lib/components/BlockContent.svelte";
	import ContentPageNavHeader from "$lib/components/ContentPageNavHeader.svelte";
    let { data }: { data: PageData } = $props();

    const transformScroll = (e: any) => {
        if(!e.deltaY) {
            return;
        }
        window.scrollBy((e.deltaX + e.deltaY) * 0.33, 0);
        e.preventDefault();
    }
    onMount(() => {
        document.addEventListener('wheel', (e) => {
            transformScroll(e)
        })
    })

</script>

<ContentPageNavHeader isContentPage={true}></ContentPageNavHeader>
<div class="py-4 px-4 sm:px-8 sm:mt-12 gap-4 max-w-xl sm:border-x border-t border-dotted m-auto  pb-48">
    <div class="text-4xl">
        <div class="">{data.collection.interviewTitle}</div>
        <div class="italic">by {data.collection.interviewAuthor}</div>
    </div>

    {#if data.collection.interviewAudio}
        <div class="py-4  bg-bg border-y border-dotted my-12 sticky top-[-1px]">
            <AudioPlayer src={data.collection.interviewAudio.url}></AudioPlayer>
        </div>
    {/if}



    <BlockContent value={data.collection.interview}></BlockContent>
</div>


