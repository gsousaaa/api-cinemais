import { appDataSource } from "@/config/db/datasource";
import { TypeOrmMediaRepository } from "@/repositories/typeorm/typeOrmMediaRepository";
import { TypeOrmFavoriteRepository } from "@/repositories/typeorm/typeOrmFavoriteRepository";
import { CreateFavoriteMediaService } from "../users/createFavoriteMediaService";

export function makeCreateFavoriteMediaService() {
    const mediaRepo = new TypeOrmMediaRepository(appDataSource)
    const favoriteRepo = new TypeOrmFavoriteRepository(appDataSource)

    return new CreateFavoriteMediaService(favoriteRepo, mediaRepo)
}