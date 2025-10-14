import { getColophon, getAllCollectionTitles, getSiteInfo } from '$lib/sanity';
import { collectionState } from '$lib/states.svelte';
import type { LayoutLoad } from './$types';
export const load = (async () => {
    const allCollectionTitles = await getAllCollectionTitles();
    const siteInfo = await getSiteInfo();
    collectionState.allCollections = allCollectionTitles;
    const colophon = await getColophon();
    return {
        allCollectionTitles, colophon, siteInfo
    };
}) satisfies LayoutLoad;
