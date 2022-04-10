import { GetByIdUserRepository } from '../../repository/GetByIdUserRepository'
import { CreateUserRepository } from '../../repository/CreateUserRepository'
class GetByIdUserService {
  async execute(id: string) {
    const getByIdUserRepository =  new GetByIdUserRepository()
    const userIdDontExists = new CreateUserRepository()

    if(userIdDontExists) {
      throw new Error ("This user doesn't exist, create a new user")
    }

    const user = await getByIdUserRepository.findUnique(id)

    return user
  }
}

export { GetByIdUserService }