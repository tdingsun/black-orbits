import {  getCallForWritersFormContent  } from '$lib/sanity';
import type { PageLoad } from './$types';
export const load = (async () => {
    const formContent = await getCallForWritersFormContent();
    return {
        formContent
    };
}) satisfies PageLoad;


