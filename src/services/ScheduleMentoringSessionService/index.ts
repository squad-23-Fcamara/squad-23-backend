import { VerifyUserMentoringExistisRepository } from '../../repository/VerifyUserMentoringExistisRepository'
import { ScheduleMentoringRepository } from '../../repository/ScheduleMentoringRepository'
import { CheckMentoringsRepository } from '../../repository/CheckMentoringsRepository'
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
    const verifyUserMentoringExistisRepository = new VerifyUserMentoringExistisRepository()
    const scheduleMentoringRepository = new ScheduleMentoringRepository()
    const checkMentoringsRepository = new CheckMentoringsRepository()

    const mentorMentorings = await verifyUserMentoringExistisRepository.verify(mentor_id, new Date(schedule_to).toISOString())
    const mentoredMentorings = await verifyUserMentoringExistisRepository.verify(mentored_id, new Date(schedule_to).toISOString())
    const verifyMentorings = await checkMentoringsRepository.check(mentored_id)

    const numberOfMentorings = verifyMentorings?.mentorings.filter(item =>
        item.schedule_to.toLocaleDateString() === new Date(schedule_to).toLocaleDateString())
    
    if (numberOfMentorings!.length >= 2){
      throw new Error('Mentored already have limit of mentorings for this day')
    }

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
  }
}

export { ScheduleMentoringSessionService }
