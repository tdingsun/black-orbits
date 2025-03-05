import { getColophon } from '$lib/sanity';
import type { PageLoad } from './$types';
export const load = (async () => {
    const colophon = await getColophon();
    return {
        colophon
    };
}) satisfies PageLoad;
