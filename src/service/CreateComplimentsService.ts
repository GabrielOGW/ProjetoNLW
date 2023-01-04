import { ComplimentsRepositories } from "../repository/ComplimentsRepositories"

interface IComplimentRequest {
  tag_id: string,
  user_sender: string,
  user_receiver: string,
  message: string
}

class CreateComplimentsService {
  async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest) {
    
    if(user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver")
    }
    
    const userReceiverExists = await ComplimentsRepositories.findOne({
      where: {user_receiver}
    })
    
    console.log(userReceiverExists)

    if(!userReceiverExists) {
      throw new Error("User Receiver does not exists")
    }

    const compliment = ComplimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    })

    await ComplimentsRepositories.save(compliment)

    return compliment
  }
}

export { CreateComplimentsService}