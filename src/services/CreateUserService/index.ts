import { prismaClient } from '../../utils/prisma'
import { IUserProps } from '../../@types/UserInterface'
class CreateUserService {
  async execute({ name, email, role, password } : IUserProps) {
    try {
      const user = await prismaClient.public_users.create({
        data: {
          name,
          email,
          role,
          password,
        }
      })
      return user;
    } catch (error: any) {
      throw { ...error, message: "Email already exists"}
    }
  }
}

export { CreateUserService }
