import { appDataSource } from "@/config/db/datasource";
import { User } from "@/config/db/models/User";
import { UserRepository } from "../UserRepository";
import { ICreateUser } from "@/types/user";

export class TypeOrmUserRepository implements UserRepository {
    private repository = appDataSource.getRepository(User)

    async create(data: ICreateUser): Promise<User> {
        return await this.repository.save(data)
    }

    async findOneBy(where: Partial<User>): Promise<User | null> {
        return await this.repository.findOne({where})
    }
}