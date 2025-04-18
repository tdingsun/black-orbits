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

<div class="flex flex-col gap-1 select-none">
    <div class="text-sm font-bold cursor-default">{tags.title}</div>
    <div class="flex flex-col gap-0.5">
        {#each tags.allTags as tag}
        <div onclick={() => toggleTag(tag)}
            class="text-sm cursor-pointer  hover:px-1 border w-max  py-0.5 rounded-xs  {tags.selectedTag === tag ? ' border-primary-text px-1' : 'border-transparent'}"
            >
            {tag} {tags.selectedTag === tag ? 'x' : ''}
        </div>
        
    {/each}
    </div>

</div>


