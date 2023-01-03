import { Request, response, Response } from "express";
import { CreateComplimentsService } from "../service/CreateComplimentsService";

class CreateComplimentsController {
  async handle(req: Request, res: Response) {
    const { tag_id, user_receiver, message } = req.body;
    const { user_id } = req

    const createComplimentsService = new CreateComplimentsService();

    const compliment = await createComplimentsService.execute({
      tag_id,
      user_sender: user_id,
      user_receiver,
      message,
    });

    return response.json(compliment);
  }
}

export { CreateComplimentsController };
