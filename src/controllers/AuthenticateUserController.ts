import { Request, Response } from "express"
import { AuthenticaceUserService } from "../service/AuthenticateUserService"

class AuthenticaceUserController {
  async handle(req: Request, res: Response) {
    const { email, password} = req.body

    const authenticaceUserService = new AuthenticaceUserService

    const token = await authenticaceUserService.execute({
      email, password
    })
    return res.json(token)
  }
}

export {AuthenticaceUserController}