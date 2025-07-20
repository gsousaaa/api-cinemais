import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreateFavoriteMediaService } from "@/services/factories/make-createFavoriteMediaService";
import { HttpStatus } from "@/utils/HttpStatus";
import { makeFindAllFavoriteMediasService } from "@/services/factories/make-findAllFavoriteMediasService";
import { bodyCreateFavoriteMedia, paramsCreateFavoriteMedia } from "./schemas/createFavoriteMediaSchema";
import { removeFavoriteMediaSchema } from "./schemas/removeFavoriteMediaSchema";
import { makeRemoveFavoriteMediaService } from "@/services/factories/make-removeFavoriteMediaService";

export class UsersController {
    static async createFavoriteMedia(req: FastifyRequest, reply: FastifyReply) {
        const { userId } = paramsCreateFavoriteMedia.parse(req.params)
        const { mediaId } = bodyCreateFavoriteMedia.parse(req.body)

        const service = makeCreateFavoriteMediaService()

        await service.execute(userId, mediaId)

        return reply.code(HttpStatus.NO_CONTENT).send()
    }

    static async findAllFavoriteMedias(req: FastifyRequest, reply: FastifyReply) {
        const { userId } = paramsCreateFavoriteMedia.parse(req.params)

        const service = makeFindAllFavoriteMediasService()

        const response = await service.execute(userId)

        return reply.code(HttpStatus.OK).send(response)
    }

    static async removeFavoriteMedia(req: FastifyRequest, reply: FastifyReply) {
        const { userId, mediaId } = removeFavoriteMediaSchema.parse(req.params)

        const service = makeRemoveFavoriteMediaService()
        await service.execute(userId, mediaId)

        return reply.code(HttpStatus.NO_CONTENT).send()
    }
}