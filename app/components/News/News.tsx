import { IPost } from '@/src/models';
import React from 'react';
import './News.scss';
import { makeCn } from '@/src/utils';
import { Block } from '@/src/shared/Block';
import { Post } from '@/src/shared/Post';
import { getNews } from '@/sanity/sanity.query';


const cn = makeCn('News');


export const News = async () => {
  const data: IPost[] = await getNews();

  return (

    <Block className={cn('')} title="Последние новости">
      {data.map(({ _id, content, ...item }) => <Post key={_id} {...item} className={cn('item')}>{content}</Post>)}

      <button className={cn('btn')}>Показать ещё</button>
    </Block>
  );
};
