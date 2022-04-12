import { prismaClient } from '../../utils/prisma'

class CheckMentoringsRepository {
  async check(id: string) {
    const userMentorings = await prismaClient.public_users.findUnique({
      where: {
        id,
      },
      include: {
        mentorings: {
          where: {
            schedule_to: {
              gte: new Date()
            }
          }
        }
      }
    })

    return userMentorings
  }
}

export { CheckMentoringsRepository }
