<script lang="ts">
	import NavHeader from './NavHeader.svelte';
	import Tags from './Tags.svelte';
	import PhotoLayer from './PhotoLayer.svelte';
	import { tagsState } from '$lib/states.svelte';
	import ColophonLink from './ColophonLink.svelte';
	import StyledButton from './StyledButton.svelte';
</script>

<div class="w-full">
	<NavHeader></NavHeader>

	<div class="flex p-4  ">
		<div class="fixed flex basis-0 flex-col gap-8 w-24">
			{#if tagsState.imgTags.allTags.size}
				<Tags tags={tagsState.imgTags}></Tags>
			{/if}
			{#if tagsState.colorTags.allTags.size}
			<Tags tags={tagsState.colorTags}></Tags>
			{/if}
			{#if tagsState.timeTags.allTags.size}
			<Tags tags={tagsState.timeTags}></Tags>
			{/if}
		</div>
		<div class="px-28 py-4 flex basis-full flex-shrink flex-grow justify-center ">
			<PhotoLayer></PhotoLayer>
		</div>
		<div class="fixed right-0 flex basis-0 flex-col gap-8 pr-4">

		</div>
	</div>
</div>
