import z from 'zod'

export const createMediaSchema = z.object({
    title: z.string({error: 'title deve ser enviado'}),
    description: z.string({error: 'description deve ser enviado'}),
    type: z.enum(['movie', 'series'], {error: 'type deve ser "movie" ou "series"'}),
    releaseYear: z.number({error: 'releaseYear deve ser enviado'}),
    genre: z.string({error: 'genre deve ser enviado'})
})