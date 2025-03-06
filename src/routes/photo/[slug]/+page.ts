import {  getPhotoBySlug  } from '$lib/sanity';
import type { PageLoad } from './$types';
export const load = (async ({ params }) => {
    const slug = params.slug;
    const photo = await getPhotoBySlug(slug);
    return {
        photo
    };
}) satisfies PageLoad;


