<script lang="ts">
	import NavHeader from './NavHeader.svelte';
	import Years from './Years.svelte';
	import Tags from './Tags.svelte';
	import PhotoLayer from './PhotoLayer.svelte';
</script>

<div class="w-full">
	<NavHeader></NavHeader>

	<div class="flex p-4">
		<div class="fixed flex w-full basis-0 flex-col gap-4">
			<Tags></Tags>
		</div>
		<div class="flex basis-full justify-center">
			<PhotoLayer></PhotoLayer>
		</div>
		<div class="fixed right-0 flex basis-0 flex-col gap-4 pr-4">
			<Years></Years>
		</div>
	</div>
</div>
