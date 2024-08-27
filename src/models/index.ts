import { StaticImageData } from "next/image";
import React from "react";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface IPageProps {
  params: Partial<any>;
  searchParams: Partial<any>;
}

interface IImg {
  alt?: string,
  image: string
}

export interface IPost {
  _id?: number;
  img: IImg;
  content?: ReactChildren;
  source: string;
  link: string;
  title?: string;
  titleSource?: string;
}

export type ReactChildren = React.ReactNode | React.ReactNode[];
