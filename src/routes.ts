import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router()

const createUserCotroller = new CreateUserController()
const createTagController = new CreateTagController()

router.post("/users", createUserCotroller.handle)
router.post("/tags", ensureAdmin, createTagController.handle)

export { router }