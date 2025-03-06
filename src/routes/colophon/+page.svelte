<script lang="ts">
        import Colophon from '$lib/components/Colophon.svelte';
import type { PageData } from './$types';
        let { data }: { data: PageData } = $props();
</script>

<Colophon colophon={data.colophon}></Colophon>