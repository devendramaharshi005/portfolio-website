import { PrismaClient } from '@/lib/generated/prisma'
const prisma = new PrismaClient()

export async function getVisitors() {
  return prisma.visitor.findMany()
}


type NewVisitor = {
  name: string;
  email: string;
  message: string;
};

export async function addVisitor(visitor: NewVisitor) {
  try {
    const createdVisitor = await prisma.visitor.create({
      data: visitor,
    });

    return createdVisitor;
  } catch (error) {
    console.error('Error adding visitor:', error);
    throw error;
  }
}