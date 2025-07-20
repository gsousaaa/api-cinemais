import { User } from "@/config/db/models/User";
import { ICreateUser } from "@/types/user";

export interface UserRepository {
    create(data: ICreateUser): Promise<User>,
    findOneBy(where: Partial<User>): Promise<User | null>
}