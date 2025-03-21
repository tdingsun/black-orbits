<script lang="ts">
	import LandingPageSignedOut from "$lib/components/LandingPageSignedOut.svelte";
    import MainArchive from "$lib/components/MainArchive.svelte";
	import { SignedIn, SignedOut } from "svelte-clerk";
    import type { PageData } from './$types';
    import { collectionState, tagsState } from "$lib/states.svelte";
	import { afterNavigate } from "$app/navigation";
    let { data }: { data: PageData } = $props();

    afterNavigate(() => {
        collectionState.currCollection = data.currentCollection;
        tagsState.currCollectionTags = data.tags;
        tagsState.currCollectionYears =data.yearTags;
    })

</script>

<MainArchive></MainArchive>
