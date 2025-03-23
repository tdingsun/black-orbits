<script lang="ts">
	import DraggableImg from './DraggableImg.svelte';
	import { collectionState } from '$lib/states.svelte';
</script>

{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'photoObjs')}
	<div class="flex flex-wrap justify-center gap-8">
		{#each collectionState.currCollection.photoObjs as photo}
			<DraggableImg {photo} totalNumPhotos={collectionState.currCollection.photoObjs.length}
			></DraggableImg>
		{/each}
	</div>
{/if}
