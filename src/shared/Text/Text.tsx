import React from 'react';
import './Text.scss';
import { makeCn } from '@/src/utils';
import { ReactChildren } from '@/src/models';

const cn = makeCn('Text');

export type TextSize = 'default' | 'h1' | 'h2' | 'h3' | 'h4';

export type TextColor = 'inherit' | 'white' | 'gray-30' | 'gray-40';

export interface TextOwnProps {
  children?: ReactChildren;
  variant?: TextSize;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: TextColor;
  className?: string;
}

export const Text: React.FC<TextOwnProps> = ({
  className,
  variant = 'default',
  weight = 'medium',
  color = 'inherit',
  children,
}) => {
  return <span className={cn('', { variant, weight, color }, [className])}>{children}</span>;
};
