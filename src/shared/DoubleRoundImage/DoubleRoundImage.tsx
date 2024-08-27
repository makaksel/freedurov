import React from 'react';
import './DoubleRoundImage.scss';
import { makeCn } from '@/src/utils';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const cn = makeCn('DoubleRoundImage');

interface DoubleRoundImageProps {
  images?: StaticImport[];
  className?: string;
  align?: 'left' | 'right';
  withDog?: boolean;
}

export const DoubleRoundImage: React.FC<DoubleRoundImageProps> = ({ images, className, align = 'left', withDog }) => {
  return (
    <div className={cn('', { align, withDog }, [className])}>
      {images?.map((img, index) => (<div key={index} className={cn('img-wrp')}>
        <Image src={img} className={cn('img')} alt={'freedurov'}></Image>
      </div>))}
    </div>
  );
};
