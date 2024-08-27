import { DocumentTextIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const social = defineType({
  name: 'social',
  title: 'Пост',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'img',
      title: 'Картинка',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Альтернативный текст(для SEO)',
        },
      ],
    }),
    defineField({
      name: 'author',
      title: 'Автор',
      type: 'string',
    }),
    defineField({
      name: 'titleSource',
      title: 'Юзернейм из соц.сети',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Ссылка',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Текст новости',
      type: 'string',
    }),
    defineField({
      name: 'source',
      title: 'Источник',
      type: 'string',
    }),
  ],
});
