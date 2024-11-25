import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { idNumber } from "../entities/idNumber";
import { DB_PORT } from "../utils/consts";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: DB_PORT,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  entities: [idNumber],
  namingStrategy: new SnakeNamingStrategy(),
  migrations: ["src/DB/migrations/*.ts"],
  synchronize: false,
});
