<script lang="ts">
    import { SignOutButton } from "svelte-clerk";
    import SiteTitle from './SiteTitle.svelte';
    import CollectionTitle from "./CollectionTitle.svelte";
	import CollectionDek from "./CollectionDek.svelte";
    import EssayLink from "./EssayLink.svelte";
	import Interview from "./Interview.svelte";
</script>

<div class="w-full">
    <div class="sticky top-0 flex justify-between p-2 items-start border-b border-primary-text bg-bg">
        <div class="w-[100px]">
            <SiteTitle></SiteTitle>
            <a href='/'>Colophon</a>
        </div>
        <div class=" w-xl pb-4">
            <CollectionTitle></CollectionTitle>
            <CollectionDek></CollectionDek>
            <EssayLink></EssayLink>
        </div>
        <div class="w-[100px] flex justify-end ">
            <SignOutButton>
                <div class="border border-primary-text text-primary-text p-1 text-sm hover:bg-primary-text hover:text-bg cursor-pointer transition-colors">
                    Sign out
                </div>
            </SignOutButton>
        </div>

    </div>


    <div class="flex p-2">
        <div class="flex flex-col gap-4 w-full basis-0 fixed">
            <div>tags</div>
            <div class="text-xs">pets</div>
            <div class="text-xs">family</div>
            <div class="text-xs">portraits</div>
            <div class="text-xs">landscape</div>
        </div>
        <div class="flex basis-full justify-center">
            <Interview></Interview>
        </div>
        <div class="flex flex-col gap-4 basis-0 fixed right-0 pr-2">
            <div>year</div>
            <div class="text-xs">2025</div>
            <div class="text-xs">2024</div>
            <div class="text-xs">2023</div>
            <div class="text-xs">2022</div>
            <div class="text-xs">2021</div>
            <div class="text-xs">2020</div>
        </div>
    </div>


</div>


