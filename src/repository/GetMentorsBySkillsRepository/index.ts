import { prismaClient } from '../../utils/prisma';

class GetMentorsBySkillsRepository {
  async getMentors(skills: string[]) {
    const mentors = await prismaClient.public_users.findMany({
      where: {
        skills: {
          hasSome: skills,
        }
      }
    })

    return mentors
  }
}

export { GetMentorsBySkillsRepository }
