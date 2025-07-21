import z from 'zod'

export const removeFavoriteMediaSchema = z.object({ userId: z.uuid(), mediaId: z.uuid() })