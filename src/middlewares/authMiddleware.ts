import { env } from "@/config/env";
import { Unauthorized } from "@/utils/customError";
import { FastifyReply, FastifyRequest} from "fastify";
import jwt from 'jsonwebtoken'

export async function authMiddleware(req: FastifyRequest, res: FastifyReply) {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith(`Bearer `)) throw new Unauthorized(`Token não informado`)

        const token = authHeader.split(' ')[1]

        jwt.verify(token, env.JWT_SECRET_KEY)

    } catch (err) {
        if(err instanceof Unauthorized) {
            throw err
        }

        throw new Unauthorized(`Token inválido ou expirado`)
    }
}