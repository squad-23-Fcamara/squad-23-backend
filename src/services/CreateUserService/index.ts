import { CreateUserRepository } from '../../repository/CreateUserRepository'
import { GetByEmailUserRepository } from '../../repository/GetByEmailUserRepository'
import { Encrypter } from '../../utils/encrypter'

class CreateUserService {
  async execute(name: string, email: string, role: string, password: string) {
    const getByEmailUserRepository =  new GetByEmailUserRepository()
    const createUserRepository = new CreateUserRepository()
    const encrypter = new Encrypter()
    const userAlreadyExists = await getByEmailUserRepository.findUnique(email)

    if(userAlreadyExists) {
      throw new Error ("Email already exists")
    }
    try {
      const hashPassword = encrypter.encrypt(password!)

      if(name && email && role && password) {
        const user = await createUserRepository.create(name, email, role, hashPassword)
        return user
      }
    } catch (error) {
      throw error
    }
  }
}

export { CreateUserService }
