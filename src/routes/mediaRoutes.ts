import { MediaController } from "@/controllers/mediaController";
import { authMiddleware } from "@/middlewares/authMiddleware";
import { FastifyInstance } from "fastify";

export async function mediaRoutes(app: FastifyInstance) {
    app.addHook('onRequest', authMiddleware)

    app.get('/', MediaController.findAll)
    app.get('/:id', MediaController.findOne)
    app.post('/', MediaController.create)
}

