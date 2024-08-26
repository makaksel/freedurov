import { IPost } from '@/src/models';
import React from 'react';
import './News.scss';
import { makeCn } from '@/src/utils';
import news1 from '@/src/resources/images/news1.jpeg';
import news2 from '@/src/resources/images/news2.jpeg';
import news3 from '@/src/resources/images/news3.jpeg';
import news4 from '@/src/resources/images/news4.jpeg';
import news5 from '@/src/resources/images/news5.png';
import news6 from '@/src/resources/images/news6.jpeg';
import { Block } from '@/src/shared/Block';
import { Post } from '@/src/shared/Post';

const cn = makeCn('News');

const data: IPost[] = [
  {
    id: 1,
    img: news1,
    content: "Что думают в России о задержании Дурова и что будет с Telegram? Главное к этому часу",
    source: "РБК",
  },
  {
    id: 2,
    img: news2,
    content: "Канадский политик Фрейхайт назвал войной против народа арест Павла Дурова",
    source: "Риа Новости",
  },
  {
    id: 3,
    img: news3,
    content: "СМИ: Павел Дуров находится в миграционной тюрьме в аэропорту Ле Бурже",
    source: "Metasupersport",
  },
  {
    id: 4,
    img: news4,
    content: "Павел Дуров задержан во Франции и ждет обвинений",
    source: "Коммерсантъ",
  },
  {
    id: 5,
    img: news5,
    content: "Во Франции задержан основатель Telegram Павел Дуров. Что известно и как на это реагируют",
    source: "русская служба BBC",
  },
  {
    id: 6,
    img: news6,
    content: "Илон Маск призвал освободить задержанного Павла Дурова",
    source: "DW",
  },

]

export const News = () => {
  return (

    <Block className={cn('')} title="Последние новости">
      {data.map(({ id, content, ...item }) => <Post key={id} {...item} className={cn('item')}>{content}</Post>)}

      <button className={cn('btn')}>Показать ещё</button>
    </Block>
  );
};
