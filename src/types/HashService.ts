export interface HashService {
    hash(plain: string): Promise<string>,
    compare(plain: string, hashed: string): Promise<Boolean>
}