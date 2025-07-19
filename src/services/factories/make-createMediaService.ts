import { appDataSource } from "@/config/db/datasource";
import { TypeOrmMediaRepository } from "@/repositories/typeorm/typeOrmMediaRepository";
import { CreateMediaService } from "../media/createMediaService";

export function makeCreateMediaService() {
    const repo = new TypeOrmMediaRepository(appDataSource)

    return new CreateMediaService(repo)
}