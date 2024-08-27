import React from 'react';
import './Useful.scss';
import { makeCn } from '@/src/utils';
import pack1 from '@/src/resources/images/pack1.png';
import pack2 from '@/src/resources/images/pack2.png';
import pavel3 from '@/src/resources/images/pavel3.png';
import Image from 'next/image';
import { Block } from '@/src/shared/Block';
import { DoubleRoundImage } from '@/src/shared/DoubleRoundImage';
import { Text } from '@/src/shared/Text';
import { Icon } from '@/src/shared/Icon';
import Link from 'next/link';
import { TELEGRAM_CHANEL_MAIN_LINK } from '@/src/data/const';

const cn = makeCn('Useful');

export const Useful = () => {
  return (

    <Block className={cn('')} title="ПОЛЕЗНЫЕ ССЫЛКИ">

      <div className={cn('items')}>
        <div className={cn('item')}>
          <Link href={TELEGRAM_CHANEL_MAIN_LINK} className={'stretched-link'} />
          <Image src={pack1} alt={''} className={cn('img')}/>
        </div>
        <div className={cn('item')}>
          <Link href={TELEGRAM_CHANEL_MAIN_LINK} className={'stretched-link'} />
          <Image src={pack2} alt={''} className={cn('img')}/>
        </div>
      </div>
    </Block>
  );
};
