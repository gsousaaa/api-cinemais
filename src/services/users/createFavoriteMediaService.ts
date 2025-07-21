import { FavoriteRepository } from "@/repositories/FavoriteRepository";
import { MediaRepository } from "@/repositories/MediaRepository";
import { UserRepository } from "@/repositories/UserRepository";
import { BadRequest, NotFound } from "@/utils/customError";

export class CreateFavoriteMediaService {
    constructor(private readonly favoriteRepository: FavoriteRepository, private readonly mediaRepository: MediaRepository, private readonly userRepository: UserRepository) { }

    async execute(userId: string, mediaId: string) {
        const existsUser = await this.userRepository.findOneBy({id: userId})

        if(!existsUser) throw new NotFound('Usuário não encontrado!')

        const existsMedia = await this.mediaRepository.findOne(mediaId)
        if (!existsMedia) throw new NotFound('Mídia não encontrada!')
        

        const existsFavoriteMedia = await this.favoriteRepository.findOneBy({ userId, mediaId })

        if (existsFavoriteMedia) throw new BadRequest(`Essa mídia já foi favoritada!`)

        await this.favoriteRepository.create(userId, mediaId)
        return
    }
}