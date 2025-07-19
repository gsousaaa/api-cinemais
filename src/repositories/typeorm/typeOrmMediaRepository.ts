import { DataSource } from "typeorm";
import { MediaRepository } from "../MediaRepository";
import { ICreateMedia } from "@/types/media";
import { Media } from "@/config/db/models/Media";

export class TypeOrmMediaRepository implements MediaRepository {
    private repository = this.appDataSource.getRepository(Media)

    constructor(private readonly appDataSource: DataSource) { }

    async create(data: ICreateMedia): Promise<Media> {
        return await this.repository.save(data)
    }

    async findAll(): Promise<Media[]> {
        return this.repository.find()
    }

    async findOne(id: string): Promise<Media | null> {
        return await this.repository.findOne({ where: { id } })
    }
    
    async findOneBy(where: Partial<Media>): Promise<Media | null> {
        return await this.repository.findOne({ where })
    }
}