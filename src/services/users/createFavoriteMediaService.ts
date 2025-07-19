import { FavoriteRepository } from "@/repositories/FavoriteRepository";
import { MediaRepository } from "@/repositories/MediaRepository";
import { BadRequest, NotFound } from "@/utils/customError";

export class CreateFavoriteMediaService {
    constructor(private readonly favoriteRepository: FavoriteRepository, private readonly mediaRepository: MediaRepository) { }

    async execute(userId: string, mediaId: string) {
        const existsMedia = await this.mediaRepository.findOne(mediaId)
        if (!existsMedia) throw new NotFound('Mídia não encontrada!')

        const existsFavoriteMedia = await this.favoriteRepository.findOneBy({ userId, mediaId })

        if (existsFavoriteMedia) throw new BadRequest(`Essa mídia já foi favoritada!`)

        await this.favoriteRepository.create(userId, mediaId)
        return
    }
}