import { prismaClient } from '../../utils/prisma'
import { IUserProps } from '../../@types/Interfaces/IUserProps'
import { CreateUserRepository } '../../repository/CreateUserRepository'
class CreateUserService {
  async execute() {
    try {
      })
      return 
    } catch (error: any) {
      throw { ...error, message: "Email already exists"}
    }
  }
}

export { CreateUserService }
