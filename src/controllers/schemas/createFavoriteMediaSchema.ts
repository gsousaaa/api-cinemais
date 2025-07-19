import z from 'zod'

export const paramsCreateFavoriteMedia = z.object({ userId: z.string() })

export const bodyCreateFavoriteMedia = z.object({ mediaId: z.string() })