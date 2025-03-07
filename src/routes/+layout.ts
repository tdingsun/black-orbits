import { getColophon, getAllCollectionTitles } from '$lib/sanity';
import { collectionState } from '$lib/states.svelte';
import type { LayoutLoad } from './$types';
export const load = (async () => {
    const allCollectionTitles = await getAllCollectionTitles();
    collectionState.allCollections = allCollectionTitles;
    const colophon = await getColophon();
    return {
        allCollectionTitles, colophon
    };
}) satisfies LayoutLoad;
