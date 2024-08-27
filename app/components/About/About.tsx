import React from 'react';
import './About.scss';
import { makeCn } from '@/src/utils';
import pavel2 from '@/src/resources/images/pavel2.png';
import pavel3 from '@/src/resources/images/pavel3.png';
import telegramm from '@/src/resources/images/telegramm.png';
import vk from '@/src/resources/images/vk.png';
import { Block } from '@/src/shared/Block';
import { DoubleRoundImage } from '@/src/shared/DoubleRoundImage';
import { Text } from '@/src/shared/Text';
import { Icon } from '@/src/shared/Icon';
import pack1 from '@/src/resources/images/pack1.png';
import Image from 'next/image';

const cn = makeCn('About');

export const About = () => {
  return (

    <Block className={cn('')} title="О павле дурове">
      <DoubleRoundImage images={[pavel2, pavel3]} className={cn('media')} align="right" />

      <div className={cn('content')}>
        <Text color="gray-30">Кто это?</Text>
        <Text>Pavel Valeryevich Durov is a Russian-born French and Emirati business executive who is the co-founder and
          chief executive officer of Telegram Messenger and the co-founder of social networking site VK. Durov was
          listed on the Forbes Billionaires List in 2023, with a net worth of $11.5 billion.</Text>
      </div>

      <Text color="gray-30" className={"hide-xxs"}>Проекты</Text>
      <div className={cn('projects')}>
        <div className={cn('projects-item')}>
          <Text>Telegram</Text>
          <Image src={telegramm} alt={''}  width={26} height={26} quality={100}/>
          {/*<Icon name={'telegramm'} width={26} height={26} />*/}
        </div>
        <div className={cn('projects-item')}>
          <Text>Вконтакте</Text>
          <Image src={vk} alt={''} width={26} height={26}  quality={100}/>
          {/*<Icon name={'vk'} width={26} height={26} />*/}
        </div>
      </div>
    </Block>
  );
};
