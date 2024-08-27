'use client';

import React, { useEffect, useState } from 'react';
import './HeartButton.scss';
import { makeCn } from '@/src/utils';
import { updateHeart } from '@/src/actions';
import { Icon } from '@/src/shared/Icon';
import { motion } from 'framer-motion';

const cn = makeCn('HeartButton');

export interface HeartButtonProps {
  count?: number;
  className?: string;
}

export const HeartButton: React.FC<HeartButtonProps> = ({ count, className }) => {

  const [likes, setLikes] = useState(count);
  const [loading, setLoading] = useState(false);
  const [isVote, setIsVote] = useState<boolean | null>(false);

  useEffect(() => {
    const isVoteStorage = localStorage.getItem('isVote');
    setIsVote(!!isVoteStorage);
  }, []);

  const clickHandler = async () => {
    if (isVote) return;

    setLoading(true);
    const newCount = await updateHeart();
    setLikes(newCount);

    setIsVote(true);
    localStorage.setItem('isVote', 'Y');
    setLoading(false);
  };
  const spring = { type: 'spring', damping: 10, stiffness: 100, duration: 9 };
  return (
    <button className={cn('', { active: !!isVote, loading }, [className])} onClick={clickHandler}>

      <Icon className={cn('icon')} name={'heart'} width={24} height={24}></Icon>
      {!isVote ?
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={spring}
        >
          #FREEDUROV
        </motion.span>
        :
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={spring}
        >
          {likes}
        </motion.span>}

    </button>
  );
};
