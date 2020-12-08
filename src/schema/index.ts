import { makeSchema } from '@nexus/schema';
import { nexusPrisma } from 'nexus-plugin-prisma';
import * as Path from 'path';

import * as types from './types';
// import { createContext } from '../context';

const schema = makeSchema({
  shouldExitAfterGenerateArtifacts:
    process.env.NEXUS_SHOULD_EXIT_AFTER_GENERATE_ARTIFACTS === 'true',
  typegenAutoConfig: {
    contextType: '{ prisma: PrismaClient.PrismaClient }',
    sources: [{ source: '.prisma/client', alias: 'PrismaClient' }],
  },
  outputs: {
    // typegen: Path.join(
    //   __dirname,
    //   '../../node_modules/@types/typegen-nexus/index.d.ts',
    // ),
    typegen: Path.join(__dirname, '/__generated__/nexus.ts'),
    schema: Path.join(__dirname, '/../../schema.graphql'),
  },
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      // inputs: {
      //   prismaClient: Path.join(__dirname, '../__generated__/prisma-client'),
      // },
      outputs: {
        typegen: Path.join(__dirname, '/__generated__/prisma-nexus.ts'),
      },
    }),
  ],
  types,
});

export default schema;
