import { DataSource } from "typeorm";
import { FavoriteRepository } from "../FavoriteRepository";
import { Favorite } from "@/config/db/models/Favorite";

export class TypeOrmFavoriteRepository implements FavoriteRepository {
    private repository = this.appDataSource.getRepository(Favorite)

    constructor(private readonly appDataSource: DataSource) { }

    async create(userId: string, mediaId: string): Promise<Favorite> {
        return await this.repository.save({ userId, mediaId })
    }

    async findAll(): Promise<Favorite[]> {
        return this.repository.find()
    }

    async findOneBy(where: Partial<Favorite>): Promise<Favorite | null> {
        return await this.repository.findOne({ where })
    }

    async findAllBy(where: Partial<Favorite>): Promise<Favorite[]> {
        return await this.repository.find({where})
    }
}