import { ICreateMedia } from "@/types/media";
import { MediaRepository } from "../repositories/MediaRepository";
import { BadRequest } from "@/utils/customError";

export class CreateMediaService {
    constructor(private readonly mediaRepository: MediaRepository) { }
    async execute(data: ICreateMedia) {
        const existsMedia = await this.mediaRepository.findOneBy({title: data.title, type: data.type, releaseYear: data.releaseYear})
        
        if(existsMedia) throw new BadRequest(`Mídia já cadastrada no catálogo!`)

        return await this.mediaRepository.create(data)
    }
}