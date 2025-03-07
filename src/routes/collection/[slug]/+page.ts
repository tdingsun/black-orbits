import { getCollectionBySlug } from '$lib/sanity';
import {  tagsState } from '$lib/states.svelte';
import type { PageLoad } from './$types';
export const load = (async ({ params }) => {
    const currentCollection = await getCollectionBySlug(params.slug);
    const tags = new Set<string>();
    const yearTags = new Set<number>();
    if(currentCollection.photoObjs){
        currentCollection.photoObjs.forEach(photoObj => {
            photoObj.imgTags.forEach(tag => {
                tags.add(tag.value);
            })
            yearTags.add(photoObj.year);
        });
    }


    return {
        currentCollection, tags, yearTags
    };
}) satisfies PageLoad;
