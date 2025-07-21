import { appDataSource } from "@/config/db/datasource";
import { TypeOrmMediaRepository } from "@/repositories/typeorm/typeOrmMediaRepository";
import { TypeOrmFavoriteRepository } from "@/repositories/typeorm/typeOrmFavoriteRepository";
import { CreateFavoriteMediaService } from "../createFavoriteMediaService";
import { TypeOrmUserRepository } from "@/repositories/typeorm/typeOrmUserRepository";

export function makeCreateFavoriteMediaService() {
    const mediaRepo = new TypeOrmMediaRepository(appDataSource)
    const favoriteRepo = new TypeOrmFavoriteRepository(appDataSource)
    const userRepo = new TypeOrmUserRepository(appDataSource)

    return new CreateFavoriteMediaService(favoriteRepo, mediaRepo, userRepo)
}