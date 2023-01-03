import { UsersRepositories } from "../repository/UsersRepositories";
import { instanceToPlain } from "class-transformer";

class ListUserService {
  async execute() {
    const users = await UsersRepositories.find();

    return instanceToPlain(users);
  }
}

export { ListUserService };
