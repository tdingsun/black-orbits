import { redirect } from '@sveltejs/kit';
import { clerkClient } from 'svelte-clerk/server';

import { createClient } from '@sanity/client';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import { SANITY_SECRET_KEY } from '$env/static/private';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
    throw new Error('Did you forget to run sanity init --env?');
}

const sanityClient = createClient({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
    useCdn: false, // `false` if you want to ensure fresh data
    apiVersion: '2025-01-31', // date of setup
    token: SANITY_SECRET_KEY
});

export const load = async ({ locals }) => {
    const { userId } = locals.auth;

    if (!userId) {
        return redirect(307, '/');
    }

    const user = await clerkClient.users.getUser(userId);

    return {
        user: JSON.parse(JSON.stringify(user))
    };
};

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const id = data.get('id') as string;
        const result = sanityClient.patch(id)
        .setIfMissing({hotspots: []})
        .prepend('hotspots', [
            {
                xPos: Number(data.get('xPos')),
                yPos: Number(data.get('yPos')), 
                title: data.get('title'),
                attribution: data.get('name'),
                email: data.get('email'),
                content: data.get('comment'),
                isPublished: false,
                userId: data.get('userId')
            }
        ])
        .commit({
            autoGenerateArrayKeys: true
        })
        return result;
    }
}