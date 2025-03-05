import { getAllCollections, getCurrentCollection, getColophon } from '$lib/sanity';
import { collectionState, tagsState } from '$lib/states.svelte';
import type { PageLoad } from './$types';
export const load = (async () => {
    const collections = await getAllCollections();
    const currentCollection = await getCurrentCollection();
    const colophon = await getColophon();

    const tags = new Set<string>();
    const yearTags = new Set<number>();
    currentCollection.photoObjs.forEach(photoObj => {
        photoObj.imgTags.forEach(tag => {
            tags.add(tag.value);
        })
        yearTags.add(photoObj.year);
    });
    tagsState.currCollectionTags = tags;
    tagsState.currCollectionYears = yearTags;
    return {
        collections, currentCollection, colophon
    };
}) satisfies PageLoad;
