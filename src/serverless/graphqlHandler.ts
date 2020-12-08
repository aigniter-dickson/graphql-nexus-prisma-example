import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';

import { createContext } from '../context';
import { schema } from '../schema';

const server = new ApolloServerLambda({ schema, context: createContext });

export const graphqlHandler = server.createHandler();
