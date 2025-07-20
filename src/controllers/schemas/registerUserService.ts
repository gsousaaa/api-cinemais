import z from 'zod'

export const registerUserSchema = z.object({
    email: z.string({error: 'email deve ser enviado'}).email({error: 'Deve ser enviado um email válido'}),
    password: z.string({error: 'password deve ser enviado'}),
    name: z.string({error: 'name deve ser enviado'})
})