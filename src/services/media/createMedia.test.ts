import { MediaRepository } from "@/repositories/MediaRepository";
import { CreateMediaService } from "./createMediaService";
import { ICreateMedia } from "@/types/media";
import { BadRequest } from "@/utils/customError";

describe('createMediaService', () => {
    const mediaRepository = {
        findOneBy: jest.fn(),
        create: jest.fn(),
    } as unknown as MediaRepository;

    const service = new CreateMediaService(mediaRepository)
    const payload: ICreateMedia = {
        title: 'Filme teste',
        description: 'Filme teste descrção',
        type: 'movie',
        releaseYear: 2025,
        genre: 'Ficção'
    }

    it('deve cadastrar uma mídia com sucesso', async () => {
        mediaRepository.findOneBy = jest.fn().mockResolvedValue(null)

        await expect(service.execute(payload)).resolves.toBeUndefined()
        expect(mediaRepository.create).toHaveBeenCalledWith(payload)
    })

    it('deve lançar BadRequest quando a mídia já estiver sido cadastrada', async() => {
        mediaRepository.findOneBy = jest.fn().mockResolvedValue({id: 'media-id'})

        await expect(service.execute(payload)).rejects.toThrow(BadRequest)

        expect(mediaRepository.findOneBy).toHaveBeenCalledWith({title: payload.title, type: payload.type, releaseYear: payload.releaseYear})
    })

})