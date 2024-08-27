import { IPost } from '@/src/models';
import React from 'react';
import './Post.scss';
import { makeCn } from '@/src/utils';
import { Text } from '@/src/shared/Text';
import Image from 'next/image';
import Link from 'next/link';

const cn = makeCn('Post');

interface PostProps extends IPost {
  children: React.ReactNode;
  className?: string;
  classNameMedia?: string;
}

export const Post: React.FC<PostProps> = ({
  children,
  img,
  title,
  source,
  titleSource,
  className,
  classNameMedia,
  link,
}) => {
  return (
    <article className={cn('', [className])}>
      {link && <Link href={link} className={'stretched-link'} />}
      <div className={cn('media', [classNameMedia])}>
        <Image
          src={img.image}
          className={cn('img')}
          width={300}
          height={300}
          quality={100}
          alt={img?.alt || source}
        />
      </div>
      <div className={cn('body')}>
        {title && <p className={cn('title')}>
          <Text weight={'medium'}>{title}</Text>
          <Text weight={'medium'} color={'gray-30'}>{titleSource}</Text>
        </p>}
        <Text>{children}</Text>
        <Text color={'gray-40'} className={cn('source')}>Источник: {source}</Text>
      </div>
    </article>
  );
};
