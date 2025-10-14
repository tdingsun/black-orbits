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
	};
	afterNavigate(() => {
		showMenu = false;
	});
</script>

<div class="">
	{#if Object.prototype.hasOwnProperty.call(collectionState.currCollection, 'title')}
		<div class="flex gap-2">
			<div
				role="menu"
				tabindex="0"
				onclick={toggleMenu}
				onkeypress={toggleMenu}
				onmouseleave={hideMenu}
				class="relative top-[-1px] w-full min-w-54 text-2xl sm:w-auto"
			>
				<div
					class="border {showMenu
						? 'rounded-b-none'
						: ''} hover:text-bg hover:bg-primary-text border-primary-text bg-bg flex cursor-pointer gap-2 rounded-xs px-2 py-1 transition-colors"
				>
					<div class="py-1 pr-0 text-xs">COLLECTION</div>

					<div class="">{collectionState.currCollection.title}</div>
				</div>
				{#if collectionState.allCollections.length}
					<div
						class="{showMenu
							? 'flex'
							: 'hidden'} bg-bg absolute w-full flex-col gap-1 border border-t-0"
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
