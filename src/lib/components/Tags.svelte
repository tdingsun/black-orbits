<script lang="ts">
    import { tagsState } from "$lib/states.svelte";

    const toggleTag = (tag: string) => {
        console.log(tag);
        if(tagsState.selectedTag === tag){
            tagsState.selectedTag = ''
        } else {
            tagsState.selectedTag = tag;

        }
        //TODO: implement tag filtering
    }
</script>

 <div>tags</div>
{#each tagsState.currCollectionTags as tag}
    <div onclick={() => toggleTag(tag)}
        class="text-xs cursor-pointer hover:underline {tagsState.selectedTag === tag ? 'font-bold' : ''}"
        >
        {tag}
    </div>
    
{/each}

