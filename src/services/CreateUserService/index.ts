import { prismaClient } from '../../utils/prisma'
import { public_users } from '@prisma/client'

class CreateUserService {
  async execute({ name, email, role, password } : public_users) {
    try {
      const user: public_users = await prismaClient.public_users.create({
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
