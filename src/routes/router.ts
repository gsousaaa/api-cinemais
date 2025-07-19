import { MediaController } from "@/controllers/mediaController";
import { FastifyInstance } from "fastify";

export async function mediaRoutes(app: FastifyInstance) {
    app.get('/', MediaController.findAll)
    app.get('/:id', MediaController.findOne)
    app.post('/', MediaController.create)
}