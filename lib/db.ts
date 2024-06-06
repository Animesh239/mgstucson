import {PrismaClient} from '@prisma/client'

// const globalForprisma = global as unknown as {prisma: PrismaClient | undefined}

// export const prisma = globalForprisma.prisma ?? new PrismaClient()

// if (process.env.NODE_ENV === 'development') {
//   globalForprisma.prisma = prisma
// }

export const db = new PrismaClient() ;

// import { PrismaClient } from '@prisma/client/edge'
// import { withAccelerate } from '@prisma/extension-accelerate'

// // const globalForprisma = global as unknown as {
// //   prisma: any
// //   globalForprisma: PrismaClient | undefined
// // }

// export const prisma = new PrismaClient().$extends(withAccelerate())

// // if (process.env.NODE_ENV === 'development') {
// //   globalForprisma.prisma = prisma
// // }

// export const db = prisma 