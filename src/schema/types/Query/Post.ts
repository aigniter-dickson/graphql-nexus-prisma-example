import * as schema from '@nexus/schema'

export const PostQuery = schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.posts({ filtering: true, ordering: true, pagination: true })
    t.crud.post()
  }
})
