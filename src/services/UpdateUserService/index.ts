import { prismaClient } from '../../utils/prisma'

class UpdateUserService {
  async execute(id: string, mentor?: boolean, skills?: string[]) {
      if (mentor === undefined && skills === undefined) {
        throw new Error('Missing mentor and skills params, you need to send at least one of them')
      }
      try {
        const user = await prismaClient.public_users.update({
          where: {
            id: id
          },
          data: {
            mentor,
            skills
          }
        })
        delete user.password

        return user
      } catch (error: any) {
        throw { 
        ...error,
        message: "Probably this id doesn't exists on database"
      }
    }
  }
}
export { UpdateUserService }