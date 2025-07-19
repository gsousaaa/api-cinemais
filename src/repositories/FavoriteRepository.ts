import { Favorite } from "@/config/db/models/Favorite";

export interface FavoriteRepository {
    create(userId: string, mediaId: string): Promise<Favorite>,
    findAll(userId: string): Promise<Favorite[]>,
    findOneBy(where: Partial<Favorite>): Promise<Favorite | null>
    findAllBy(where: Partial<Favorite>): Promise<Favorite[]>
}