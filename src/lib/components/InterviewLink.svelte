<script lang="ts">
    import { collectionState } from "$lib/states.svelte";

</script>

<div>
<a class="hover:underline font-bold text-sm" href={`/interview/${collectionState.currCollection?.slug?.current}`}>
    [Interview]
</a>
</div>