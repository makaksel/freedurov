import { type SchemaTypeDefinition } from 'sanity';

import { news } from './news';
import { social } from './social';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, social],
}
