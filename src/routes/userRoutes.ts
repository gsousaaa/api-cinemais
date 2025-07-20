import { UsersController } from "@/controllers/usersController";
import { FastifyInstance } from "fastify";

export async function userRoutes(app: FastifyInstance) {
    app.post('/:userId/favorites', UsersController.createFavoriteMedia),
    app.get('/:userId/favorites', UsersController.findAllFavoriteMedias)
    app.delete('/:userId/favorites/:mediaId', UsersController.removeFavoriteMedia)
}