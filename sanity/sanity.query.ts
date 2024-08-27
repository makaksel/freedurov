import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';


export async function getNews() {
  return client.fetch(
    groq`*[_type == "news"] | order(_updatedAt desc){
      _id,
      img {alt, "image": asset->url},
      content,
      link,
      source,
    }`,
  );
}

export async function getSocial() {
  return client.fetch(
    groq`*[_type == "social"] | order(_updatedAt desc){
      _id,
      img {alt, "image": asset->url},
      author,
      titleSource,
      content,
      link,
      source,
    }`,
  );
}

export async function getLikes() {
  const likes = await client.fetch(
    groq`*[ _type == "main" ]{
      _id,
      like
    }`,
  );

  return likes[0].like
}
