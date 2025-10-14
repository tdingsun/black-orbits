<script lang="ts">

	import {
		SignUp,
		SignIn
	} from 'svelte-clerk';
	import { page } from '$app/state';
	let showSignUp = $state(false);
</script>

<div class=" flex w-full h-full flex-col justify-start  ">
			<div class="flex w-full justify-center   border-b border-b-primary-text border-dotted  ">
				<div class="flex w-full max-w-xl justify-center xl:border-x border-dotted">
					<div class="flex w-full justify-between gap-8  p-4 sm:p-8 {showSignUp ? 'h-22' : 'h-48  ' } transition-[height]">
						<div
							onclick={() => (showSignUp = false)}
							class="flex justify-center font-bold text-xl leading-[1.4] {showSignUp
								? 'cursor-pointer hover:underline  '
								: ''}"
						>
							<span class="{showSignUp ? '' : 'hidden'} ">[</span>Log In<span
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
										card: '!bg-transparent !rounded-none !text-primary-text !p-0 !items-end !shadow-none',
										headerTitle: '!font-bold  !text-primary-text ',
										formFieldLabel: '!text-primary-text !text-xl ',
										formFieldInput:
											'!text-primary-text !bg-transparent !border-primary-text !border !rounded-none !font-bold !text-xl',
										formButtonPrimary:
											'self-start !text-primary-text !bg-transparent ![appearence:none] !font-bold !text-xl  !border-none !shadow-none !rounded-none !w-min !p-0 hover:!font-bold hover:underline',
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
				<div class="flex w-full justify-center flex-grow ">
					<div class="flex w-full max-w-xl justify-center xl:border-x border-dotted  ">
						<div class="flex w-full justify-between gap-8 p-4 sm:p-8 ">
							<div class="flex  ">
								<div
									onclick={() => (showSignUp = true)}
									class="font-bold text-xl leading-[1.4] {showSignUp ? '' : ' cursor-pointer hover:underline'}"
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
												card: '!bg-transparent !rounded-none !text-primary-text !p-0 !items-end !shadow-none',
												headerTitle: '!font-normal !text-primary-text',
												formFieldLabel: '!text-primary-text !text-xl ',
												formFieldInput:
													'!text-primary-text !bg-transparent !border-primary-text !border  !rounded-none !font-bold !text-xl',
												formButtonPrimary:
													'!text-primary-text !bg-transparent !text-xl !font-bold !border-none !shadow-none !rounded-none !w-min !p-0 hover:!font-bold hover:underline',
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

