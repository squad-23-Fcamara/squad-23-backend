import { GetByIdUserRepository } from '../../repository/GetByIdUserRepository'

class GetByIdUserService {
  async execute(id: string) {
    const getByIdUserRepository =  new GetByIdUserRepository()
    try {
      const user = await getByIdUserRepository.findUnique(id)

      if(!user){
        throw new Error ("This user doesn't exist")
      }

      return user
    } catch (error) {
      return error 
    }
  }
}

export { GetByIdUserService }
