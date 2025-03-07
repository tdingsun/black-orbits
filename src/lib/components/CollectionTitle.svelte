<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { collectionState } from '$lib/states.svelte';

    let showMenu = $state(false);
    let toggleMenu = () => {
        showMenu = !showMenu
    }
    afterNavigate(() => {
        showMenu = false;
    })
</script>

<div>
	{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'title')}
		<div class="flex gap-2">
			<div>Collection:</div>
			<div class="min-w-50 relative">
				<div onclick={toggleMenu} class=" flex gap-2 cursor-pointer hover:underline">
                    <div>                    {collectionState.currCollection.title} 
                    </div>
                    <div class="relative rotate-45 -top-0.75">
                        <div class="absolute border-r border-primary-text w-3 h-3">

                        </div>
                        <div class="absolute border-b border-primary-text w-3 h-3">

                        </div>
                    </div>


                </div>
				<div class="{showMenu ? 'flex' : 'hidden'} bg-bg absolute  flex-col gap-1 mt-2 text-sm w-full border">
					{#each collectionState.allCollections as collection}
						{#if collection.slug !== collectionState.currCollection.slug.current}

								<a href="/collection/{collection.slug}">
                                    <div class="w-full h-full p-2 hover:bg-primary-text hover:text-bg">
                                    {collection.title}
                                </div>
                                </a>
					
						{/if}
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>
