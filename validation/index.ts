import z from 'zod'

export const FormSchema = z.object({
  title: z.string().min(1, { message: 'Title must be at least 1 characters.' }),
  body: z.string().max(100, { message: 'Title must be smailer than 100 characters.' }).optional(),
  complete: z.boolean().default(false).optional(),
})
