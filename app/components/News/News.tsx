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
    link: 'https://www.rbc.ru/technology_and_media/25/08/2024/66cb51339a7947305f662308'
  },
  {
    id: 2,
    img: news2,
    content: "Канадский политик Фрейхайт назвал войной против народа арест Павла Дурова",
    source: "Риа Новости",
    link: "https://ria.ru/20240825/kanada-1968404318.html"
  },
  {
    id: 3,
    img: news3,
    content: "СМИ: Павел Дуров находится в миграционной тюрьме в аэропорту Ле Бурже",
    source: "Metasupersport",
    link: 'https://cybersport.metaratings.ru/news/smi-pavel-durov-nakhoditsya-v-migracionnoi-tyurme-v-aeroportu-le-burzhe-395741/?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fdzen.ru%2Fnews%2Fsearch%3Ftext%3D'
  },
  {
    id: 4,
    img: news4,
    content: "Павел Дуров задержан во Франции и ждет обвинений",
    source: "Коммерсантъ",
    link: 'https://www.kommersant.ru/doc/6918235'
  },
  {
    id: 5,
    img: news5,
    content: "Во Франции задержан основатель Telegram Павел Дуров. Что известно и как на это реагируют",
    source: "русская служба BBC",
    link: 'https://www.bbc.com/russian/articles/cy4lp37xwlro'
  },
  {
    id: 6,
    img: news6,
    content: "Илон Маск призвал освободить задержанного Павла Дурова",
    source: "DW",
    link: 'https://www.dw.com/ru/ilon-mask-prizval-osvobodit-zaderzannogo-pavla-durova/a-70044102'
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
