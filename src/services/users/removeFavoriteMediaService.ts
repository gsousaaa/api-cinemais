import { FavoriteRepository } from "@/repositories/FavoriteRepository";
import { NotFound } from "@/utils/customError";

export class RemoveFavoriteMediaService {
    constructor(private readonly favoriteRepository: FavoriteRepository) { }

    async execute(userId: string, mediaId: string) {
        const favoriteMedia = await this.favoriteRepository.findOneBy({ userId, mediaId })
        if (!favoriteMedia) throw new NotFound('Mídia não encontrada na lista de favoritos!')

        await this.favoriteRepository.delete({ id: favoriteMedia.id })
        return
    }
}