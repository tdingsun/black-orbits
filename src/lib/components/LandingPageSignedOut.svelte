<script lang="ts">
  import SiteTitle from './SiteTitle.svelte';

	import { SignedIn, SignedOut, SignInButton, SignUpButton, SignUp, SignOutButton, SignIn } from "svelte-clerk";
    import Colophon from "./Colophon.svelte";
    let { colophon } = $props();

    let showSignUp = $state(false);
</script>

<div class="flex text-primary-text divide-x divide-primary-text">
    <div class="w-1/2 basis-1/2 flex-grow-0 flex-shrink-0 p-8">
        <div class="mb-4 text-4xl">
            <SiteTitle></SiteTitle>
        </div>

        <div class="text-xl tracking-[0.2px]">
            <Colophon {colophon}></Colophon>

        </div>

    </div>
    <div class="w-1/2  auth-container basis-1/2 flex-grow-0 flex-shrink-0  sticky top-0 max-h-dvh overflow-scroll flex flex-col">
        <div class="w-full flex justify-center divide-y divide-primary-text flex-col">
            <div class="w-full flex justify-center ">
                <div class="max-w-xl w-full flex justify-center">
                    <div class="flex gap-8 p-8 justify-between w-full">
                        <div onclick={() => showSignUp = false} class="flex justify-center {showSignUp ? 'hover:font-bold cursor-pointer ' : 'font-bold'}">[Log in]</div>
                        {#if !showSignUp}
                        <SignIn appearance={{
                            elements: {
                                main: '!flex-shrink !max-w-sm !w-full',
                                rootBox: '!flex-shrink !w-0 !flex-grow !flex',
                                cardBox: '!shadow-none !bg-bg !rounded-none !w-min !flex-grow !flex ',
                                card: '!bg-bg !rounded-none !text-primary-text !p-0 !items-end',
                                headerTitle: "!font-normal [content:'ok'] !text-primary-text",
                                formFieldLabel: "!text-primary-text !text-base !font-normal",
                                formFieldInput: "!text-primary-text !bg-bg !border-primary-text !border !rounded-none",
                                formButtonPrimary: "!text-primary-text !bg-bg !text-base !font-normal !border-none !shadow-none !rounded-none !w-min !p-0 hover:!font-bold",
                                buttonArrowIcon: "!hidden",
                                footer: '!hidden',
                                header: '!hidden'
                            }
                        }
                        }>
                        </SignIn>
                        {/if}
                    </div>
                </div>
                
                
            </div>

            <div class="w-full flex justify-center ">
                <div class="max-w-xl w-full flex justify-center">
                    <div class="flex gap-8 p-8 justify-between w-full">
                        <div class="flex">
                            <div onclick={() => showSignUp = true} class="{showSignUp ? 'font-bold' : ' hover:font-bold cursor-pointer'}">
                                {showSignUp ? '[Sign up]' : '[Sign up for a library card]'}
                            </div>
                        </div>
                        {#if showSignUp}
                            <div class="{showSignUp ? '' : 'hidden'} flex flex-grow">
                                <SignUp appearance={{
                                    elements: {
                                        main: '!flex-shrink !max-w-sm !w-full',
                                    rootBox: '!flex-shrink !w-0 !flex-grow !flex',
                                    cardBox: '!shadow-none !bg-bg !rounded-none !w-0 !flex-grow !flex ',
                                    card: '!bg-bg !rounded-none !text-primary-text !p-0 !items-end',
                                    headerTitle: "!font-normal !text-primary-text",
                                    formFieldLabel: "!text-primary-text !text-base !font-normal ",
                                    formFieldInput: "!text-primary-text !bg-bg !border-primary-text !border !rounded-none",
                                    formButtonPrimary: "!text-primary-text !bg-bg !text-base !font-normal !border-none !shadow-none !rounded-none !w-min !p-0 hover:!font-bold",
                                    buttonArrowIcon: "!hidden",
                                        footer: '!hidden',
                                        header: '!hidden',
                                    }
                                }}
                                ></SignUp>  
                            </div>
                        {/if}
                    </div>
                </div>
                
                
            </div>

            
            
        </div>
        
        

        
              
    </div>
</div>

