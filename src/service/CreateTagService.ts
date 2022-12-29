import { TagsRepositories } from "../repository/TagsRepositories"

class CreateTagService {
  async execute(name: string) {
    if(!name) {
      throw new Error("Incorrect name!")
    }

    const tagAlreadyExists = await TagsRepositories.findOne({
      where: { name }
    })
    if(tagAlreadyExists) {
      throw new Error("tag already exists")
    }

    const tag = TagsRepositories.create({
      name 
    }) 
    await TagsRepositories.save(tag)

    return tag
  }
}

export { CreateTagService }