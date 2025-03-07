<script lang="ts">
  import SiteTitle from './SiteTitle.svelte';

	import { SignedIn, SignedOut, SignInButton, SignUpButton, SignOutButton, SignIn } from "svelte-clerk";
    import placeholderImg from "$lib/images/00.jpg";
	import Caption from "./Caption.svelte";
    import Colophon from "./Colophon.svelte";
    let { colophon } = $props();
</script>

<div class="flex text-primary-text p-4 gap-4">
    <div class="basis-1/2">
        <div class="mb-4 text-4xl">
            <SiteTitle></SiteTitle>

        </div>
        <div class="pb-4">
            <img src={placeholderImg} />
            <Caption>
                sample caption
            </Caption>
        </div>

        <Colophon {colophon}></Colophon>
    </div>
    <div class="basis-1/2 sticky top-0 max-h-dvh overflow-scroll flex justify-center">
        <SignIn appearance={{
            elements: {
                cardBox: '!shadow-none !bg-bg !rounded-none [content:`ok`]',
                card: '!bg-bg !rounded-none !text-primary-text',
                headerTitle: "!font-normal [content:'ok'] !text-primary-text",
                formFieldLabel: "!text-primary-text",
                formFieldInput: "!text-primary-text !bg-bg !border-primary-text !border !rounded-none",
                formButtonPrimary: "!text-bg !bg-primary-text !border-none !shadow-none !rounded-none",
                footer: '!hidden'
            }
        }
        
        }>
        </SignIn>
        
    </div>
</div>
