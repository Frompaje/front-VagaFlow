import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>

export const registerFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
