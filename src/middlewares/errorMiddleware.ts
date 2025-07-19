import { BaseError, InternalServer } from "@/utils/customError";
import { FastifyError, FastifyReply, FastifyRequest} from "fastify";
import { ZodError } from "zod";

export default (err: FastifyError, req: FastifyRequest, res: FastifyReply) => {
    if (err instanceof BaseError) {
        const errorReturn = err.toJSON()
        return res.status(errorReturn.status).send(errorReturn)
    }

    if (err instanceof ZodError) {
        const issues = err.issues.map((issue) => ({
            message: issue.message,
            path: issue.path,
        }));

        return res.status(400).send({
            status: 400,
            message: 'Zod error',
            data: issues.length > 1 ? issues : issues[0],
        })
    }

 
    const internalError = new InternalServer(err.message ? err.message : `Erro interno do servidor`)
    return res.status(internalError.statusCode).send(internalError.toJSON())
}