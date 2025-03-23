<script lang="ts">
	import type { Snippet } from 'svelte';
	import { ClerkProvider } from 'svelte-clerk';
	import '../app.css';
	import Colophon from '$lib/components/Colophon.svelte';
	import { siteState } from '$lib/states.svelte';
	let { children, data } = $props();

	const localization = {
		signIn: {
			start: {
				title: 'Sign in',
				subtitle: ''
			}
		}
	}

	let hideColophon = () => {
		siteState.showColophon = false;
	}
</script>

<ClerkProvider {localization}>
	{@render children()}
	<div onclick={hideColophon} class="h-dvh w-dvw  fixed z-9999 top-0 transition-[right] duration-500 {siteState.showColophon ? 'right-0' : '-right-[100dvw]'}">
		<div onclick={(e) => e.stopPropagation()}  class="w-full h-dvh max-w-xs right-0 absolute bg-yellow-50  p-4 overflow-auto ">
			<Colophon colophon={data.colophon} ></Colophon>
			<button onclick={hideColophon} class="absolute right-4 top-4">X</button>
		</div>
	</div>	
</ClerkProvider>

