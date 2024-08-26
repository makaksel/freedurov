import type { Metadata } from 'next';
import './index.scss';
import React from 'react';
import { PreloadResources } from '@/src/shared/PreloadResources/PreloadResources';
import { Inter } from 'next/font/google';


const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});


export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable}`}>
    <body
    >

    <PreloadResources />

    {children}
    </body>
    </html>
  );
}
