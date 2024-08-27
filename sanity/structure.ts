// @ts-ignore
import type { StructureResolver } from 'sanity/structure';

// @ts-ignore
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Точно')
    .items([
      S.documentTypeListItem('news').title('Новости'),
      S.documentTypeListItem('social').title('Соц.сети'),

      S.divider(),
      ...S.documentTypeListItems().filter(
        // @ts-ignore
        (item) => item.getId() && !['news', 'social'].includes(item.getId()!),
      ),
    ]);
