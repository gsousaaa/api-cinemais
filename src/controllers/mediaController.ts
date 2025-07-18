import { FastifyReply, FastifyRequest } from "fastify";
import { createMediaSchema } from "./schemas/createMediaSchema";
import { makeCreateMediaService } from "@/services/factories/make-createMediaService";

export class MediaController {
    static async create(req: FastifyRequest, reply: FastifyReply) {
        const payload = createMediaSchema.parse(req.body)
        const service = makeCreateMediaService()
        
        const response = await service.execute(payload)

        return reply.status(201).send(response)
    }
}