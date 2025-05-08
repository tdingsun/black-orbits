<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { collectionState } from '$lib/states.svelte';

	let showMenu = $state(false);
	let toggleMenu = () => {
		showMenu = !showMenu;
	};
	let hideMenu = () => {
		showMenu = false;
	};
	let showTheMenu = () => {
		showMenu = true;
	}
	afterNavigate(() => {
		showMenu = false;
	});
</script>

<div class="">
	{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'title')}
		<div class="flex gap-2">
			<div class="py-1 pr-0 font-bold text-sm">Collection:</div>
			<div role="menu" tabindex="0" onclick={toggleMenu} onkeypress={toggleMenu}  onmouseleave={hideMenu} class="text-2xl top-[-1px] relative min-w-54">
				<div  class="border {showMenu ? 'b' : ''} hover:text-bg hover:bg-primary-text border-primary-text rounded-xs bg-bg px-2 py-1 flex cursor-pointer gap-1">
					<div class="l">{collectionState.currCollection.title}</div>
				</div>
				{#if collectionState.allCollections.length}
					<div
						class="{showMenu
							? 'flex'
							: 'hidden'} bg-bg absolute  w-full flex-col gap-1 border border-t-0 "
					>
						{#each collectionState.allCollections as collection}
							{#if collection.slug !== collectionState.currCollection.slug.current}
								<a role="menu" tabindex="0" href="/collection/{collection.slug}">
									<div class="hover:bg-primary-text hover:text-bg h-full w-full px-2 py-1">
										{collection.title}
									</div>
								</a>
							{/if}
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
