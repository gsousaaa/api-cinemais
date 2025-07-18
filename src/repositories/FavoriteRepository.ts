import { Favorite } from "@/config/db/models/Favorite";

export interface FavoriteRepository {
    create(userId: string, mediaId: string): Promise<Favorite>,
    findAll(userId: string): Promise<Favorite[]>,
    findOne(mediaId: string, userId: string): Promise<Favorite | null>
}