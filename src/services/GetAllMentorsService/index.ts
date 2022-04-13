import { GetAllMentorsRepository } from '../../repository/GetAllMentorsRepository'

class GetAllMentorsService {
  async execute() {
    const getAllMentorsRepository = new GetAllMentorsRepository()
    try {
      const mentors = await getAllMentorsRepository.getMentors()
      
      return mentors
    } catch (error) {
      throw error
    }
  }
}

export { GetAllMentorsService }
