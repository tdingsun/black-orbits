<script lang="ts">
	import { enhance } from '$app/forms';
	import { getImgUrl } from '$lib/sanity';
	import { photoState, toggleForm } from '$lib/states.svelte';
	import { useClerkContext } from 'svelte-clerk';
	const ctx = useClerkContext();
	const userId = $derived(ctx.auth.userId);
	let { id, photo } = $props();

	let onSubmit = (e: SubmitEvent) => {
		if(photoState.formSubmitted){
			console.log('not submitting');
			e.preventDefault();
			photoState.showFormError = true;
			setTimeout(() => {
				photoState.showForm = false;
				photoState.showFormError = false;
		}, 3000)
		} else {
			photoState.formSubmitted = true;
		setTimeout(() => {
			photoState.showForm = false;
			photoState.formSubmitted = false;
		}, 3000)
		}
	}

	let hiddenImg;
	let canvas;

	$effect(() => {
		const ctx = canvas.getContext('2d');
		let w = hiddenImg.naturalWidth * 0.1;
		let h = w;
		let clipX = hiddenImg.naturalWidth * photoState.xPos/100 - w/2;
		let clipY = hiddenImg.naturalHeight * photoState.yPos/100 - h/2;

		ctx.clearRect(0, 0, canvas.width, canvas.height)
		if(photoState.xPos > 0){
			ctx.drawImage(hiddenImg, clipX, clipY, w, h, 0, 0, canvas.width, canvas.height);
		}
	})
</script>

<form use:enhance onsubmit={(e) => onSubmit(e)} method="POST" class="flex flex-col justify-between h-full">
	<div class="flex flex-col gap-4">
		<div >
			<div class="">Submit an Observation</div>
		</div>
		<input type="hidden" name="id" value={id} />
		<input type="hidden" name="userId" value={userId} />
		<input type="hidden" name="xPos" value={photoState.xPos} />
		<input type="hidden" name="yPos" value={photoState.yPos} />
		<div class="flex items-center gap-4">
			<img bind:this={hiddenImg} class="hidden" src={getImgUrl(photo.image)}/>
			<canvas height=96 width=96 class="border-primary-text rounded-full border" bind:this={canvas}></canvas>
			<div class="text-xs">(Click image to<br>select hotspot)</div>	
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
					class="border-primary-text h-24 w-full border p-1"
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

	<div class="flex gap-3 text-sm mt-4">
		<input
			type="submit"
			class="text-xs rounded-xs border-primary-text flex basis-1/2 cursor-pointer justify-center border px-2 py-1"
		/>

		<button
			onclick={(e) => toggleForm(e)} 
			class="text-xs rounded-xs border-primary-text flex basis-1/2 cursor-pointer justify-center border px-2 py-1"
		>
			Cancel
		</button>
	</div>
</form>
