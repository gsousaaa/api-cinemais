import Fastify from "fastify";
import { env } from "./config/env";
import errorMiddleware from "./middlewares/errorMiddleware";

const app = Fastify()

app.setErrorHandler(errorMiddleware)

const startServer = async () => {
    await app.listen({ port: env.PORT })
    console.log('Server running at http://localhost:3000')
}

startServer()