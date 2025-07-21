import { FavoriteRepository } from '@/repositories/FavoriteRepository';
import { MediaRepository } from '@/repositories/MediaRepository';
import { BadRequest, NotFound } from '@/utils/customError';
import { CreateFavoriteMediaService } from './createFavoriteMediaService';
import { UserRepository } from '@/repositories/UserRepository';

describe('CreateFavoriteMediaService', () => {
    const favoriteRepository = {
        findOneBy: jest.fn(),
        create: jest.fn(),
    } as unknown as FavoriteRepository;

    const mediaRepository = {
        findOne: jest.fn(),
    } as unknown as MediaRepository;

    const userRepository = {
        findOneBy: jest.fn(),
    } as unknown as UserRepository;


    const service = new CreateFavoriteMediaService(favoriteRepository, mediaRepository, userRepository);

    const userId = 'user-id';
    const mediaId = 'media-id';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('deve favoritar uma mídia se ela existir e não tiver sido favoritada antes', async () => {
        mediaRepository.findOne = jest.fn().mockResolvedValue({ id: mediaId });
        userRepository.findOneBy = jest.fn().mockResolvedValue({ id: 'user-id' })
        favoriteRepository.findOneBy = jest.fn().mockResolvedValue(undefined);
        favoriteRepository.create = jest.fn().mockResolvedValue(undefined);

        await expect(service.execute(userId, mediaId)).resolves.toBeUndefined();

        expect(mediaRepository.findOne).toHaveBeenCalledWith(mediaId);
        expect(favoriteRepository.findOneBy).toHaveBeenCalledWith({ userId, mediaId });
        expect(favoriteRepository.create).toHaveBeenCalledWith(userId, mediaId);
    });

    it('deve lançar NotFound se a mídia não existir', async () => {
        mediaRepository.findOne = jest.fn().mockResolvedValue(undefined);
        userRepository.findOneBy = jest.fn().mockResolvedValue({ id: 'user-id' })
        await expect(service.execute(userId, mediaId)).rejects.toThrow(NotFound);

        expect(mediaRepository.findOne).toHaveBeenCalledWith(mediaId);
        expect(favoriteRepository.findOneBy).not.toHaveBeenCalled();
        expect(favoriteRepository.create).not.toHaveBeenCalled();
    });

    it('deve lançar NotFound se o usuario não existir', async () => {
        userRepository.findOneBy = jest.fn().mockResolvedValue(undefined);

        await expect(service.execute(userId, mediaId)).rejects.toThrow(NotFound);

        expect(userRepository.findOneBy).toHaveBeenCalledWith({ id: userId });
    });

    it('deve lançar BadRequest se a mídia já tiver sido favoritada', async () => {
        mediaRepository.findOne = jest.fn().mockResolvedValue({ id: mediaId });
        userRepository.findOneBy = jest.fn().mockResolvedValue({ id: 'user-id' })
        favoriteRepository.findOneBy = jest.fn().mockResolvedValue({ id: 'favorite-id' });

        await expect(service.execute(userId, mediaId)).rejects.toThrow(BadRequest);

        expect(mediaRepository.findOne).toHaveBeenCalledWith(mediaId);
        expect(favoriteRepository.findOneBy).toHaveBeenCalledWith({ userId, mediaId });
        expect(favoriteRepository.create).not.toHaveBeenCalled();
    });
});
