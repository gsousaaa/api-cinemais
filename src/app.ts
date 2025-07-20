import 'reflect-metadata';
import Fastify from "fastify";
import { env } from "./config/env";
import errorMiddleware from "./middlewares/errorMiddleware";
import { mediaRoutes } from "./routes/mediaRoutes";
import { appDataSource } from "./config/db/datasource";
import { userRoutes } from './routes/userRoutes';
import { authRoutes } from './routes/authRoutes';

const app = Fastify()

app.register(mediaRoutes, { prefix: '/media' })
app.register(userRoutes, { prefix: '/users' })
app.register(authRoutes, { prefix: '/auth' })
app.setErrorHandler(errorMiddleware)

const startServer = async () => {
    await appDataSource.initialize().then(async () => {
        console.log('Database conectada com sucesso!')

        return appDataSource.isInitialized
    }).catch((err) => console.error(err))


    await app.listen({ port: env.PORT, host: '0.0.0.0' })

    console.log(`Server running at http://localhost:${env.PORT}`)
}

startServer()