import { IUserProps } from '../../@types/Interfaces/IUserProps'
import { CreateUserRepository } from '../../repository/CreateUserRepository'
class CreateUserService {
  async execute({ 
    name, 
    email, 
    role, 
    password 
  }: IUserProps) {
    const userDontExists = new CreateUserRepository()
    const userAlreadyExists = 

    try {
      if(userDontExists) {
        
      }
      return 
    } catch (error: any) {
      throw { ...error, message: "Email already exists"}
    }
  }
}

export { CreateUserService }
