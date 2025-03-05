<script lang="ts">
	import Years from './Years.svelte';

	import Tags from './Tags.svelte';

	import { SignOutButton } from 'svelte-clerk';
	import SiteTitle from './SiteTitle.svelte';
	import CollectionTitle from './CollectionTitle.svelte';
	import CollectionDek from './CollectionDek.svelte';
	import EssayLink from './EssayLink.svelte';
	import InterviewLink from './InterviewLink.svelte';
	import PhotoLayer from './PhotoLayer.svelte';
</script>

<div class="w-full">
	<div class="border-primary-text bg-bg sticky top-0 flex items-start justify-between border-b p-2">
		<div class="w-[100px]">
			<SiteTitle></SiteTitle>
			<a href="/colophon">Colophon</a>
		</div>
		<div class=" w-xl pb-4">
			<CollectionTitle></CollectionTitle>
			<CollectionDek></CollectionDek>
			<div class="flex gap-8">
				<EssayLink></EssayLink>
				<InterviewLink></InterviewLink>
			</div>
		</div>
		<div class="flex w-[100px] justify-end">
			<SignOutButton>
				<div
					class="border-primary-text text-primary-text hover:bg-primary-text hover:text-bg cursor-pointer border p-1 text-sm transition-colors"
				>
					Sign out
				</div>
			</SignOutButton>
		</div>
	</div>

	<div class="flex p-2">
		<div class="fixed flex w-full basis-0 flex-col gap-4">
			<Tags></Tags>
		</div>
		<div class="flex basis-full justify-center">
			<PhotoLayer></PhotoLayer>
		</div>
		<div class="fixed right-0 flex basis-0 flex-col gap-4 pr-2">
			<Years></Years>
		</div>
	</div>
</div>
