import { IPost } from '@/src/models';
import React from 'react';
import './Social.scss';
import { makeCn } from '@/src/utils';
import { Block } from '@/src/shared/Block';
import { Post } from '@/src/shared/Post';
import social1 from '@/src/resources/images/social1.jpeg';
import social2 from '@/src/resources/images/social2.jpeg';
import social3 from '@/src/resources/images/social3.png';
import social4 from '@/src/resources/images/social4.jpeg';

const cn = makeCn('Social');

const data: IPost[] = [
  {
    id: 1,
    img: social1,
    title: 'Paul Gram',
    titleSource: '@paulg',
    content: 'Трудно представить тебе страну, которая одновременно арестовывает основателей Telegram и является крупным центром стартапов.',
    source: 'x.com',
    link: 'https://t.me/sale_caviar/8931'
  },
  {
    id: 2,
    img: social2,
    title: 'Ilon Mask',
    titleSource: '@ilonmask',
    content: 'In 2030 in Europe and you are being executed for liking a meme',
    source: 'x.com',
    link: 'https://t.me/musk_twitter/7419'
  },
  {
    id: 3,
    img: social3,
    title: 'Tucker Carlson',
    titleSource: '@TuckerCarlson',
    content: 'Pavel Durov sits in a French jail tonight, a living warning to any platform owner who refuses to censor the truth at the behest of government and intel agencies',
    source: 'x.com',
    link: 'https://t.me/TuckerCarlsonNetwork/49'
  },
  {
    id: 4,
    img: social4,
    title: 'Екатерина Мизулина',
    titleSource: '@ekaterina_mizulina',
    content: 'Он наш русский гений и мы должны биться за него до конца',
    source: 'Telegram',
    link: 'https://t.me/ekaterina_mizulina/10428'
  },
];

export const Social = () => {
  return (

    <Block className={cn('')} title="СОЦИАЛЬНЫЕ СЕТИ">
      {data.map(({ id, content, ...item }) => <Post key={id} {...item} className={cn('item')}>{content}</Post>)}

      <button className={cn('btn')}>Показать ещё</button>
    </Block>
  );
};
