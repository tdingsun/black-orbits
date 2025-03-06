<script lang="ts">
    import { tagsState } from "$lib/states.svelte";

    const toggleTag = (tag: string) => {
        console.log(tag);
        if(tagsState.selectedYear === tag){
            tagsState.selectedYear = ''
        } else {
            tagsState.selectedYear = tag;

        }
        //TODO: implement tag filtering
    }
</script>

 <div>year</div>
{#each tagsState.currCollectionYears as tag}
    <div onclick={() => toggleTag(tag)}
        class="text-xs cursor-pointer hover:underline {tagsState.selectedYear === tag ? 'font-bold' : ''}"
        >
        {tag}
    </div>
    
{/each}

