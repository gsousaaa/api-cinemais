import { ICreateMedia } from "@/types/media";
import { MediaRepository } from "../repositories/MediaRepository";

export class CreateMediaService {
    constructor(private readonly mediaRepository: MediaRepository) { }
    async execute(data: ICreateMedia) {
        return await this.mediaRepository.create(data)
    }
}