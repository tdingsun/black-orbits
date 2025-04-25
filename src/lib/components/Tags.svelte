<script lang="ts">
    let { tags } = $props();

    const toggleTag = (tag: string) => {
        if(tags.selectedTag === tag){
            tags.selectedTag = ''
        } else {
            tags.selectedTag = tag;

        }
        //TODO: implement tag filtering
    }
</script>

<div class="flex sm:flex-col gap-4 sm:gap-1 select-none">
    <div class="text-sm font-bold cursor-default py-0.5 border border-transparent">{tags.title}</div>
    <div class="flex sm:flex-col flex-wrap gap-4 sm:gap-0.5">
        {#each tags.allTags as tag}
        <div onclick={() => toggleTag(tag)}
            class="text-sm cursor-pointer px-1 hover:font-bold sm:hover:font-normal sm:px-0  sm:hover:px-1 border w-max  py-0.5 rounded-xs  {tags.selectedTag === tag ? ' border-primary-text sm:px-1' : 'border-transparent'}"
            >
            {tag} {tags.selectedTag === tag ? 'x' : ''}
        </div>
        
    {/each}
    </div>

</div>


