import { IPost } from '@/src/models';
import React from 'react';
import './News.scss';
import { makeCn } from '@/src/utils';
import { Block } from '@/src/shared/Block';
import { Post } from '@/src/shared/Post';
import { getNews } from '@/sanity/sanity.query';
import Link from 'next/link';
import { TELEGRAM_CHANEL_MAIN_LINK } from '@/src/data/const';


const cn = makeCn('News');


export const News = async () => {
  const data: IPost[] = await getNews();

  return (

    <Block className={cn('')} title="Последние новости">
      {data.map(({ _id, content, ...item }) => <Post key={_id} {...item} className={cn('item')}>{content}</Post>)}

      <Link href={TELEGRAM_CHANEL_MAIN_LINK} className={cn('btn')}>Показать ещё</Link>
    </Block>
  );
};
