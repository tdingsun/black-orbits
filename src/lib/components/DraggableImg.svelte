<script lang="ts">
    import { getImgUrl } from '$lib/sanity';
	import { tagsState } from '$lib/states.svelte';
	import { onMount } from 'svelte';
    let { photo } = $props();
    let el;

    let shouldHide = $derived(
        (photo.imgTags && photo.imgTags.length > 0 && photo.imgTags.filter((tag) => tag.value === tagsState.selectedTag).length > 0)
        ||
        (photo.year && photo.year.toString() === tagsState.selectedYear.toString())
    )
    console.log(photo.year.toString());

    console.log(tagsState.selectedYear);
    

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
                    console.log(el);
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

<img bind:this={el} class="{shouldHide ? 'hidden' : ''} draggableImg pt-1 rounded-sm w-48 absolute -left-[100dvw]" src={getImgUrl(photo.image)} alt={photo.alt ? photo.alt : ''} />


