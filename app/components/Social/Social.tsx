import { IPost } from '@/src/models';
import React from 'react';
import './Social.scss';
import { makeCn } from '@/src/utils';
import { Block } from '@/src/shared/Block';
import { Post } from '@/src/shared/Post';
import { getSocial } from '@/sanity/sanity.query';
import { TELEGRAM_CHANEL_MAIN_LINK } from '@/src/data/const';
import Link from 'next/link';

const cn = makeCn('Social');

export const Social = async () => {
  const data: IPost[] = await getSocial();
  return (

    <Block className={cn('')} title="СОЦИАЛЬНЫЕ СЕТИ">
      {data.map(({ _id, content, ...item }) =>
        <Post
          key={_id}
          className={cn('item')}
          classNameMedia={cn('item-media')}
          {...item}
        >
          {content}
        </Post>,
      )}

      <Link href={TELEGRAM_CHANEL_MAIN_LINK} className={cn('btn')}>Показать ещё</Link>
    </Block>
  );
};
