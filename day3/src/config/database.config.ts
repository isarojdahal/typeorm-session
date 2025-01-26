import { DataSource } from "typeorm";
import { EnvConfig } from "./env.config";

const AppDataSource = new DataSource({
  type: "postgres",
  username: EnvConfig.DB_USERNAME,
  password: EnvConfig.DB_PASSWORD,
  port: EnvConfig.DB_PORT,
  database: EnvConfig.DB_NAME,
  host: EnvConfig.DB_HOST, // 127.0.0.1
  entities: [__dirname + "/../entities/*.entity.ts"], // path.join()
  synchronize: true,
});

export { AppDataSource };
