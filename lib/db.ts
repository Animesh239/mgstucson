import {PrismaClient} from '@prisma/client'

const globalForprisma = global as unknown as {prisma: PrismaClient | undefined}

export const prisma = globalForprisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV === 'development') {
  globalForprisma.prisma = prisma
}

export const db = prisma ;