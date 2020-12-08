import * as schema from '@nexus/schema';

export const Post = schema.objectType({
  name: 'Post',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.content();
    t.model.published();
    t.model.author();
  },
});
