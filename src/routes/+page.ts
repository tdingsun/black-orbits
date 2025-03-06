import {  getCurrentCollection } from '$lib/sanity';
import {  tagsState } from '$lib/states.svelte';
import type { PageLoad } from './$types';
export const load = (async () => {
    const currentCollection = await getCurrentCollection();

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
        currentCollection
    };
}) satisfies PageLoad;
