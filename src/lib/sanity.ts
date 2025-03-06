/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@sanity/client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2025-01-31' // date of setup
});

//url builder

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
	return builder.image(source);
}

export const getImgUrl = (imgRef: Image) => {
	return urlFor(imgRef).width(1600).fit('max').url();
};

export async function getColophon(): Promise<any> {
	return await client.fetch(groq`*[_id == "colophon"][0]`);
}

export async function getAllCollectionTitles(): Promise<any> {
	return await client.fetch(groq`*[_type == "collection" && slug.current]{
		title,
		slug
		}`);
}

export async function getCurrentCollection(): Promise<any> {
	return await client.fetch(groq`*[_type == "collection" && isCurrent == true][0]{
		..., 'photoObjs': photos[]->, 
		'essayCoverImgObj': essayCoverImg->,
		interview[]{
			...,
			_type=="collectionImage"=>@->
		},
		essay[]{
			...,
			_type=="collectionImage"=>@->
		}
		}`);
}

export async function getCollectionBySlug(slug: string): Promise<any> {
	return await client.fetch(groq`*[_type == "collection" && slug.current == "${slug}"][0]{
		..., 
		'photoObjs': photos[]->, 
		'essayCoverImgObj': essayCoverImg->, 
		interview[]{
			...,
			_type=="collectionImage"=>@->
		},
		essay[]{
			...,
			_type=="collectionImage"=>@->
		}
	}`);
}

export async function getPhotoBySlug(slug: string): Promise<any> {
	return await client.fetch(groq`*[_type == "collectionImage" && slug.current == "${slug}"][0]{
		...,
		'collection': collection->{
			title,
			slug,
			essayTitle,
			essayAuthor,
			essay[]{
				_type=="collectionImage"=>@->{
					slug
				}
			},
			photos[]->{
				slug
			}

		},
	}`);
}
