import { appDataSource } from "@/config/db/datasource";
import { TypeOrmFavoriteRepository } from "@/repositories/typeorm/typeOrmFavoriteRepository";
import { FindAllFavoriteMedias } from "../findAllFavoriteMediasService";

export function makeFindAllFavoriteMediasService() {
    const favoriteRepo = new TypeOrmFavoriteRepository(appDataSource)

    return new FindAllFavoriteMedias(favoriteRepo)
}