import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const main = defineType({
  name: 'main',
  title: 'Главная',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'like',
      title: 'Лайков',
      type: 'number',
    }),
  ],

});
