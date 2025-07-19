import { MediaRepository } from "@/repositories/MediaRepository";
import { calculateOffset } from "@/utils/calculateOffset";
import { NotFound } from "@/utils/customError";

export class FindAllMediasService {
    constructor(private readonly mediaRepository: MediaRepository) {}

    async execute(page: number = 1, limit: number = 10) {
        const offset = calculateOffset(page, limit)
    
        const existsMedia = await this.mediaRepository.findAll(offset, limit)

        if(!existsMedia) throw new NotFound(`Mídia não encontrada!`)

        return existsMedia
    }
}