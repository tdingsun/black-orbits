<script lang="ts">
    import { collectionState } from "$lib/states.svelte";
</script>


<div>
    {#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'title')}
        Collection: {collectionState.currCollection.title} ⌄
    {/if}
</div>