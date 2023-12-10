import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const projectId   = 'nc86cqtc'
const dataset = 'production'
const apiVersion = '2023-12-04'

export const client =  createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source:any){
    return builder.image(source);
}