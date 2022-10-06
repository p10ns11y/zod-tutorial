import { z } from 'zod';
import { Equal, Expect } from './helpers/type-utils';

// const idParser = z.string().uuid();
const Entity = z.object({
  id: z.string().uuid(),
});

const User = Entity.extend({
  name: z.string(),
});

const Post = Entity.extend({
  title: z.string(),
  body: z.string(),
});

const Comment = Entity.extend({
  text: z.string(),
});

type cases = [
  Expect<Equal<z.infer<typeof Comment>, { id: string; text: string }>>,
  Expect<
    Equal<z.infer<typeof Post>, { id: string; title: string; body: string }>
  >,
  Expect<Equal<z.infer<typeof User>, { id: string; name: string }>>
];
