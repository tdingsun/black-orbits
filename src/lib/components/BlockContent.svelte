<script lang="ts">
    import { PortableText, type PortableTextComponents } from '@portabletext/svelte';
    import BlockContentImg from '$lib/components/BlockContentImg.svelte';
 import BlockContentParagraph from '$lib/components/BlockContentParagraph.svelte';
 import BlockContentLink from '$lib/components/BlockContentLink.svelte';
 import BlockContentCollectionImg from '$lib/components/BlockContentCollectionImg.svelte';
 import BlockContentMarginalia from '$lib/components/BlockContentMarginalia.svelte';
 
 let {value} = $props();
 const components: Partial<PortableTextComponents> = {
     block: {
         normal: BlockContentParagraph
     },
     types: {
         image: BlockContentImg,
         collectionImage: BlockContentCollectionImg
     },
     marks: {
         link: BlockContentLink,
         marginalia: BlockContentMarginalia
     }
 };
 //TODO: more styling like for headers
 
</script>

<PortableText {components} {value}></PortableText>

