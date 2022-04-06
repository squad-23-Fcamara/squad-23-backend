import { prismaClient } from '../../utils/prisma'

class GetAllUserService {
  async execute() {
    const users = await prismaClient.public_users.findMany()
    for(const user of users) {
      delete user.password
    }
    return users;
  }
}

export { GetAllUserService }