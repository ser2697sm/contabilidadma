import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || '20');

  const skip = (page - 1) * pageSize;
  const take = pageSize;

  const [arraigos, total] = await Promise.all([
    prisma.nacionalidades.findMany({ skip, take }),
    prisma.nacionalidades.count(),
  ]);

  return Response.json({
    data: arraigos,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  });
}