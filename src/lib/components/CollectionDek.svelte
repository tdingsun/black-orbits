<script lang="ts">
    import { collectionState } from "$lib/states.svelte";
	import BlockContent from "./BlockContent.svelte";

</script>

<div class="max-w-lg text-sm">
    {#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'dek')}
        <BlockContent value={collectionState.currCollection.dek}>
        </BlockContent>
    {/if}
</div>
