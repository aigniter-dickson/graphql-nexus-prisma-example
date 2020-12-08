import { prisma, PrismaClient } from './prisma';

export type Context = {
  prisma: PrismaClient;
};

export function createContext(): Context {
  return {
    prisma,
  };
}
