import { ReactChildren } from '@/src/models';
import React from 'react';
import './PageWrapper.scss';
import { AnimatedPage } from '@/src/shared/AnimatedPage/AnimatedPage';
import { makeCn } from '@/src/utils';
import Img from '@/src/resources/images/freedurov.png';
import Image from 'next/image';
import { BrighterXTelegramm } from '@/src/shared/BrighterXTelegramm';

const cn = makeCn('PageWrapper');

interface PageWithHeaderProps {
  children?: ReactChildren;
}

export const PageWrapper: React.FC<PageWithHeaderProps> = ({ children }) => {
  return (
    <>
      <div className={cn('')}>
        <canvas className={cn('canvas')} width="50" height="50"></canvas>
        <div className={cn('img-wrp')}>
          <Image src={Img} className={cn('img')} alt={'freedurov'}></Image>
        </div>
      </div>

      <AnimatedPage>{children}</AnimatedPage>


      <BrighterXTelegramm size={'large'} color="white" className={cn('footer')} />

    </>
  );
};
