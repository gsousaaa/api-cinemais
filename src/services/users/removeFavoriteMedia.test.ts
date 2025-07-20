import { FavoriteRepository } from "@/repositories/FavoriteRepository";
import { RemoveFavoriteMediaService } from "./removeFavoriteMediaService";
import { NotFound } from "@/utils/customError";

describe('removeFavoriteMediaService', () => {
    const favoriteRepository = {
        findOneBy: jest.fn(),
        create: jest.fn(),
        delete: jest.fn()
    } as unknown as FavoriteRepository;

    const service = new RemoveFavoriteMediaService(favoriteRepository)
    const userId = 'user-id'
    const mediaId = 'media-id'

    it('deve lançar NotFound quando a mídia não for encontrada na lista de favoritos', async () => {
        favoriteRepository.findOneBy = jest.fn().mockResolvedValue(null)

        await expect(service.execute(userId, mediaId)).rejects.toThrow(NotFound)
        expect(favoriteRepository.findOneBy).toHaveBeenCalledWith({userId, mediaId})
    })

    it('deve excluir uma mídia da lista de favoritos', async () => {
        favoriteRepository.findOneBy = jest.fn().mockResolvedValue({id: 'favorite-id'})

        await expect(service.execute(userId, mediaId)).resolves.toBeUndefined()
        expect(favoriteRepository.delete).toHaveBeenCalledWith({id: 'favorite-id'})
    })

})