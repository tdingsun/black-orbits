<script lang="ts">
	import LogInSignUp from './LogInSignUp.svelte';

	import bgImg from '$lib/images/scratches3.png';
	import Colophon from './Colophon.svelte';

	import logo0 from '$lib/images/logos/logo-0.svg';
	import logo1 from '$lib/images/logos/logo-1.svg';
	import logo2 from '$lib/images/logos/logo-2.svg';
	import logo3 from '$lib/images/logos/logo-3.svg';
	import logo4 from '$lib/images/logos/logo-4.svg';
	import logo5 from '$lib/images/logos/logo-5.svg';
	import logo6 from '$lib/images/logos/logo-6.svg';
	import logo7 from '$lib/images/logos/logo-7.svg';
	import logo8 from '$lib/images/logos/logo-8.svg';
	import logo9 from '$lib/images/logos/logo-9.svg';
	import logo10 from '$lib/images/logos/logo-10.svg';
	import logo11 from '$lib/images/logos/logo-11.svg';
	import logo12 from '$lib/images/logos/logo-12.svg';
	import logo13 from '$lib/images/logos/logo-13.svg';
	import logo14 from '$lib/images/logos/logo-14.svg';
	import logo15 from '$lib/images/logos/logo-15.svg';
	import logo16 from '$lib/images/logos/logo-16.svg';
	import logo17 from '$lib/images/logos/logo-17.svg';
	import logo18 from '$lib/images/logos/logo-18.svg';
	import logo19 from '$lib/images/logos/logo-19.svg';
	import logo20 from '$lib/images/logos/logo-20.svg';
	import logo21 from '$lib/images/logos/logo-21.svg';
	import logo22 from '$lib/images/logos/logo-22.svg';
	import logo23 from '$lib/images/logos/logo-23.svg';
	import logo24 from '$lib/images/logos/logo-24.svg';
	import logo25 from '$lib/images/logos/logo-25.svg';
	import logo26 from '$lib/images/logos/logo-26.svg';
	import logo27 from '$lib/images/logos/logo-27.svg';
	import logo28 from '$lib/images/logos/logo-28.svg';
	import { shuffle } from '$lib/utils';
	import { onMount } from 'svelte';
	import { getImgUrl } from '$lib/sanity';

	let logos = [
		logo1,
		logo2,
		logo3,
		logo4,
		logo5,
		logo6,
		logo7,
		logo8,
		logo9,
		logo10,
		logo11,
		logo12,
		logo13,
		logo14,
		logo15,
		logo16,
		logo17,
		logo18,
		logo19,
		logo20,
		logo21,
		logo22,
		logo23,
		logo24,
		logo25,
		logo26,
		logo27,
		logo28
	];
	shuffle(logos);
	let currLogo = $state(0);
	let { colophon, mobileImg } = $props();
	const changeLogo = () => {
		currLogo = (currLogo + 1) % (logos.length - 1);
	};

	onMount(() => {
		setInterval(() => {
			changeLogo();
		}, 3000);
	});
</script>

<img
	src={bgImg}
	class="pointer-events-none fixed top-0 left-0 z-1 h-full w-full object-cover object-top"
/>

<div class="hidden sm:block">
	<div class=" border-primary-text bg-bg flex items-center border-b border-dotted sm:min-h-[50dvh]">
		<img
			src={logo0}
			class=" fill-primary-text text-primary-text absolute h-[25dvw] w-full cursor-pointer object-fill p-2 transition-opacity duration-500 select-none sm:p-4"
		/>
		{#each logos as logo, idx}
			<img
				onclick={changeLogo}
				src={logo}
				class="{idx === currLogo
					? 'relative opacity-100'
					: 'absolute opacity-5'} fill-primary-text text-primary-text h-[25dvw] w-full cursor-pointer object-fill p-2 transition-opacity duration-500 select-none sm:p-4"
			/>
		{/each}
	</div>

	<div class="text-primary-text flex min-h-dvh min-w-dvw flex-col sm:flex-row">
		<div
			class="text-primary-text hidden w-1/2 flex-shrink-0 flex-grow-0 basis-1/2 border-r border-dotted p-8 sm:block"
		>
			<div class="text-xl tracking-[0.2px]">
				<div class="pb-4 font-bold">Colophon</div>

				<Colophon {colophon}></Colophon>
			</div>
		</div>

		<div
			style="background-image: url({bgImg})"
			class="auth-container sticky top-0 flex max-h-dvh min-h-[calc(100dvh-5rem)] flex-shrink-0 flex-grow flex-col overflow-scroll bg-cover bg-fixed bg-top sm:w-1/2 sm:basis-1/2"
		>
			<LogInSignUp></LogInSignUp>
		</div>
	</div>
</div>

<div class="sm:hidden">
	<div class="flex h-dvh flex-col">
		<div
			class="border-primary-text bg-bg sticky top-0 z-100 flex flex-col border-b border-dotted py-2"
		>
			{#each logos as logo, idx}
				<img
					onclick={changeLogo}
					src={logo}
					class="{idx === currLogo
						? 'relative opacity-100'
						: 'absolute opacity-5'} fill-primary-text text-primary-text h-[25dvw] w-full cursor-pointer object-fill p-2 transition-opacity duration-500 select-none sm:p-4"
				/>
			{/each}
		</div>

		<div class="h-0 flex-grow basis-0">
			<img src={getImgUrl(mobileImg)} class="h-full w-full object-cover" />
		</div>
		<div
			style="background-image: url({bgImg})"
			class="auth-container border-primary-text flex max-h-dvh flex-shrink-0 flex-grow-0 flex-col overflow-scroll border-t border-dotted bg-cover bg-fixed bg-top pb-8"
		>
			<LogInSignUp></LogInSignUp>
		</div>
	</div>

	<div
		class="text-primary-text border-primary-text relative mt-[-2px] border-t border-dotted bg-amber-50 p-4 shadow-xl sm:hidden"
	>
		<div class="text-xl tracking-[0.2px]">
			<div class="pt-1 pb-4 font-bold">Colophon</div>
			<Colophon {colophon}></Colophon>
		</div>
	</div>
</div>
