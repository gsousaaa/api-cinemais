import z from 'zod'

export const findMediaSchema = z.object({id: z.uuid() })