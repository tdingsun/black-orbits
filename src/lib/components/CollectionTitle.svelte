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

<div>
	{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'title')}
		<div class="flex gap-2">
			<div class="py-1 pr-2">Collection:</div>
			<div role="menu" tabindex="0" onclick={toggleMenu} onkeypress={toggleMenu}  onmouseleave={hideMenu} class=" top-[-1px] relative min-w-50">
				<div  class="border {showMenu ? 'border-primary-text' : 'border-transparent'} hover:border-primary-text rounded-xs bg-bg px-2 py-1 flex cursor-pointer gap-2">
					<div>{collectionState.currCollection.title}</div>
					<div class="relative top-0.25 rotate-45">
						<div class="border-primary-text absolute h-2 w-2 border-r-[1.5px]"></div>
						<div class="border-primary-text absolute h-2 w-2 border-b-[1.5px]"></div>
					</div>
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
