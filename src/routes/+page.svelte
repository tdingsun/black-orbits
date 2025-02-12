<script>
	import LandingPageSignedOut from "$lib/components/LandingPageSignedOut.svelte";
    import MainArchive from "$lib/components/MainArchive.svelte";
	import { SignedIn, SignedOut, SignInButton, SignUpButton, SignOutButton, SignIn } from "svelte-clerk";
</script>

<SignedOut>
    <LandingPageSignedOut></LandingPageSignedOut>



</SignedOut>
<SignedIn>
    <MainArchive></MainArchive>
</SignedIn>

