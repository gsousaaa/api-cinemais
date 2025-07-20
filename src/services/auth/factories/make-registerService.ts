import { appDataSource } from "@/config/db/datasource";
import { TypeOrmUserRepository } from "@/repositories/typeorm/typeOrmUserRepository";
import { RegisterUserService } from "../registerUserService";
import { BcryptAdapter } from "@/utils/BcryptAdapter";

export function makeRegisterService() {
    const repo = new TypeOrmUserRepository(appDataSource)
    const hashService = new BcryptAdapter()

    return new RegisterUserService(repo, hashService)
}