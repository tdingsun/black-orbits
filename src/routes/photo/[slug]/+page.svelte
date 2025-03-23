<script lang="ts">
	import PhotoPageSidebar from '$lib/components/PhotoPageSidebar.svelte';
	import PhotoPagePhoto from '$lib/components/PhotoPagePhoto.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

</script>

<div class="flex h-dvh w-dvw">
	<PhotoPageSidebar photo={data.photo}></PhotoPageSidebar>
	<PhotoPagePhoto photo={data.photo}></PhotoPagePhoto>
</div>
