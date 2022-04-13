import { prismaClient } from "../../utils/prisma";
import { IUserProps } from '../../@types/Interfaces/IUserProps'

class CreateUserRepository {
  async create(user : IUserProps) {
    const createUser = await prismaClient.public_users.create({
      data: {
      ...user
      }
    })
    return createUser;
  }
}

export { CreateUserRepository }