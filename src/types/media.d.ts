export type MediaType = 'movie' | 'series'

export interface ICreateMedia {
    title: string,
    description: string,
    type: MediaType,
    releaseYear: number,
    genre: string
}
