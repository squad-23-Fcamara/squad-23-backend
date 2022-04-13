import { GetMentorsBySkillsRepository } from '../../repository/GetMentorsBySkillsRepository'

class GetMentorsBySkillsService {
  async execute(skills: string[]) {
    const getMentorsBySkillsRepository = new GetMentorsBySkillsRepository()
    try {
      const mentors = await getMentorsBySkillsRepository.getMentors(skills)
      
      return mentors
    } catch (error) {
      throw error
    }
  }
}

export { GetMentorsBySkillsService }
