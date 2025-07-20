import z from 'zod'

export const removeFavoriteMediaSchema = z.object({ userId: z.string(), mediaId: z.string() })