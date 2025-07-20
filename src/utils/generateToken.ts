import { User } from "@/config/db/models/User";
import { env } from "@/config/env";
import jwt from 'jsonwebtoken'

export function generateToken(payload: Partial<User>) {
    return jwt.sign(payload, env.JWT_SECRET_KEY, {
        expiresIn: '1h'
    })
}