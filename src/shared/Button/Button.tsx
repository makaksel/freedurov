import React from 'react';
import { makeCn } from '@/src/utils';
import './Button.scss';
import { ReactChildren } from '@/src/models';


const cn = makeCn('Button');

interface ButtonProps {
  children?: ReactChildren,
  color?: 'white' | 'blue',
  type?: 'default' | 'outline',
  className?: string,
  iconGap?: 'default' | 'medium' | 'big',
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'white',
  type = 'default',
  className,
  iconGap = 'default',
}) => {


  return (
    <button className={cn('', { color, type, iconGap }, [className])}>
      {children}
    </button>);

};
