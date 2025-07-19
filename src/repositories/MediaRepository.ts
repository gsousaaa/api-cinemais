import { Media } from "@/config/db/models/Media";
import { ICreateMedia } from "@/types/media";

export interface MediaRepository {
    create(data: ICreateMedia): Promise<Media>,
    findAll(offset: number, limit: number): Promise<Media[]>,
    findOne(id: string): Promise<Media | null>
    findOneBy(where: Partial<Media>): Promise<Media | null>
}