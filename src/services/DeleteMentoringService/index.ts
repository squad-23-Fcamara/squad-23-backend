import { DeleteMentoringRepository } from "../../repository/DeleteMentoringRepository";

class DeleteMentoringService {
  async execute(id: string) {
    const deleteMentoringRepository = new DeleteMentoringRepository()

    try {
      const deleted = await deleteMentoringRepository.delete(id)       

      return deleted
    } catch (error: any) {
      throw { 
        ...error,
        message: `Mentoring with this id doesn't exists`
      }
    }
  }
}

export { DeleteMentoringService }
