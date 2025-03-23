<script lang="ts">
  import AudioPlayer from '../../../lib/components/AudioPlayer.svelte';

	import { onMount } from "svelte";
    import type { PageData } from './$types';

	import BlockContent from "$lib/components/BlockContent.svelte";
	import NavHeader from "$lib/components/NavHeader.svelte";
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

<NavHeader isContentPage={true}></NavHeader>
<div class="p-2 gap-4 max-w-xl m-auto  pb-48">
    <div class="text-4xl pb-4">
        <div class="">{data.collection.interviewTitle}</div>
        <div class=" italic">by {data.collection.interviewAuthor}</div>
    </div>

    {#if data.collection.interviewAudio}
        <div class="py-4 sticky top-14  bg-bg border-b mb-4">
            <AudioPlayer src={data.collection.interviewAudio.url}></AudioPlayer>
        
        </div>
    {/if}



    <BlockContent value={data.collection.interview}></BlockContent>
</div>


