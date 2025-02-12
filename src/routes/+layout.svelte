<script lang="ts">
	import type { Snippet } from 'svelte';
	import { ClerkProvider, SignIn } from 'svelte-clerk';
	import '../app.css';
	let { children }: { children: Snippet} = $props();

	const localization = {
		signIn: {
			start: {
				title: 'Sign in',
				subtitle: ''
			}
		}
	}
</script>

<ClerkProvider {localization}>
	{@render children()}
</ClerkProvider>
