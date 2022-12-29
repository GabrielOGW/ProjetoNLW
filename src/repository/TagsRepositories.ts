import { DataSource, Repository } from "typeorm"
import { AppDataSource } from "../database";
import { Tag } from "../entity/Tag";


export const TagsRepositories = AppDataSource.getRepository(Tag)