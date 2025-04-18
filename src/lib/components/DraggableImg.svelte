<script lang="ts">
	import { goto } from '$app/navigation';
	import { getImgUrl } from '$lib/sanity';
	import { tagsState } from '$lib/states.svelte';
	import { onMount } from 'svelte';
	let { photo, totalNumPhotos } = $props();
	let el;

    let imgHeight = $state(0);
    let imgBackHeight = $state(0);
    let isDragging = $state(false);

	let shouldShow = $derived(
		(!tagsState.imgTags.selectedTag ||
			(photo.imgTags &&
				photo.imgTags.length > 0 &&
				photo.imgTags.filter((tag) => tag.value === tagsState.imgTags.selectedTag).length > 0)) &&
			(!tagsState.timeTags.selectedTag ||
				(photo.time &&
					photo.time.length > 0 &&
					photo.time.filter((tag) => tag.value === tagsState.timeTags.selectedTag).length > 0)) &&
			(!tagsState.colorTags.selectedTag ||
				(photo.color &&
					photo.color.length > 0 &&
					photo.color.filter((tag) => tag.value === tagsState.colorTags.selectedTag).length > 0))
	);

	onMount(() => {
        let randRotate = Math.random() * 5 - 2.5;
        let randX = Math.random() * 10 - 5;
        let randY = Math.random() * 10 - 5
        el.style.transform = `rotate(${randRotate}deg) translateX(${randX}px) translateY(${randY}px)`
		dragElement(el);


		function dragElement(el) {
			var pos1 = 0,
				pos2 = 0,
				pos3 = 0,
				pos4 = 0;
			el.onmousedown = dragMouseDown;

			function dragMouseDown(e) {
				e = e || window.event;
				e.preventDefault();
				pos3 = e.clientX;
				pos4 = e.clientY;
                let oldZ = el.style.zIndex;
				document.querySelectorAll('.draggableImg').forEach((el) => {
                    if(el.style.zIndex > oldZ) {
                        el.style.zIndex = el.style.zIndex - 1;
                    }
				});
				el.style.zIndex = totalNumPhotos;
				document.onmouseup = closeDragElement;
				document.onmousemove = elementDrag;
                isDragging = false;
			}

			function elementDrag(e) {
				e = e || window.event;
				e.preventDefault();
				// calculate the new cursor position:
				pos1 = pos3 - e.clientX;
				pos2 = pos4 - e.clientY;
				pos3 = e.clientX;
				pos4 = e.clientY;
				// set the element's new position:

				el.style.top = el.offsetTop - pos2 + 'px';
				el.style.left = el.offsetLeft - pos1 + 'px';
				el.style.position = 'absolute';
				el.style.cursor = 'grabbing';
                isDragging = true;

			}

			function closeDragElement() {
				// stop moving when mouse button is released:
				document.onmouseup = null;
				document.onmousemove = null;
				el.style.cursor = 'pointer';
                if(!isDragging){
                    goto(`/photo/${photo.slug.current}`)
                }
			}
		}
	});
</script>

<a href={`/photo/${photo.slug.current}`} oncontextmenu={(e) => {e.preventDefault(); return false}}>
	<div style="height: {Math.max(imgHeight, imgBackHeight)}px" class="relative w-48 pointer-events-none">
		<div
			 style="z-index: 1"
			class="{shouldShow
				? ''
				: 'hidden'} hover:!transform-none transition-transform pointer-events-auto draggableImg -left-[100dvw] w-full cursor-pointer "
		>
			<div class="group w-full perspective-distant">
				<div
					class="{photo.image && photo.imagebackside
						? 'group-hover:rotate-y-180'
						: ''}  w-full transition-transform duration-500 transform-3d "
				>
					{#if photo.imagebackside && photo.image}
						<img
							bind:clientHeight={imgHeight}
							class=" w-full rounded-sm rotate-y-180 z-0 absolute top-0 backface-hidden active:border active:border-primary-text"
							src={getImgUrl(photo.image)}
							alt={photo.alt ? photo.alt : ''}
						/>
						<img
							bind:clientHeight={imgBackHeight}
							class="  w-full  rounded-sm backface-hidden active:border active:border-primary-text"
							src={getImgUrl(photo.imagebackside)}
							alt={photo.alt ? photo.alt : ''}
						/>
					{:else if photo.image}
						<img
							bind:clientHeight={imgHeight}
							class=" w-full rounded-sm backface-hidden active:border active:border-primary-text"
							src={getImgUrl(photo.image)}
							alt={photo.alt ? photo.alt : ''}
						/>
					{/if}
				</div>
			</div>
	
			<!-- <div>
				<a href={`/photo/${photo.slug.current}`} class="text-xs hover:underline"> See More </a>
			</div> -->
		</div>
	</div>
</a>

