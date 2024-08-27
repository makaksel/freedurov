import React from 'react';
import './HeartButton.scss';
import { getLikes } from '@/sanity/sanity.query';
import { HeartButton, HeartButtonProps } from '@/src/shared/HeartButton/HeartButton';


export const HeartButtonCounter: React.FC<HeartButtonProps> = async ({ className }) => {
  const countInitial = await getLikes();

  return <HeartButton count={countInitial} className={className} />;
};
