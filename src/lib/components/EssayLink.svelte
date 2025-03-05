<script lang="ts">
        import { collectionState } from "$lib/states.svelte";

</script>

<div>
    <a href={`/essay/${collectionState.currCollection.slug.current}`}>
        Link to essay
    </a>
</div>