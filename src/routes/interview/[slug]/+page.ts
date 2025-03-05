import {  getCollectionBySlug,  } from '$lib/sanity';
import { collectionState } from '$lib/states.svelte';
import type { PageLoad } from './$types';
export const load = (async ({ params }) => {
    const slug = params.slug;
    const collection = await getCollectionBySlug(slug);
    collectionState.currCollection = collection;
    return {
        collection
    };
}) satisfies PageLoad;
