
import { AuthController } from "@/controllers/authController";
import { FastifyInstance } from "fastify";

export async function authRoutes(app: FastifyInstance) {
    app.post('/register', AuthController.register)
    app.post('/login', AuthController.login)
}

