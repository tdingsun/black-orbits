<script lang="ts">
        import { collectionState } from "$lib/states.svelte";

</script>

{#if collectionState.currCollection.slug}
<div>
    <a class="hover:underline" href={`/essay/${collectionState.currCollection?.slug?.current}`}>
        Essay
    </a>
</div>
{/if}
