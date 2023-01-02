import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticaceUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentsController } from "./controllers/CreateComplimentController";

const router = Router()

const createUserCotroller = new CreateUserController()
const createTagController = new CreateTagController()
const authenticaceUserController = new AuthenticaceUserController()
const createComplimentsController = new CreateComplimentsController()

router.post("/users", createUserCotroller.handle)
router.post("/tags", ensureAdmin, createTagController.handle)
router.post("/login", authenticaceUserController.handle)
router.post("/compliments", createComplimentsController.handle)

export { router }