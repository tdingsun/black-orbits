<script lang="ts">
        import Colophon from '$lib/components/Colophon.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
import type { PageData } from './$types';
        let { data }: { data: PageData } = $props();

        import { goto, afterNavigate } from '$app/navigation';

let previousPage : string = $state('/') ;

afterNavigate(({from}) => {
   previousPage = from?.url.pathname || previousPage
   console.log(previousPage);
}) 
</script>

<NavHeader isContentPage={true} isColophonPage={true} backLink={previousPage}></NavHeader>
<div class="p-4 max-w-xl">
    <Colophon colophon={data.colophon}></Colophon>
</div>
