import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const news = defineType({
  name: 'news',
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
      name: 'content',
      title: 'Текст новости',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Ссылка',
      type: 'string',
    }),
    defineField({
      name: 'source',
      title: 'Источник',
      type: 'string',
    }),

  ],
  orderings: [
    {
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [
        {field: 'releaseDate', direction: 'desc'}
      ]
    },
    {
      title: 'Release Date, Old',
      name: 'releaseDateAsc',
      by: [
        {field: 'releaseDate', direction: 'asc'}
      ]
    }
  ]
});
