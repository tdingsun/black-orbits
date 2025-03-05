<script lang="ts">
	import { onMount } from "svelte";
    import { collectionState } from "$lib/states.svelte";
    import type { PageData } from './$types';
	import BlockContentImg from "$lib/components/BlockContentImg.svelte";
	import { getImgUrl } from "$lib/sanity";
	import BlockContent from "$lib/components/BlockContent.svelte";
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

    console.log(data.collection);

</script>

<div class="p-2">
    <a href="/">
        back to all collections

    </a>
</div>
<div class="p-2 gap-4 max-w-xl m-auto ">
    <BlockContent value={data.collection.interview}></BlockContent>
</div>


