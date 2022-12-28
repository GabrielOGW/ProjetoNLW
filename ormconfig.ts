import { DataSource } from "typeorm"
import { User } from "./src/entity/User"

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "src/database/database.sqlite",
  migrations: ["src/migrations/*.ts"],
  migrationsRun: true,
  entities: [User]
})