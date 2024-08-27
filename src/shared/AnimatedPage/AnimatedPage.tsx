'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactChildren } from '@/src/models';
import React from 'react';

interface AnimatedPageProps {
  children?: ReactChildren,
}

export const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {

  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial="pageInitial"
        animate="pageAnimate"
        layout
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}
