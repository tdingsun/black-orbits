<script lang="ts">
  import DraggableImg from './DraggableImg.svelte';

        import { collectionState } from "$lib/states.svelte";
    import { getImgUrl } from '$lib/sanity';

</script>

{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'photoObjs')}

<div class="flex flex-wrap gap-8 justify-center">
        {#each collectionState.currCollection.photoObjs as photo}
            <DraggableImg {photo} totalNumPhotos={collectionState.currCollection.photoObjs.length}></DraggableImg>
        {/each}

</div>

{/if}
