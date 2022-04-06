import { prismaClient } from '../../utils/prisma'

interface IMentoringSessionProps {
  schedule_to: Date;
  mentor_id: string;
  mentored_id: string;
}

class ScheduleMentoringSessionService {
  async execute({ mentor_id, mentored_id, schedule_to }: IMentoringSessionProps) {
    try {
      const mentoringSession = await prismaClient.public_schedules.create({
        data: {
          schedule_to,
          public_users: {
            connect: [{ id: mentor_id }, { id: mentored_id }]
          }
        }
      })

      return mentoringSession
    } catch (error) {
      throw error
    }
  }
}

export { ScheduleMentoringSessionService }