<script lang="ts">
        import { collectionState } from "$lib/states.svelte";

</script>

{#if collectionState.currCollection.slug}
<div>
    <a class="hover:underline font-bold text-sm" href={`/essay/${collectionState.currCollection?.slug?.current}`}>
        [Essay]
    </a>
</div>
{/if}
