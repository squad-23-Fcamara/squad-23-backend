import { LoadUserFutureMentoringsRepository } from '../../repository/LoadUserFutureMentoringsRepository'
import { ScheduleMentoringRepository } from '../../repository/ScheduleMentoringRepository'
import { IMentoringSessionProps } from '../../@types/Interfaces/IMentoringSessionProps'

class ScheduleMentoringSessionService {
  async execute({
    mentor_id,
    mentored_id,
    schedule_to,
    notes,
    theme,
    platform 
  }: IMentoringSessionProps) {
    const loadUserFutureMentoringsRepository = new LoadUserFutureMentoringsRepository()
    const scheduleMentoringRepository = new ScheduleMentoringRepository()

    const mentorMentorings = await loadUserFutureMentoringsRepository.loadMentorings(mentor_id, new Date(schedule_to).toISOString())
    const mentoredMentorings = await loadUserFutureMentoringsRepository.loadMentorings(mentored_id, new Date(schedule_to).toISOString())

    try {
      if (mentorMentorings) {
        throw new Error('Mentor already have mentoring in this date')
      }

      if (mentoredMentorings) {
        throw new Error('Mentored already have mentoring in this date')
      }

      const mentoringSession = await scheduleMentoringRepository.schedule({
          schedule_to,
          mentor_id,
          mentored_id,
          notes,
          theme,
          platform
        })

      return mentoringSession
    } catch (error: any) {
      return error.message
    }
  }
}

export { ScheduleMentoringSessionService }
