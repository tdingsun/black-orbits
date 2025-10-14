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

<div class="flex sm:flex-col gap-4 sm:gap-1 select-none font-mono text-xs">
    <div class=" uppercase tracking-wide font-bold cursor-default py-0.5 border border-transparent min-w-10">{tags.title}</div>
    <div class="flex flex-wrap gap-4 sm:gap-0.5 sm:gap-x-2">
        {#each tags.allTags as tag}
        <div onclick={() => toggleTag(tag)}
            class=" cursor-pointer px-1  {tags.selectedTag === tag ? '' : 'sm:hover:underline'} sm:px-0  relative border w-max  py-0.5 rounded-xs whitespace-nowrap  {tags.selectedTag === tag ? ' border-primary-text sm:px-1' : 'border-transparent'}"
            >
            {tag} {tags.selectedTag === tag ? '×' : ''}
        </div>
        
    {/each}
    </div>

</div>


