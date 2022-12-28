import { AppDataSource } from "../database";
import { User } from "../entity/User";
import { UsersRepositories } from "../repository/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await UsersRepositories.findOne({ where: {email} });

    if (userAlreadyExists) {
      throw new Error("Email already exists");
    }

    const user = UsersRepositories.create({ name, email, admin });

    await UsersRepositories.save(user);

    return user;
  }
}

export { CreateUserService };
