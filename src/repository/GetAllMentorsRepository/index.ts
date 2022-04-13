import { prismaClient } from '../../utils/prisma';

class GetAllMentorsRepository {
  async getMentors() {
    const mentors = await prismaClient.public_users.findMany({
      where: {
        available: {
          equals: true
        }
      }
    })

    return mentors
  }
}

export { GetAllMentorsRepository }
