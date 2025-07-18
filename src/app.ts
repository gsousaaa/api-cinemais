import Fastify from "fastify";
import { env } from "./config/env";

const app = Fastify()

const startServer = async () => {
    await app.listen({ port: env.PORT })
    console.log('Server running at http://localhost:3000')
}

startServer()