<script lang="ts">
        import { collectionState } from "$lib/states.svelte";
	import BlockContent from "./BlockContent.svelte";
    import PhotoLayer from "./PhotoLayer.svelte";

</script>

    <div class="max-w-xl">
        {#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'interviewTitle')}
            <div>
                <BlockContent value={collectionState.currCollection.interviewTitle}>
                </BlockContent>
            </div>
        {/if}
        {#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'interview')}
            <div id="interviewBody">
                <BlockContent value={collectionState.currCollection.interview}>
                </BlockContent>
            </div>
        {/if}
    </div>

