<script lang="ts">
  import DraggableImg from './DraggableImg.svelte';

        import { collectionState } from "$lib/states.svelte";
    import { getImgUrl } from '$lib/sanity';

</script>

<div>
    {#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'photoObjs')}
        {#each collectionState.currCollection.photoObjs as photo}
            <DraggableImg {photo}></DraggableImg>
        {/each}
    {/if}

</div>