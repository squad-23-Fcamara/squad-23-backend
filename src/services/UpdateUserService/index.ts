import { prismaClient } from '../../utils/prisma'

class UpdateUserService {
  async execute(id: string, mentor: boolean) {
    try {
      const user = await prismaClient.public_users.update({
        where: {
          id: id,  
        },
        data: {
          mentor: mentor,
        }
      })

      return user

    } catch(error: any) {

  }
}

export { UpdateUserService }