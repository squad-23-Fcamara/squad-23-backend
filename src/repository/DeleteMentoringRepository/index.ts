import { prismaClient } from '../../utils/prisma'

class DeleteMentoringRepository {
  async delete(id: string) {
    const deleted = await prismaClient.public_mentorings.delete({
      where: {
        id
      }
    })

    if(deleted){
      return true
    }
  }
}

export { DeleteMentoringRepository }
