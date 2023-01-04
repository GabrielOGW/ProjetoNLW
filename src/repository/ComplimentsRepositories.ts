import { AppDataSource } from "../database";
import { Compliment } from "../entity/Compliment";

export const ComplimentsRepositories = AppDataSource.getRepository(Compliment)