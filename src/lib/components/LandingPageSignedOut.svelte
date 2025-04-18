<script lang="ts">
  import SiteTitle from './SiteTitle.svelte';

	import { SignedIn, SignedOut, SignInButton, SignUpButton, SignUp, SignOutButton, SignIn } from "svelte-clerk";
    import bgImg from "$lib/images/bo-bg.webp"
    import Colophon from "./Colophon.svelte";
    let { colophon } = $props();

    let showSignUp = $state(false);
</script>

<div  class="flex text-bg   min-w-dvw min-h-dvh  ">
    <!-- <img src={bgImg} class="fixed top-0 left-0 w-full h-full object-cover object-top"> -->
    <div class="w-1/2 basis-1/2 max-w-md flex-grow-0 flex-shrink-0 p-8 bg-bg text-primary-text   ">
        <div class="mb-4 text-5xl">
            <SiteTitle></SiteTitle>
        </div>

        <div class="text-xl tracking-[0.2px]">
            <Colophon {colophon}></Colophon>
        </div>

    </div>
    <div style="background-image: url({bgImg})" class="bg-cover bg-top bg-fixed w-1/2  auth-container basis-1/2 flex-grow flex-shrink-0  sticky top-0 max-h-dvh overflow-scroll flex flex-col">
        <div class="w-full flex justify-center divide-y divide-bg flex-col">
            <div class="w-full flex justify-center ">
                <div class="max-w-xl w-full flex justify-center">
                    <div class="flex gap-8 p-8 justify-between w-full">
                        <div onclick={() => showSignUp = false} class="flex justify-center {showSignUp ? 'hover:font-bold cursor-pointer ' : 'font-bold'}">[Log in]</div>
                        {#if !showSignUp}
                        <SignIn appearance={{
                            elements: {
                                main: '!flex-shrink !max-w-sm !w-full',
                                rootBox: '!flex-shrink !w-0 !flex-grow !flex',
                                cardBox: '!shadow-none  !rounded-none !w-min !flex-grow !flex ',
                                card: '!bg-transparent !rounded-none !text-bg !p-0 !items-end',
                                headerTitle: "!font-bold  !text-bg ",
                                formFieldLabel: "!text-bg !text-base !font-bold ",
                                formFieldInput: "!text-bg !bg-transparent !border-bg !border !rounded-none !font-bold !text-base",
                                formButtonPrimary: "!text-bg !bg-transparent ![appearence:none] !font-bold !text-base  !border-none !shadow-none !rounded-none !w-min !p-0 hover:!font-bold",
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
                                    cardBox: '!shadow-none !bg-transparent !rounded-none !w-0 !flex-grow !flex ',
                                    card: '!bg-transparent !rounded-none !text-bg !p-0 !items-end',
                                    headerTitle: "!font-normal !text-bg",
                                    formFieldLabel: "!text-bg !text-base !font-bold ",
                                    formFieldInput: "!text-bg !bg-transparent !border-bg !border !rounded-none !font-bold",
                                    formButtonPrimary: "!text-bg !bg-transparent !text-base !font-bold !border-none !shadow-none !rounded-none !w-min !p-0 hover:!font-bold",
                                    buttonArrowIcon: "!hidden",
                                        footer: '!hidden',
                                        header: '!hidden',
                                        formFieldInfoText: "!text-bg !font-sm !font-bold",
                                        formFieldSuccessText: "!text-bg !font-sm !font-bold",
                                        formFieldErrorText: "!font-sm !font-bold",
                                    },
                            
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

