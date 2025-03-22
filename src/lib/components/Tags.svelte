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

<div class="flex flex-col gap-2">
    <div class="text-xs font-bold">{tags.title}</div>
    <div class="flex flex-col gap-2">
        {#each tags.allTags as tag}
        <div onclick={() => toggleTag(tag)}
            class="text-xs cursor-pointer hover:border-primary-text border w-max px-1 py-0.5 rounded-xs  {tags.selectedTag === tag ? ' border-primary-text' : 'border-transparent'}"
            >
            {tag} {tags.selectedTag === tag ? 'x' : ''}
        </div>
        
    {/each}
    </div>

</div>


