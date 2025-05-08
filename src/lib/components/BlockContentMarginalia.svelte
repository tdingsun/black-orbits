<script lang="ts">
	import { getImgUrl } from "$lib/sanity";
	import { siteState } from "$lib/states.svelte";
	import { onMount } from "svelte";

    let { portableText } = $props();
    
    let nextAnnotationLeft = siteState.nextAnnotationLeft;
    siteState.nextAnnotationLeft = !siteState.nextAnnotationLeft;

    let showAnnotation = $state(false);
    onMount(() => {
        console.log(portableText.plainTextContent);
        console.log(portableText.plainTextContent.slice(0, -1));
    })
</script>
<span>

</span>
<span onclick={() => {showAnnotation = !showAnnotation}} class="group hover:font-bold hover:tracking-tight cursor-pointer">
    <span class="underline">{portableText.plainTextContent}</span>
        <div class="{showAnnotation ? 'block' : 'hidden'} my-4  sm:absolute {nextAnnotationLeft ? 'left-4 justify-end' : 'right-4 justify-start'} sm:w-[calc(50dvw-19rem)] sm:min-w-72 flex">
            <div class="sm:max-w-100  p-4  hover:border  sm:border sm:hover:border-2 min-[1150px]:!border-0 min-[1150px]:hover:!border border-primary-text rounded-xs bg-bg">
                <img oncontextmenu={(e) => {e.preventDefault(); return false}} src={getImgUrl(portableText.value.image)} alt='' class="cursor-pointer "/>
            </div>
        </div>
</span>
