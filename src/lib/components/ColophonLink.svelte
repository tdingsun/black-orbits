<script lang="ts">
	import { siteState } from "$lib/states.svelte";

let showColophon = () => {
		siteState.showColophon = true;
	}
</script>

<button onclick={showColophon} class="cursor-pointer">Colophon</button>
            <!-- <a class="hover:underline" href="/colophon">Colophon</a> -->


