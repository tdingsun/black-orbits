<script lang="ts">
	import LandingPageSignedOut from "$lib/components/LandingPageSignedOut.svelte";
    import MainArchive from "$lib/components/MainArchive.svelte";
	import { SignedIn, SignedOut } from "svelte-clerk";
    import type { PageData } from './$types';
    import { collectionState } from "$lib/states.svelte";
    let { data }: { data: PageData } = $props();

    collectionState.currCollection = data.currentCollection;

</script>

<SignedOut>
    <LandingPageSignedOut colophon={data.colophon}></LandingPageSignedOut>
</SignedOut>
<SignedIn>
    <MainArchive></MainArchive>
</SignedIn>

