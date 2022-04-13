import { prismaClient } from "../../utils/prisma";

class CreateUserRepository {
  async create(name: string, email: string, role: string, password: string) {
    try {
      const createUser = await prismaClient.public_users.create({
        data: {
          name,
          email,
          role,
          password
        }
      })
      return createUser;
    } catch (error) {
      throw error
    }
  }
}

export { CreateUserRepository }
