import { FastifyReply, FastifyRequest } from "fastify";
import { HttpStatus } from "@/utils/HttpStatus";
import { registerUserSchema } from "./schemas/registerUserService";
import { makeRegisterService } from "@/services/auth/factories/make-registerService";
import { makeLoginService } from "@/services/auth/factories/make-loginService";
import { loginSchema } from "./schemas/loginSchema";

export class AuthController {
    static async register(req: FastifyRequest, reply: FastifyReply) {
        const payload = registerUserSchema.parse(req.body)
        const service = makeRegisterService()

        const response = await service.execute(payload)
        return reply.code(HttpStatus.CREATED).send(response)
    }

    static async login(req: FastifyRequest, reply: FastifyReply) {
        const payload = loginSchema.parse(req.body)
        const service = makeLoginService()

        const response = await service.execute(payload)
        return reply.code(HttpStatus.CREATED).send(response)
    }
}