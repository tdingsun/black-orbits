<script lang="ts">
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
<div class="p-2 gap-4 max-w-xl m-auto ">
    <div class="text-4xl pb-4">
        <div class="">{data.collection.interviewTitle}</div>
        <div class=" italic">by {data.collection.interviewAuthor}</div>
    </div>

    <BlockContent value={data.collection.interview}></BlockContent>
</div>


