import { FastifyReply, FastifyRequest } from "fastify";
import { HttpStatus } from "@/utils/HttpStatus";
import { registerUserSchema } from "./schemas/registerUserService";
import { makeRegisterService } from "@/services/auth/factories/make-registerService";

export class AuthController {
    static async register(req: FastifyRequest, reply: FastifyReply) {
        const payload = registerUserSchema.parse(req.body)
        const service = makeRegisterService()

        const response = await service.execute(payload)
        return reply.code(HttpStatus.CREATED).send(response)
    }
}