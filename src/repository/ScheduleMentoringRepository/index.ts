import { IMentoringSessionProps } from "../../services/ScheduleMentoringSessionService"
import { prismaClient } from "../../utils/prisma"

class ScheduleMentoringRepository {
  async schedule({
    mentor_id,
    mentored_id,
    schedule_to,
    notes,
    theme,
    platform
  }: IMentoringSessionProps) {
    const mentoringSession = await prismaClient.public_mentorings.create({
      data: {
        schedule_to,
        public_users: {
          connect: [{ id: mentor_id }, { id: mentored_id }]
        },
        notes,
        theme,
        platform
      }
    })

    return mentoringSession
  }
}

export { ScheduleMentoringRepository }
