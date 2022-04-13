import { IUserProps } from '../../@types/Interfaces/IUserProps'
import { UpdateUserRepository } from '../../repository/UpdateUserRepository'

class UpdateUserService {
  async execute(id: string, {...props}: IUserProps) {
    const updateUserRepository = new UpdateUserRepository()

    const user = await updateUserRepository.update(id, props)

    return user
  }
}
export { UpdateUserService }
