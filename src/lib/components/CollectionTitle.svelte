<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { collectionState } from '$lib/states.svelte';

	let showMenu = $state(false);
	let toggleMenu = () => {
		showMenu = !showMenu;
	};
	afterNavigate(() => {
		showMenu = false;
	});
</script>

<div>
	{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'title')}
		<div class="flex gap-2">
			<div>Collection:</div>
			<div class="relative min-w-50">
				<div onclick={toggleMenu} class=" flex cursor-pointer gap-2 hover:underline">
					<div>{collectionState.currCollection.title}</div>
					<div class="relative -top-0.75 rotate-45">
						<div class="border-primary-text absolute h-3 w-3 border-r"></div>
						<div class="border-primary-text absolute h-3 w-3 border-b"></div>
					</div>
				</div>
				{#if collectionState.allCollections.length}
					<div
						class="{showMenu
							? 'flex'
							: 'hidden'} bg-bg absolute mt-2 w-full flex-col gap-1 border text-sm"
					>
						{#each collectionState.allCollections as collection}
							{#if collection.slug !== collectionState.currCollection.slug.current}
								<a href="/collection/{collection.slug}">
									<div class="hover:bg-primary-text hover:text-bg h-full w-full p-2">
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
