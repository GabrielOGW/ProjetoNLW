import { TagsRepositories } from "../repository/TagsRepositories";
import { instanceToPlain } from "class-transformer"

class ListTagService {
  async execute() {
    const tags = await TagsRepositories.find();

    return instanceToPlain(tags);
  }
}

export { ListTagService };
