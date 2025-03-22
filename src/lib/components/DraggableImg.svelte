<script lang="ts">
    import { getImgUrl } from '$lib/sanity';
	import { tagsState } from '$lib/states.svelte';
	import { onMount } from 'svelte';
    let { photo } = $props();
    let el;

    let shouldShow = $derived(
        (
            (!tagsState.imgTags.selectedTag || (photo.imgTags && photo.imgTags.length > 0 && photo.imgTags.filter((tag) => tag.value === tagsState.imgTags.selectedTag).length > 0))
            &&
            (!tagsState.timeTags.selectedTag || (photo.time && photo.time.length > 0 && photo.time.filter((tag) => tag.value === tagsState.timeTags.selectedTag).length > 0))
            &&
            (!tagsState.colorTags.selectedTag || (photo.color && photo.color.length > 0 && photo.color.filter((tag) => tag.value === tagsState.colorTags.selectedTag).length > 0))
        )

    )

    onMount(() => {

        // el.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
        let xOffset = 0;
        // if(Math.random() < 0.5){
            //left side
            xOffset = (Math.floor(Math.random() * 4) * 100) + 100

        // } 
        // else {
        //     //right side
        //     xOffset = window.innerWidth - el.clientWidth - Math.floor(Math.random() * 50)
        // }

        // let interviewEl = document.getElementById('interviewBody');
        // let yOffset = Math.floor(Math.random() * interviewEl.clientHeight);
        el.style.left = xOffset + 'px';
        // el.style.top = yOffset + 'px';

        dragElement(el);

        function dragElement(el) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            el.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.querySelectorAll('.draggableImg').forEach(el => {
                    el.style.zIndex = 0;
                })
                el.style.zIndex = 1;

                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
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
                el.style.top = (el.offsetTop - pos2) + "px";
                el.style.left = (el.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    })

</script>

<div bind:this={el} class="{shouldShow ? '' : 'hidden'} w-48 draggableImg cursor-grab active:cursor-grabbing absolute -left-[100dvw]" >
    <img class="  pt-1 rounded-sm w-48  " src={getImgUrl(photo.image)} alt={photo.alt ? photo.alt : ''} />
    <div>
        <a href={`/photo/${photo.slug.current}`} class="hover:underline text-xs">
            See More
        </a></div>
    </div>
