import { prismaClient } from '../../utils/prisma'

class GetAllUserService {
  async execute() {
    try {
      const users = await prismaClient.public_users.findMany()
      for (const user of users) {
        delete user.password
      }
      return users;
    } catch (error) {
      console.error(error)
      return {
        msg: 'Something bad happened'
      }
    }
  }
}

export { GetAllUserService }