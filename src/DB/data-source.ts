import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { User } from "../entities/user";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  entities: [User],
  namingStrategy: new SnakeNamingStrategy(),
  migrations: ["src/DB/migrations/1732523584241-dbCreation.ts"],
  synchronize: false,
});

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((e) => {
    console.error("Error during Data Source initialization", e);
  });
