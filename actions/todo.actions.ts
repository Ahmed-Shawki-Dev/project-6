'use server'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import z from 'zod'
import { FormSchema } from '../validation'

const prisma = new PrismaClient()

export const getTodosAction = async () => {
  return await prisma.todo.findMany()
}

export const addTodosAction = async (data: z.infer<typeof FormSchema>) => {
  await prisma.todo.create({
    data: {
      title: data.title,
      body: data.body,
      completed: data.complete,
    },
  })
  revalidatePath('/')
}

export const deleteTodosAction = async (id: string) => {
  await prisma.todo.delete({
    where: { id },
  })
  revalidatePath('/')
}

export const updateTodosAction = async (id: string, data: z.infer<typeof FormSchema>) => {
  await prisma.todo.update({
    where: { id },
    data: {
      title: data.title,
      body: data.body,
      completed: data.complete,
    },
  })
  revalidatePath('/')
}
