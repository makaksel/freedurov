// @ts-ignore
import type { StructureResolver } from 'sanity/structure';

// @ts-ignore
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Free Durov')
    .items([
      S.listItem()
        .title('Главная')
        .id('main')
        .child(
          S.document()
            .title('Главная')
            .schemaType('main')
            .documentId('main'),
        ),
      S.divider(),
      S.documentTypeListItem('news').title('Новости'),
      S.documentTypeListItem('social').title('Соц.сети'),
      S.divider(),
    ]);
