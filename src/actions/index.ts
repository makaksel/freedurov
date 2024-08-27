'use server';

import { dataset, projectId } from '@/sanity/env';

export async function updateHeart() {

  const response = await fetch(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}?returnDocuments=true`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      'mutations': [
        {
          'patch': {
            'id': 'main',
            'inc': {
              'like': 1,
            },
          },
        },
      ],
    }),
  }).then((res) => res.json());


  return response.results[0].document.like
}
