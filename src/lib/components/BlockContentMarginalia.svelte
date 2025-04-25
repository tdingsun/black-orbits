<script lang="ts">
	import { getImgUrl } from "$lib/sanity";
	import { siteState } from "$lib/states.svelte";
	import { onMount } from "svelte";

    let { portableText } = $props();
    
    let nextAnnotationLeft = siteState.nextAnnotationLeft;
    siteState.nextAnnotationLeft = !siteState.nextAnnotationLeft;

    let showAnnotation = $state(false)
</script>
<span onclick={() => {showAnnotation = !showAnnotation}} class="group hover:font-bold hover:tracking-tight underline cursor-pointer">
    {portableText.plainTextContent}<div class="{showAnnotation ? 'block' : 'hidden'}  sm:absolute {nextAnnotationLeft ? 'left-4' : 'right-4'} sm:w-[calc(50dvw-18rem)] sm:min-w-72 sm:max-w-100 bg-bg p-4 border hover:border-2 border-primary-text rounded-xs">
        <img oncontextmenu={(e) => {e.preventDefault(); return false}} src={getImgUrl(portableText.value.image)} alt='' class="cursor-pointer "/>
    </div>
</span>