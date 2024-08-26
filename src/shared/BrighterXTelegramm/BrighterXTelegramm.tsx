import React from 'react';
import './BrighterXTelegramm.scss';
import { makeCn } from '@/src/utils';
import { Icon } from '@/src/shared/Icon';
import { Text, TextColor } from '@/src/shared/Text';

const cn = makeCn('BrighterXTelegramm');

interface BrighterXTelegrammProps {
  color?: TextColor;
  size?: 'default' | 'large';
  className?: string;
}

export const BrighterXTelegramm: React.FC<BrighterXTelegrammProps> = ({ color = 'inherit', size = 'default', className }) => {
  return (
    <div className={cn('', {size},[className])}>
        <span className={cn('item')}>
          <Text color={color}>Поярче</Text>
          <Icon name={'brighter'} width={size !== 'large' ? 30 : 36} height={size !== 'large' ? 30 : 36}></Icon>
        </span>
      <Icon name={'x'} className={cn('x', {white: color === 'white'})} width={size !== 'large' ? 10 : 13} height={size !== 'large' ? 11 : 14}></Icon>
      <span className={cn('item')}>
          <Text color={color}>Telegram</Text>
          <Icon name={'telegramm'} width={size !== 'large' ? 30 : 36} height={size !== 'large' ? 30 : 36}></Icon>
        </span>
    </div>
  );
};
