import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../database";
import { User } from "../entity/User";

export const UsersRepositories = AppDataSource.getRepository(User)