<script lang="ts">
	import StyledButton from '$lib/components/StyledButton.svelte';
	import { onMount } from 'svelte';

	let { data } = $props();
	console.log(data);
	let formEl: HTMLFormElement;
	let showForm = true;
	onMount(() => {
		formEl.addEventListener('submit', function (e) {
			console.log('here');
			console.log(formEl);
			e.preventDefault();
			const data = new FormData(formEl);
			console.log(data);
			const action = e.target.action;
			console.log(action);

			fetch(action, {
				method: 'POST',
				body: data
			}).then(() => {
				showForm = false;
				setTimeout(() => {
					showForm = true;
				}, 3000);
			});
		});
	});
</script>

<div class="flex flex-col items-center justify-center py-12">
	{#if showForm}
		<form
			bind:this={formEl}
			id="future-writers-form"
			method="POST"
			action="https://script.google.com/macros/s/AKfycbySw1bpwpeYF1d9tk_teZQwupoqmFf6IV7DaZHvmZJeLzvYo4nqIGPkNCvG8Yxdtr8X0A/exec"
			class="flex max-w-lg flex-col"
		>
			<h1 class="mb-4 text-4xl">Call for Future Writers</h1>
			<div class="flex flex-col gap-4 text-lg">
				<div class="flex flex-col gap-1">
					<label for="email">Email</label>
					<input required class="rounded-xs border p-1" name="email" type="email" />
				</div>

				<div class="flex flex-col gap-1">
					<label for="name">Name</label>
					<input required class="rounded-xs border p-1" name="name" type="text" />
				</div>

				<div class="flex flex-col gap-1">
					<label for="dob">Date of Birth</label>
					<input required class="rounded-xs border p-1" name="dob" type="text" />
				</div>
				<div class="flex flex-col gap-1">
					<label for="location">Location</label>
					<input required class="rounded-xs border p-1" name="location" type="text" />
				</div>
				<div class="flex flex-col gap-1">
					<label for="writing_samples">Links to 3 Writing Samples</label>
					<textarea required class="rounded-xs border p-1" name="writing_samples" />
				</div>
				<div class="flex flex-col gap-1">
					<label for="which_collection">Which collection are you interested in writing about?</label
					>
					<select class="rounded-xs border p-1" name="which_collection">
						<option hidden disabled selected value> -- Select a Collection -- </option>
						{#each data.allCollectionTitles as collection}
							<option value={collection.title}>{collection.title}</option>
						{/each}
					</select>
				</div>
				<StyledButton>
					<button type="submit" class="cursor-pointer p-1 text-lg">Submit</button>
				</StyledButton>
			</div>
		</form>
	{:else}
		<h1 class="mb-4 text-4xl">Thank you for your interest!</h1>
	{/if}
</div>
