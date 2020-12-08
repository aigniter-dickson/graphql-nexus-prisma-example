import { ApolloServer } from 'apollo-server-lambda';
import { createContext } from '../context';
import schema from '../schema';

const NODE_ENV = process.env.NODE_ENV;

const IS_DEV = !NODE_ENV || !['production'].includes(NODE_ENV);

const server = new ApolloServer({
  schema,
  context: createContext,
  introspection: IS_DEV,
  playground: IS_DEV,
});
export const graphqlHandler = server.createHandler();
// export default apolloServer.createHandler({
//   // cors: {
//   //   origin: "*",
//   // },
// });
