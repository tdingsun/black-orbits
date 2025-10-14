<script lang="ts">

	import BlockContent from './BlockContent.svelte';


	let { photo } = $props();

</script>

<div class="font-mono">
<div class="flex py-1 px-4 gap-2 border-y border-dotted">
					<div class="w-24 flex-shrink-0 border-r border-dotted">title</div>
					<div>{photo.title}</div>
				</div>
				<div class="flex py-1  px-4 gap-2 border-b border-dotted">
					<div class="w-24 flex-shrink-0 border-r border-dotted">attribution</div>
					<div><BlockContent value={photo.attribution}></BlockContent></div>
				</div>
				<div class="flex py-1  px-4 gap-2 border-b border-dotted">
					<div class="w-24 flex-shrink-0 border-r border-dotted">size</div>
					<div>{photo.size}</div>
				</div>
				<div class="flex py-1  px-4 gap-2 border-b border-dotted">
					<div class="w-24 flex-shrink-0 border-r border-dotted">year</div>
					<div class="flex gap-2">
						{#each photo.time as tag}
							<div>{tag.value}</div>
						{/each}
					</div>
				</div>
				<div class="flex py-1  px-4 gap-2 border-b border-dotted">
					<div class="w-24 flex-shrink-0 border-r border-dotted">color</div>
					<div class="flex gap-2">
						{#each photo.color as tag}
							<div>{tag.value}</div>
						{/each}
					</div>
				</div>
				<div class="flex py-1  px-4 gap-2 border-b border-dotted">
					<div class="w-24 flex-shrink-0 border-r border-dotted">tags</div>
					<div class="flex gap-2">
						{#each photo.imgTags as tag}
							<div>{tag.value}</div>
						{/each}
					</div>
				</div>
</div>


