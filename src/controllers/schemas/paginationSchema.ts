import z from 'zod'


export const paginationSchema = z.object({ page: z.coerce.number().optional().default(1), limit: z.coerce.number().optional().default(10) })