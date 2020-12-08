import { ApolloServer } from 'apollo-server';
import { createContext } from './context';
import schema from './schema';

const server = new ApolloServer({
  schema,
  context: createContext,
});

server.listen({ port: 4000 }).then((info) => {
  console.log(`GraphQL API ready at: ${info.url}`);
});
