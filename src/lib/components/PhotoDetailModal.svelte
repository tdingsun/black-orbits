<script lang="ts">
	import PhotoPageSidebar from '$lib/components/PhotoPageSidebar.svelte';
	import PhotoPagePhoto from '$lib/components/PhotoPagePhoto.svelte';
	import MobilePhotoPage from './MobilePhotoPage.svelte';

	let { photo } = $props();
</script>

<div class="hidden sm:flex h-full text-primary-text ">
	<PhotoPageSidebar {photo} isModal={true}></PhotoPageSidebar>
	<PhotoPagePhoto {photo} isModal={true}></PhotoPagePhoto>
</div>

<div class="flex sm:hidden h-full text-primary-text flex-col overflow-auto">
	<MobilePhotoPage {photo} isModal={true}></MobilePhotoPage>
</div>
