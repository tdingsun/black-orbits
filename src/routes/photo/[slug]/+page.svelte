<script lang="ts">
	import PhotoPageSidebar from '$lib/components/PhotoPageSidebar.svelte';
	import PhotoPagePhoto from '$lib/components/PhotoPagePhoto.svelte';
	import type { PageData } from './$types';
	import { afterNavigate } from '$app/navigation';
	import { photoState } from '$lib/states.svelte';
	import MobilePhotoPage from '$lib/components/MobilePhotoPage.svelte';

	let { data }: { data: PageData } = $props();

	afterNavigate(() => {
		photoState.showForm = false;
	})

</script>

<div class="sm:flex hidden h-dvh w-dvw">
	<PhotoPageSidebar photo={data.photo}></PhotoPageSidebar>
	<PhotoPagePhoto photo={data.photo}></PhotoPagePhoto>
</div>

<div class="flex flex-col sm:hidden min-h-dvh w-dvw">
	<MobilePhotoPage photo={data.photo}></MobilePhotoPage>
</div>
