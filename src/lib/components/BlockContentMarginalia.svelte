<script lang="ts">
	import { getImgUrl } from "$lib/sanity";
	import { siteState } from "$lib/states.svelte";
	import { onMount } from "svelte";

    let { portableText } = $props();
    
    let nextAnnotationLeft = siteState.nextAnnotationLeft;
    siteState.nextAnnotationLeft = !siteState.nextAnnotationLeft
</script>
<span class="group underline">
    {portableText.plainTextContent}<div class="group-hover:block hidden absolute {nextAnnotationLeft ? 'left-0' : 'right-0'} w-[calc(50dvw-18rem)] min-w-72 max-w-100 bg-bg p-4">
        <img oncontextmenu={(e) => {e.preventDefault(); return false}} src={getImgUrl(portableText.value.image)} alt=''/>
    </div>
</span>