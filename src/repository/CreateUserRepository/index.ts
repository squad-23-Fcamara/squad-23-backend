import { prismaClient } from "../../utils/prisma";
import { IUserProps } from '../../@types/UserInterface'

class CreateUserRepository {
  async create({ name, email, role, password } : IUserProps) {
    const createUser = await prismaClient.public_users.create({
      data: {
        name,
        email,
        role,
        password,
      }
    })
    return createUser;
  }
}

export { CreateUserRepository }