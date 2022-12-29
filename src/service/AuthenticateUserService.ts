import { User } from "../entity/User"
import { compare } from "bcryptjs"
import { UsersRepositories } from "../repository/UsersRepositories"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticaceUserService {
  async execute({email, password} : IAuthenticateRequest) {
    const user = await UsersRepositories.findOne({where: { email }})
    
    if (!user) {
      throw new Error("Email/Password incorrect")
    }

    const passwordmatch = await compare(password, user.password)

    if (!passwordmatch) {
      throw new Error("Email/Password incorrect")
    }
    
    const token = sign({
      email: user.email
    }, "e5176b450ef2fc8c611b5f9924de65ce", {
      subject: user.id,
      expiresIn: "1d"
    })
    
    return token
  }
}

export {AuthenticaceUserService}