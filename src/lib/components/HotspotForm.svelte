<script lang="ts">
	import { enhance } from '$app/forms';
	import { getImgUrl } from '$lib/sanity';

	import { photoState } from '$lib/states.svelte';
	import { useClerkContext } from 'svelte-clerk';
	const ctx = useClerkContext();
	const userId = $derived(ctx.auth.userId);
	console.log(ctx.auth);
	let { id, photo } = $props();

	let toggleForm = (e: MouseEvent) => {
		e.preventDefault();
		photoState.showForm = !photoState.showForm;
	};

	let onSubmit = () => {
		console.log('here');
		if(photoState.formSubmitted){
			console.log('not submitting');
			return false;
		} else {

			photoState.formSubmitted = true;
		setTimeout(() => {
			console.log('timeout');
			photoState.showForm = false;
			photoState.formSubmitted = false;
		}, 3000)
		return false;

		}

	}
</script>

<form use:enhance onsubmit={onSubmit} method="POST" class="flex flex-col justify-between  h-full">
	<div class="flex flex-col gap-4">
		<div >
			<div class="font-bold">Submit an Observation</div>
			<div class="">(Click image to select hotspot)</div>

		</div>
		<input type="hidden" name="id" value={id} />
		<input type="hidden" name="userId" value={userId} />
		<input type="hidden" name="xPos" value={photoState.xPos} />
		<input type="hidden" name="yPos" value={photoState.yPos} />
		<div style="background-image: url({getImgUrl(photo.image)}); background-position: {photoState.xPos}% {photoState.yPos}%; background-size: 800%;" class=" border-primary-text my-2 h-24 w-24 rounded-full border relative">
		</div>
		<div>
			<label>
				<div class="text-xs">Title</div>
				<input
					required={true}
					minlength="1"
					maxlength="90"
					name="title"
					class="border-primary-text w-full border p-1"
				/>
			</label>
		</div>
		<div>
			<label>
				<div class="text-xs">Observation</div>
				<textarea
					required={true}
					minlength="1"
					maxlength="1000"
					name="comment"
					placeholder="Ex. What is this detail? When is this photo from?"
					class="border-primary-text h-48 w-full border p-1"
				></textarea>
			</label>
		</div>

		<div>
			<label>
				<div class="text-xs">Name</div>
				<input required={true} maxlength="90" name="name" class="border-primary-text w-full border p-1" />
			</label>
		</div>
		<div class="pb-4">
			<label>
				<div class="text-xs">Email</div>
				<input required={true} maxlength="90" name="email" type="email" class="border-primary-text w-full border p-1" />
			</label>
		</div>
	</div>

	<div class="flex gap-3 text-sm">
		<input
			type="submit"
			formmethod="post"
			class="border-primary-text flex basis-1/2 cursor-pointer justify-center border px-2 py-1"
		/>

		<button
			onclick={(e) => toggleForm(e)} 
			class="border-primary-text flex basis-1/2 cursor-pointer justify-center border px-2 py-1"
		>
			Cancel
		</button>
	</div>
</form>
