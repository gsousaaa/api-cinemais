import { DataSource } from "typeorm";
import { env } from "../env";
import { Favorite } from "./models/Favorite";
import { Media } from "./models/Media";
import { User } from "./models/User";

export const appDataSource = new DataSource({
    type: 'postgres',
    host: env.PG_HOST,
    username: env.PG_USERNAME,
    password: env.PG_PASSWORD,
    port: env.PG_PORT,
    database: env.PG_DATABASE,
    synchronize: false,
    entities: [Favorite, Media, User]
})