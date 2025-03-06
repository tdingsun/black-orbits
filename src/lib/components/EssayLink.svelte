<script lang="ts">
        import { collectionState } from "$lib/states.svelte";

</script>

<div>
    <a class="hover:underline" href={`/essay/${collectionState.currCollection.slug.current}`}>
        Essay
    </a>
</div>