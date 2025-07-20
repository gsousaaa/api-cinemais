import { FastifyReply, FastifyRequest } from "fastify";
import { createMediaSchema } from "./schemas/createMediaSchema";
import { makeCreateMediaService } from "@/services/media/factories/make-createMediaService";
import { HttpStatus } from "@/utils/HttpStatus";
import { makeFindMediaService } from "@/services/media/factories/make-findMediaService";
import { findMediaSchema } from "./schemas/findMediaSchema";
import { makeFindAllMediasService } from "@/services/media/factories/make-findAllMediasService";
import { paginationSchema } from "./schemas/paginationSchema";

export class MediaController {
    static async create(req: FastifyRequest, reply: FastifyReply) {
        const payload = createMediaSchema.parse(req.body)
        const service = makeCreateMediaService()

        const response = await service.execute(payload)

        return reply.status(HttpStatus.CREATED).send(response)
    }

    static async findOne(req: FastifyRequest, reply: FastifyReply) {
        const { id } = findMediaSchema.parse(req.params)
        const service = makeFindMediaService()

        const response = await service.execute(id)

        return reply.status(HttpStatus.OK).send(response)
    }

    static async findAll(req: FastifyRequest, reply: FastifyReply) {
        const { page, limit } = paginationSchema.parse(req.query)
        const service = makeFindAllMediasService()

        const response = await service.execute(page, limit)

        return reply.status(HttpStatus.OK).send(response)
    }

}