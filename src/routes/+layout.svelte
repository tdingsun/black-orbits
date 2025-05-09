<script lang="ts">
	import type { Snippet } from 'svelte';
	import { ClerkProvider } from 'svelte-clerk';
	import '../app.css';
	import Colophon from '$lib/components/Colophon.svelte';
	import { siteState } from '$lib/states.svelte';
	import { onNavigate } from '$app/navigation';

	let { children, data } = $props();

	const localization = {
		signIn: {
			start: {
				title: 'Sign in',
				subtitle: '',
				
			},
		},
		formButtonPrimary: '[Continue]'

	}

	let hideColophon = () => {
		siteState.showColophon = false;
	}


// onNavigate((navigation) => {
// 	if (!document.startViewTransition) return;

// 	return new Promise((resolve) => {
// 		document.startViewTransition(async () => {
// 			resolve();
// 			await navigation.complete;
// 		});
// 	});
// });

</script>

<ClerkProvider {localization}>
	{@render children()}
	<div onclick={hideColophon} class="h-dvh w-dvw  fixed z-9999 top-0 transition-[right] duration-500 {siteState.showColophon ? 'right-0' : '-right-[100dvw]'}">
		<div onclick={(e) => e.stopPropagation()}  class="w-full h-dvh w-md max-w-[calc(100dvw-4rem)] right-0 absolute bg-yellow-50  p-4 overflow-auto ">

			<Colophon colophon={data.colophon} >
				<h1 class="text-2xl mb-8">Colophon</h1>
			</Colophon>
			<button onclick={hideColophon} class="absolute right-4 top-2.75 text-4xl cursor-pointer">×</button>
		</div>
	</div>	
</ClerkProvider>

