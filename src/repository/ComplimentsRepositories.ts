import { AppDataSource } from "../database";
import { Compliments } from "../entity/Compliment";

export const ComplimentsRepositories = AppDataSource.getRepository(Compliments)