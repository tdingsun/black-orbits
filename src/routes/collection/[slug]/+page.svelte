<script lang="ts">
    import CollectionPage from "$lib/components/CollectionPage.svelte";
    import type { PageData } from './$types';
    import { collectionState, tagsState } from "$lib/states.svelte";
	import { afterNavigate } from "$app/navigation";
    let { data }: { data: PageData } = $props();

    afterNavigate(() => {
        collectionState.currCollection = data.currentCollection;
        tagsState.imgTags.allTags = data.tags;
        tagsState.timeTags.allTags = data.timeTags;
        tagsState.colorTags.allTags = data.colorTags;
    })

</script>

<CollectionPage></CollectionPage>
