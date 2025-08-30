import { Metadata } from 'next';
import React from 'react';
import { PageWrapper } from '@/src/shared/PageWrapper/PageWrapper';
import { Block } from '@/src/shared/Block';
import { MainBlock } from '@/app/components/MainBlock';
import { News } from '@/app/components/News';
import { Social } from '@/app/components/Social';
import { About } from '@/app/components/About';
import { Useful } from '@/app/components/Useful';


export const metadata: Metadata = {
  title: 'FREEDUROV',
  description: 'Поддержим Павла Дурова',
};

export default function page() {
  return (
    <PageWrapper>
      <MainBlock />
      <News />
      <Social />
      <About />
      <Useful />
    </PageWrapper>
  );
}
