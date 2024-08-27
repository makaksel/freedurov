import React from 'react';
import './MainBlock.scss';
import { makeCn } from '@/src/utils';
import dog from '@/src/resources/images/dog.png';
import pavel1 from '@/src/resources/images/pavel1.png';
import { Text } from '@/src/shared/Text';
import Link from 'next/link';
import { Block } from '@/src/shared/Block';
import { DoubleRoundImage } from '@/src/shared/DoubleRoundImage';
import { TELEGRAM_CHANEL_MAIN_LINK } from '@/src/data/const';
import { BrighterXTelegramm } from '@/src/shared/BrighterXTelegramm';

const cn = makeCn('MainBlock');

export const MainBlock = () => {
  return (
    <Block className={cn('')}>
      <DoubleRoundImage images={[dog, pavel1]} className={cn('media')} withDog />

      <div className={cn('content')}>
        <Text color="gray-30">Последние новости</Text>
        <Text>Павел Дуров, основатель популярного мессенджера Telegram, был задержан французской полицией</Text>
      </div>

      <BrighterXTelegramm className={cn('together')} />

      <Link href={TELEGRAM_CHANEL_MAIN_LINK} className={cn('btn')}>Следить за новостями</Link>
    </Block>
  );
};
