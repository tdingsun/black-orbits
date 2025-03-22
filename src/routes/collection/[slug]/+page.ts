import { getCollectionBySlug } from '$lib/sanity';
import {  tagsState } from '$lib/states.svelte';
import type { PageLoad } from './$types';
export const load = (async ({ params }) => {
    const currentCollection = await getCollectionBySlug(params.slug);
    const tags = new Set<string>();
    const timeTags = new Set<string>();
    const colorTags = new Set<string>();
    if(currentCollection.photoObjs){
        currentCollection.photoObjs.forEach(photoObj => {
            photoObj.imgTags.forEach(tag => {
                tags.add(tag.value);
            })
            photoObj.time.forEach(tag => {
                timeTags.add(tag.value);
            })
            photoObj.color.forEach(tag => {
                colorTags.add(tag.value);
            })
        });
    }


    return {
        currentCollection, tags, timeTags, colorTags
    };
}) satisfies PageLoad;
