import z from 'zod'

export const paramsCreateFavoriteMedia = z.object({ userId: z.uuid() })

export const bodyCreateFavoriteMedia = z.object({ mediaId: z.uuid() })