<script lang="ts">
        import Colophon from '$lib/components/Colophon.svelte';
	import NavHeader from '$lib/components/NavHeader.svelte';
import type { PageData } from './$types';
        let { data }: { data: PageData } = $props();
</script>

<NavHeader isContentPage={true} isColophonPage={true}></NavHeader>
<div class="p-4 max-w-xl">
    <Colophon colophon={data.colophon}></Colophon>
</div>
