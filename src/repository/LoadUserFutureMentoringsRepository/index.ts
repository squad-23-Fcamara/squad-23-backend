import { prismaClient } from "../../utils/prisma";

class LoadUserFutureMentoringsRepository {
  async loadMentorings(id: string) {
    const userMentorings = await prismaClient.public_users.findUnique({
      where: {
        id: id
      },
      select: {
        mentorings: {
          where: {
            schedule_to: {
              gte: new Date().toISOString()
            }
          }
        }
      }
    })

    return userMentorings
  }
}

export { LoadUserFutureMentoringsRepository }
