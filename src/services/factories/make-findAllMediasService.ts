import { appDataSource } from "@/config/db/datasource";
import { TypeOrmMediaRepository } from "@/repositories/typeorm/typeOrmMediaRepository";
import { FindAllMediasService } from "../media/findAllMediasService";

export function makeFindAllMediasService() {
    const repo = new TypeOrmMediaRepository(appDataSource)

    return new FindAllMediasService(repo)
}