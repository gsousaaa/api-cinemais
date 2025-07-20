import z from 'zod'

export const loginSchema = z.object({
    email: z.string({error: 'email deve ser enviado'}).email({error: 'Deve ser enviado um e-mail válido'}),
    password: z.string({error: 'password deve ser enviada'})
})