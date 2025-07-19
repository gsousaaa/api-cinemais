import Fastify from "fastify";
import { env } from "./config/env";
import errorMiddleware from "./middlewares/errorMiddleware";
import { mediaRoutes } from "./routes/router";

const app = Fastify()

app.register(mediaRoutes, {prefix: '/media'})
app.setErrorHandler(errorMiddleware)

const startServer = async () => {
    await app.listen({ port: env.PORT })
    console.log('Server running at http://localhost:3000')
}

startServer()