<script lang="ts">
	import SiteTitle from './SiteTitle.svelte';

	import {
		SignedIn,
		SignedOut,
		SignInButton,
		SignUpButton,
		SignUp,
		SignOutButton,
		SignIn
	} from 'svelte-clerk';
	import bgImg from '$lib/images/scratches3.png';
	import Colophon from './Colophon.svelte';
	import { page } from '$app/state';
	console.log(page.url);
	let { colophon } = $props();

	let showSignUp = $state(false);
</script>

<div class="text-primary-text flex min-h-dvh min-w-dvw flex-col sm:flex-row">
	<!-- <img src={bgImg} class="fixed top-0 left-0 w-full h-full object-cover object-top"> -->
	<div
		class="text-primary-text hidden w-1/2 max-w-md flex-shrink-0 flex-grow-0 basis-1/2 bg-yellow-50 p-8 shadow-xl sm:block"
	>
		<div class="mb-4 text-5xl">
			<SiteTitle></SiteTitle>
		</div>

		<div class="text-xl tracking-[0.2px]">
			<Colophon {colophon}></Colophon>
		</div>
	</div>

	<div
		style="background-image: url({bgImg})"
		class="auth-container sticky top-0 flex max-h-dvh min-h-[calc(100dvh-5rem)] flex-shrink-0 flex-grow flex-col overflow-scroll bg-cover bg-fixed bg-top sm:w-1/2 sm:basis-1/2"
	>
		<!-- mobile -->
		<div class=" border-primary-text flex justify-center border-b p-4 text-5xl sm:hidden">
			<SiteTitle></SiteTitle>
		</div>

		<div class="divide-primary-text flex w-full flex-col justify-center divide-y">
			<div class="flex w-full justify-center">
				<div class="flex w-full max-w-xl justify-center">
					<div class="flex w-full justify-between gap-8 p-8">
						<div
							onclick={() => (showSignUp = false)}
							class="flex justify-center font-bold {showSignUp
								? 'cursor-pointer hover:underline  '
								: ''}"
						>
							<span class={showSignUp ? '' : 'hidden'}>[</span>Log in<span
								class={showSignUp ? '' : 'hidden'}>]</span
							>
						</div>
						{#if !showSignUp}
							<SignIn
								appearance={{
									elements: {
										main: '!flex-shrink !max-w-sm !w-full',
										rootBox: '!flex-shrink !w-0 !flex-grow !flex',
										cardBox: '!shadow-none  !rounded-none !w-min !flex-grow !flex ',
										card: '!bg-transparent !rounded-none !text-primary-text !p-0 !items-end',
										headerTitle: '!font-bold  !text-primary-text ',
										formFieldLabel: '!text-primary-text !text-base !font-bold ',
										formFieldInput:
											'!text-primary-text !bg-transparent !border-primary-text !border !rounded-none !font-bold !text-base',
										formButtonPrimary:
											'self-start !text-primary-text !bg-transparent ![appearence:none] !font-bold !text-base  !border-none !shadow-none !rounded-none !w-min !p-0 hover:!font-bold hover:underline',
										buttonArrowIcon: '!hidden',
										footer: '!hidden',
										header: '!hidden',
										formFieldAction: '!text-sm',
										footerAction: '!m-0 !mt-12',
										footerActionLink: '!text-sm'
									}
								}}
							></SignIn>
						{/if}
					</div>
				</div>
			</div>

			{#if !page.url.hash.includes('factor')}
				<div class="flex w-full justify-center">
					<div class="flex w-full max-w-xl justify-center">
						<div class="flex w-full justify-between gap-8 p-8">
							<div class="flex">
								<div
									onclick={() => (showSignUp = true)}
									class="font-bold {showSignUp ? '' : ' cursor-pointer hover:underline'}"
								>
									{showSignUp ? 'Sign up' : '[Sign up for a library card]'}
								</div>
							</div>
							{#if showSignUp}
								<div class="{showSignUp ? '' : 'hidden'} flex flex-grow">
									<SignUp
										appearance={{
											elements: {
												main: '!flex-shrink !max-w-sm !w-full',
												rootBox: '!flex-shrink !w-0 !flex-grow !flex',
												cardBox:
													'!shadow-none !bg-transparent !rounded-none !w-0 !flex-grow !flex ',
												card: '!bg-transparent !rounded-none !text-primary-text !p-0 !items-end',
												headerTitle: '!font-normal !text-primary-text',
												formFieldLabel: '!text-primary-text !text-base !font-bold ',
												formFieldInput:
													'!text-primary-text !bg-transparent !border-primary-text !border !rounded-none !font-bold',
												formButtonPrimary:
													'!text-primary-text !bg-transparent !text-base !font-bold !border-none !shadow-none !rounded-none !w-min !p-0 hover:!font-bold hover:underline',
												buttonArrowIcon: '!hidden',
												footer: '!hidden',
												header: '!hidden',
												formFieldInfoText: '!text-primary-text !font-sm !font-bold',
												formFieldSuccessText: '!text-primary-text !font-sm !font-bold',
												formFieldErrorText: '!font-sm !font-bold'
											}
										}}
									></SignUp>
								</div>
							{/if}
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>

	<div class="text-primary-text relative bg-yellow-50 p-8 shadow-xl sm:hidden">
		<div class="text-xl tracking-[0.2px]">
			<div class="pb-4">Colophon</div>
			<Colophon {colophon}></Colophon>
		</div>
	</div>
</div>
