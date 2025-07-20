import { HashService } from '@/types/HashService';
import * as bcrypt from 'bcrypt';

export class BcryptAdapter implements HashService  {
    private readonly salt = 10;

    async hash(plain: string): Promise<string> {
        return bcrypt.hash(plain, this.salt)
    }

    async compare(plain: string, hashed: string) {
        return bcrypt.compare(plain, hashed)
    }
}
