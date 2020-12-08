import * as schema from '@nexus/schema';

export const UserQuery = schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.users({ filtering: true, ordering: true, pagination: true });
    t.crud.user();
  },
});
