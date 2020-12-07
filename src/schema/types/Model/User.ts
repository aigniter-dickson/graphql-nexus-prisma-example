import * as schema from '@nexus/schema'

export const User = schema.objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.email()
    t.model.name()
    t.model.posts()
  }
})
