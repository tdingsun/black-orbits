<script lang="ts">
    import { tagsState } from "$lib/states.svelte";

    const toggleTag = (tag: string) => {
        console.log(tag);
        //TODO: implement tag filtering
    }
</script>

 <div>tags</div>
{#each tagsState.currCollectionTags as tag}
    <div onclick={() => toggleTag(tag)}
        class="text-xs cursor-pointer"
        >
        {tag}
    </div>
    
{/each}

