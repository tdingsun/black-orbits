<script lang="ts">
	import BlockContent from '$lib/components/BlockContent.svelte';
	import ContentPageNavHeader from '$lib/components/ContentPageNavHeader.svelte';
import StyledButton from '$lib/components/StyledButton.svelte';
	import { onMount } from 'svelte';

	let { data } = $props();
	let formEl: HTMLFormElement;
	let showForm = $state(true);
	let loading = $state(false);
	onMount(() => {
		formEl.addEventListener('submit', function (e) {
			e.preventDefault();
			loading = true;
			showForm = false;
			const formData = new FormData(formEl);
			const data = Object.fromEntries(formData);
			const action = e.target.action;

			fetch(action, {
				method: 'POST',
				headers: {
					'Content-Type': 'text/plain;charset=utf-8'
				},
				body: JSON.stringify(data)
			}).then((res) => {
				console.log(res);
				loading = false;
				setTimeout(() => {
					showForm = true;
				}, 3000);
			});
		});
	});
</script>

<ContentPageNavHeader></ContentPageNavHeader>

<div class="flex flex-col items-center justify-center py-12 px-4">
	{#if showForm}
		<form
			bind:this={formEl}
			id="future-writers-form"
			method="POST"
			action="https://script.google.com/macros/s/AKfycbxgTxuzh6EDtLHdQOKs5aL8KwHC0G66QPoHi33VCli2BKapCq7Zqx02kby7pdvVhUavZg/exec"
			class="flex max-w-xl p-8 pt-6 flex-col border border-dotted bg-amber-50"
		>
			<h1 class="mb-2 text-4xl">{data.formContent.formTitle}</h1>
            <div class="mb-8">
                <BlockContent value={data.formContent.formDek}></BlockContent>
            </div>
			<div class="flex flex-col gap-6 text-lg">
				<div class="flex flex-col gap-1">
					<label for="email" class="font-mono text-sm ">Email</label>
					<input required class="rounded-xs border p-1 bg-bg" name="email" type="email" />
				</div>

				<div class="flex flex-col gap-1">
					<label for="name" class="font-mono text-sm">Name</label>
					<input required class="rounded-xs border p-1 bg-bg" name="name" type="text" />
				</div>

				<div class="flex flex-col gap-1">
					<label for="dob" class="font-mono text-sm">Date of Birth</label>
					<input required class="rounded-xs border p-1 bg-bg" name="dob" type="text" />
				</div>
				<div class="flex flex-col gap-1">
					<label for="location" class="font-mono text-sm">Location</label>
					<input required class="rounded-xs border p-1 bg-bg" name="location" type="text" />
				</div>
				<div class="flex flex-col gap-1">
					<label for="writing_samples" class="font-mono text-sm">Links to 3 Writing Samples</label>
					<textarea required class="rounded-xs border p-1 bg-bg" name="writing_samples" />
				</div>
				<div class="flex flex-col gap-1">
					<label for="which_collection" class="font-mono text-sm">Which collection are you interested in writing about?</label
					>
					<select class="rounded-xs border p-1 bg-bg" name="which_collection">
						<option hidden disabled selected value> -- Select a Collection -- </option>
						{#each data.allCollectionTitles as collection}
							<option value={collection.title}>{collection.title}</option>
						{/each}
					</select>
				</div>
				<button
					type="submit"
					class="border-primary-text max-w-36 px-8 self-end hover:bg-primary-text hover:text-amber-50 min-w-12 cursor-pointer rounded-xs border p-1  py-1 mt-4 text-center text-lg whitespace-nowrap transition-colors"
					>Submit</button
				>
			</div>
		</form>
	{:else if loading}
		<h1 class="mb-4 text-4xl">Submitting Form...</h1>
	{:else}
		<h1 class="mb-4 text-4xl">Thank you for your interest!</h1>
	{/if}
</div>
