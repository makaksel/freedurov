import { IPost } from '@/src/models';
import React from 'react';
import './Post.scss';
import { makeCn } from '@/src/utils';
import { Text } from '@/src/shared/Text';
import Image from 'next/image';

const cn = makeCn('Post');

interface PostProps extends IPost {
  id: number;
  children: React.ReactNode;
  className?: string;
}

export const Post: React.FC<PostProps> = ({ children, img, title, source, titleSource, className }) => {
  return (
    <article className={cn('', [className])}>
      <div className={cn('media')}>
        <Image src={img} className={cn('img')} alt={source} />
      </div>
      <div className={cn('body')}>
        {title && <p className={cn('title')}>
          <Text weight={'medium'}>{title}</Text>
          <Text weight={'medium'} color={'gray-30'}>{titleSource}</Text>
        </p>}
        <Text>{children}</Text>
        <Text color={'gray-40'}>Источник: {source}</Text>
      </div>
    </article>
  );
};
