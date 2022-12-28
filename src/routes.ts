import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router()

const createUserCotroller = new CreateUserController()

router.post("/users", createUserCotroller.handle)

export { router }