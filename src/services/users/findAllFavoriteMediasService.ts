import { FavoriteRepository } from "@/repositories/FavoriteRepository";

export class FindAllFavoriteMedias {
    constructor(private readonly favoriteRepository: FavoriteRepository) { }

    async execute(userId: string) {
        const response = await this.favoriteRepository.findAllBy({ userId: userId })

        // retornar somente as midias
        return response.map((response) => response.media)
    }
}