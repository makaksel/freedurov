import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Точно')
    .items([
      S.documentTypeListItem('post').title('Посты'),
/*      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),*/
      // S.documentTypeListItem('author1').title('Tress'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author', 'author1'].includes(item.getId()!),
      ),
    ])
