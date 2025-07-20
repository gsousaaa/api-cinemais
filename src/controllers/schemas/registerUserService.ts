import z, { email } from 'zod'

export const registerUserSchema = z.object({
    email: z.email({error: 'Deve ser enviado um email válido'}),
    password: z.string({error: 'password deve ser enviado'}),
    name: z.string({error: 'name deve ser enviado'})
})