import { Metadata } from 'next';
import { makeCn } from '@/src/utils';
import '@/src/styles/not-found.scss';

export const metadata: Metadata = {
  title: '404',
  description: '404',
};

const cn = makeCn('not-found');

export default function page() {
  return (
    <main className={cn('')}>

      <p className={cn('title')}>ошибка 404</p>

    </main>
  );
}
