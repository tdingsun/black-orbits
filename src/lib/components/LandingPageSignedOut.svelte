<script lang="ts">
  import LogInSignUp from './LogInSignUp.svelte';

	import SiteTitle from './SiteTitle.svelte';

	import bgImg from '$lib/images/scratches3.png';
	import Colophon from './Colophon.svelte';

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
	import { onMount } from 'svelte';
	import { shuffle } from '$lib/utils';

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
		logo28,
	];
	shuffle(logos)
	let currLogo = $state(0)
	let { colophon } = $props();
	const changeLogo = () => {
		currLogo = (currLogo + 1) % (logos.length - 1)
	}
</script>

<img src={bgImg} class="fixed top-0 left-0 w-full h-full object-cover object-top pointer-events-none z-1">

<div  class=" border-b border-primary-text">
	<img onclick={changeLogo}  src={logos[currLogo]} class="fill-primary-text text-primary-text w-full h-[25dvw] p-4 object-fill select-none"/>
</div>

<div class="text-primary-text flex min-h-dvh min-w-dvw flex-col sm:flex-row ">
	<div
		class="text-primary-text hidden w-1/2  flex-shrink-0 flex-grow-0 basis-1/2 bg-yellow-50 border-r p-8  sm:block"
	>


		<div class="text-xl tracking-[0.2px]">
			<Colophon {colophon}></Colophon>
		</div>
	</div>

	<div
		style="background-image: url({bgImg})"
		class="auth-container sticky top-0 flex max-h-dvh min-h-[calc(100dvh-5rem)] flex-shrink-0 flex-grow flex-col overflow-scroll bg-cover bg-fixed bg-top sm:w-1/2 sm:basis-1/2 bg-yellow-50"
	>
		<LogInSignUp></LogInSignUp>
	</div>

	<div class="text-primary-text relative bg-yellow-50 p-8 shadow-xl sm:hidden">
		<div class="text-xl tracking-[0.2px]">
			<div class="pb-4">Colophon</div>
			<Colophon {colophon}></Colophon>
		</div>
	</div>
</div>
