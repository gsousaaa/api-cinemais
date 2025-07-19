import z from 'zod'

export const findMediaSchema = z.object({id: z.string({error: 'id deve ser enviado'}) })