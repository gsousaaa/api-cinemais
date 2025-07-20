import { User } from "@/config/db/models/User";
import { UserRepository } from "../UserRepository";
import { ICreateUser } from "@/types/user";
import { DataSource } from "typeorm";

export class TypeOrmUserRepository implements UserRepository {
    private repository = this.appDataSource.getRepository(User)

    constructor(private readonly appDataSource: DataSource) { }

    async create(data: ICreateUser): Promise<User> {
        return await this.repository.save(data)
    }

    async findOneBy(where: Partial<User>): Promise<User | null> {
        return await this.repository.findOne({ where })
    }
}