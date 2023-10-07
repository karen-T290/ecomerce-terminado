import sanityClient from '@sanity/client';
//import { SanityClient, createClient } from '@sanity/client';
// import ImageUrlBuilder  from "next-sanity-image";

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '8vq1r7om',
    dataset: 'production',
    apiVersion: '2023-09-23',
    useCdn: true,
    token: 'skDCgsdvdGrkgTAbCNsIdXDJuKZDNK7wrpbPSAv6sHHTo0Bs9zipl0j0u5QT2dzdKOz0dDo9PYZslsmqcrOcIJwCmvADJHo7kTcEy9BnvmvxpI8pHa2Kbw8yvEwptjPDlaif1Ed74B1iIhePDnFjWtM2EqCNuAXTNbE0GdOG7KUFU92Ft9J2'
});

//export const urlFor = (source) => builder.image(source);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}