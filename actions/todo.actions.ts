'use server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTodosAction = async () => {
  return await prisma.todo.findMany()
}
