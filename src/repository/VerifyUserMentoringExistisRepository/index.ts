import { prismaClient } from "../../utils/prisma";

class VerifyUserMentoringExistisRepository {
  async verify(id: string, schedule_to: string) {
    const userMentorings = await prismaClient.public_users.findUnique({
      where: {
        id: id
      },
      select: {
        mentorings: {
          where: {
            schedule_to,
          }
        }
      }
    })

    if(userMentorings?.mentorings.length === 0){
      return false
    }

    return true
  }
}

export { VerifyUserMentoringExistisRepository }
