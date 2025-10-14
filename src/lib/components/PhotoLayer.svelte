<script lang="ts">
	import DraggableImg from './CollectionImg.svelte';
	import { collectionState } from '$lib/states.svelte';
</script>

{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'photoObjs')}
	<div  class="flex justify-center sm:justify-start flex-wrap  gap-8 ">
		{#each collectionState.currCollection.photoObjs as photo}
			<DraggableImg {photo} totalNumPhotos={collectionState.currCollection.photoObjs.length}
			></DraggableImg>
		{/each}
	</div>
{/if}
