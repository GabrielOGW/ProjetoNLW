import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "src/database/database.sqlite",
  migrations: ["src/database/migrations/*.ts"],
  migrationsRun: true,
  entities: [__dirname + "/../entity/*.{ts,js}"],
});
