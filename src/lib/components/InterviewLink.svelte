<script lang="ts">
    import { collectionState } from "$lib/states.svelte";

</script>

<div>
<a href={`/interview/${collectionState.currCollection.slug.current}`}>
    Interview
</a>
</div>