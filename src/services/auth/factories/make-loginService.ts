import { appDataSource } from "@/config/db/datasource";
import { TypeOrmUserRepository } from "@/repositories/typeorm/typeOrmUserRepository";
import { BcryptAdapter } from "@/utils/BcryptAdapter";
import { LoginService } from "../loginService";

export function makeLoginService() {
    const repo = new TypeOrmUserRepository(appDataSource)
    const hashService = new BcryptAdapter()

    return new LoginService(repo, hashService)
}