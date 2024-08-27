import { type SchemaTypeDefinition } from 'sanity';

import { news } from './news';
import { social } from './social';
import { main } from './main';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, social, main],
}
