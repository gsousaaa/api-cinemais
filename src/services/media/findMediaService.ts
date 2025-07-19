import { MediaRepository } from "@/repositories/MediaRepository";
import { NotFound } from "@/utils/customError";

export class FindMediaService {
    constructor(private readonly mediaRepository: MediaRepository) {}

    async execute(id: string) {
        const existsMedia = await this.mediaRepository.findOne(id)

        if(!existsMedia) throw new NotFound(`Mídia não encontrada!`)

        return existsMedia
    }
}