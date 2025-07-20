import { appDataSource } from "@/config/db/datasource";
import { TypeOrmFavoriteRepository } from "@/repositories/typeorm/typeOrmFavoriteRepository";
import { RemoveFavoriteMediaService } from "../removeFavoriteMediaService";

export function makeRemoveFavoriteMediaService() {
    const repo = new TypeOrmFavoriteRepository(appDataSource)

    return new RemoveFavoriteMediaService(repo)
}