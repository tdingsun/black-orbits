import { getColophon, getAllCollectionTitles } from '$lib/sanity';
import type { LayoutLoad } from './$types';
export const load = (async () => {
    const allCollectionTitles = await getAllCollectionTitles();
    const colophon = await getColophon();
    return {
        allCollectionTitles, colophon
    };
}) satisfies LayoutLoad;
