import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticaceUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentsController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router();

const createUserCotroller = new CreateUserController();
const createTagController = new CreateTagController();
const authenticaceUserController = new AuthenticaceUserController();
const createComplimentsController = new CreateComplimentsController();
const listUserReceiveComplimentController = new ListUserReceiveComplimentsController()
const listUserSendComplimentController = new ListUserSendComplimentsController()
const listTagController = new ListTagController()
const listUsercontroller = new ListUserController()


router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
  );
router.post("/users", createUserCotroller.handle);
router.post("/login", authenticaceUserController.handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentsController.handle
);
router.get("users/compliments/send", ensureAuthenticated, listUserSendComplimentController.handle)
router.get("users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentController.handle)
router.get("tags", listTagController.handle)
router.get("users", ensureAuthenticated, listUsercontroller.handle)

export { router };