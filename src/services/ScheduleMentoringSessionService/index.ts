import { LoadUserFutureMentoringsRepository } from '../../repository/LoadUserFutureMentoringsRepository'
import { ScheduleMentoringRepository } from '../../repository/ScheduleMentoringRepository'

export interface IMentoringSessionProps {
  schedule_to: Date;
  mentor_id: string;
  mentored_id: string;
  notes?: string;
  theme: string[];
  platform: string;
}

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

    const mentorMentorings = await loadUserFutureMentoringsRepository.loadMentorings(mentor_id)
    const mentoredMentorings = await loadUserFutureMentoringsRepository.loadMentorings(mentored_id)

    try {
      if (mentorMentorings) {
        for (const mentoring of mentorMentorings.mentorings) {
          if (new Date(mentoring.schedule_to).toISOString() === new Date(schedule_to).toISOString()) {
            throw new Error('Mentor already have mentoring in this date')
          }
        }
      }

      if (mentoredMentorings) {
        for (const mentoring of mentoredMentorings.mentorings) {
          if (new Date(mentoring.schedule_to).toISOString() === new Date(schedule_to).toISOString()) {
            throw new Error('Mentored already have mentoring in this date')
          }
        }
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
