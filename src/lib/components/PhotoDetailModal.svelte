<script lang="ts">
	import PhotoPageSidebar from '$lib/components/PhotoPageSidebar.svelte';
	import PhotoPagePhoto from '$lib/components/PhotoPagePhoto.svelte';

	let { photo } = $props();
</script>

<div class="flex h-full text-primary-text">
	<PhotoPageSidebar {photo} isModal={true}></PhotoPageSidebar>
	<PhotoPagePhoto {photo}></PhotoPagePhoto>
</div>
