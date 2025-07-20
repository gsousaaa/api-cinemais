import { UsersController } from "@/controllers/usersController";
import { authMiddleware } from "@/middlewares/authMiddleware";
import { FastifyInstance } from "fastify";

export async function userRoutes(app: FastifyInstance) {
    app.addHook('onRequest', authMiddleware)

    app.post('/:userId/favorites', UsersController.createFavoriteMedia),
    app.get('/:userId/favorites', UsersController.findAllFavoriteMedias)
    app.delete('/:userId/favorites/:mediaId', UsersController.removeFavoriteMedia)
}