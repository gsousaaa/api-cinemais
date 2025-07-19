import { FastifyReply, FastifyRequest } from "fastify";
import { createMediaSchema } from "./schemas/createMediaSchema";
import { makeCreateMediaService } from "@/services/factories/make-createMediaService";
import { HttpStatus } from "@/utils/HttpStatus";
import { makeFindMediaService } from "@/services/factories/make-findMediaService";
import { findMediaSchema } from "./schemas/findMediaSchema";
import { findAllMediasSchema } from "./schemas/findAllMediasSchema";
import { makeFindAllMediasService } from "@/services/factories/make-findAllMediasService";

export class MediaController {
    static async create(req: FastifyRequest, reply: FastifyReply) {
        const payload = createMediaSchema.parse(req.body)
        const service = makeCreateMediaService()

        const response = await service.execute(payload)

        return reply.status(HttpStatus.CREATED).send(response)
    }

    static async findOne(req: FastifyRequest, reply: FastifyReply) {
        const { id } = findMediaSchema.parse(req.query)
        const service = makeFindMediaService()

        const response = await service.execute(id)

        return reply.status(HttpStatus.OK).send(response)
    }

    static async findAll(req: FastifyRequest, reply: FastifyReply) {
        const { page, limit } = findAllMediasSchema.parse(req.query)
        const service = makeFindAllMediasService()

        const response = await service.execute(page, limit)

        return reply.status(HttpStatus.OK).send(response)
    }

}