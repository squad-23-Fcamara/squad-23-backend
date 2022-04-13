import { IUserProps } from '../../@types/Interfaces/IUserProps'
import { prismaClient } from '../../utils/prisma'

class UpdateUserRepository {
  async update(id: string, {...props}: IUserProps) {
    try {
      const user = await prismaClient.public_users.update({
        where: {
          id: id
        },
        data: {
          ...props
        }
      })

      return user
    } catch (error: any) {
      throw { 
        ...error,
        message: "This user doesn't exists"
      }
    }
    
  }
}

export { UpdateUserRepository }
