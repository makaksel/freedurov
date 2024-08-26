import { ReactChildren } from '@/src/models';
import React from 'react';
import './Block.scss';
import { makeCn } from '@/src/utils';
import { Text } from '@/src/shared/Text';

const cn = makeCn('Block');

interface BlockProps {
  children?: ReactChildren;
  title?: string;
  className?: string;
}

export const Block: React.FC<BlockProps> = ({ children, title, className }) => {
  return (
    <section className={cn('wrp')}>
      <div className={cn('', [className])}>
        {title && <p className={cn('title')}><Text variant="h1">{title}</Text></p>}
        {children}
      </div>
    </section>
  );
};
