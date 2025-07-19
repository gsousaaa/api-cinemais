import { appDataSource } from "@/config/db/datasource";
import { TypeOrmMediaRepository } from "@/repositories/typeorm/typeOrmMediaRepository";
import { FindMediaService } from "../media/findMediaService";

export function makeFindMediaService() {
    const repo = new TypeOrmMediaRepository(appDataSource)

    return new FindMediaService(repo)
}