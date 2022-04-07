import { prismaClient } from '../../utils/prisma'

class GetByIdUserService {
  async execute(id: string) {
    try {
      const user = await prismaClient.public_users.findUnique({
        where: {
          id: id,
        },
      })
    
      delete user.password
      return user;

    } catch (error: any) {
      throw { ...error, message: "User with this id doesn't exists" }
    }
  }
}

export { GetByIdUserService }