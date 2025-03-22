<script lang="ts">
	import NavHeader from './NavHeader.svelte';
	import Tags from './Tags.svelte';
	import PhotoLayer from './PhotoLayer.svelte';
	import { tagsState } from '$lib/states.svelte';
</script>

<div class="w-full">
	<NavHeader></NavHeader>

	<div class="flex p-4">
		<div class="fixed flex w-full basis-0 flex-col gap-8">
			<Tags tags={tagsState.imgTags}></Tags>
			<Tags tags={tagsState.colorTags}></Tags>
			<Tags tags={tagsState.timeTags}></Tags>
		</div>
		<div class="flex basis-full justify-center">
			<PhotoLayer></PhotoLayer>
		</div>
		<div class="fixed right-0 flex basis-0 flex-col gap-8 pr-4">

		</div>
	</div>
</div>
