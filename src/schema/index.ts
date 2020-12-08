import { makeSchema } from '@nexus/schema';
import { nexusPrisma } from 'nexus-plugin-prisma';
import * as Path from 'path';

import * as types from './types';

export const schema = makeSchema({
  shouldExitAfterGenerateArtifacts:
    process.env.NEXUS_SHOULD_EXIT_AFTER_GENERATE_ARTIFACTS === 'true',
  typegenAutoConfig: {
    contextType: '{ prisma: PrismaClient.PrismaClient }',
    sources: [{ source: '.prisma/client', alias: 'PrismaClient' }],
  },
  outputs: {
    typegen: Path.join(
      __dirname,
      '../../node_modules/@types/typegen-nexus/index.d.ts',
    ),
  },
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
    }),
  ],
  types,
});

export default schema;
