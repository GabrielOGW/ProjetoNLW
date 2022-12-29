import { AppDataSource } from "../database";
import { User } from "../entity/User";
import { UsersRepositories } from "../repository/UsersRepositories";
import { hash } from "bcryptjs"; 

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string
}

class CreateUserService {
  async execute({ name, email, admin, password }: IUserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await UsersRepositories.findOne({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new Error("Email already exists");
    }

    const passwordHash = await hash(password, 8)

    const user = UsersRepositories.create({ name, email, admin, password: passwordHash });

    await UsersRepositories.save(user);

    return user;
  }
}

export { CreateUserService };
