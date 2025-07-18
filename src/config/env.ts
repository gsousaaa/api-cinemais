import z from 'zod'
import 'dotenv/config';

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'prod']).default('dev'),
    PORT: z.coerce.number().default(3334),
    PG_USERNAME: z.string(),
    PG_PASSWORD: z.string(),
    PG_PORT: z.coerce.number().default(6442),
    PG_DATABASE: z.string()
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.error('❌ Invalid environment variables', _env.error.format());

    throw new Error('Invalid environment variables');
}

export const env = _env.data;
