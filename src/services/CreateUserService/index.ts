import { IUserProps } from '../../@types/Interfaces/IUserProps'
import { CreateUserRepository } from '../../repository/CreateUserRepository'
import { GetByEmailUserRepository } from '../../repository/GetByEmailUserRepository'
import { Encrypter } from '../../utils/encrypter'
class CreateUserService {
  async execute({ 
    name, 
    email,
    role, 
    password 
  }: IUserProps) {
    const getByEmailUserRepository =  new GetByEmailUserRepository()
    const createUserRepository = new CreateUserRepository()
    const encrypter = new Encrypter()
    const userAlreadyExists = await getByEmailUserRepository.findUnique(email)

    if(userAlreadyExists) {
      throw new Error ("Email already exists")
    }

    const hashPassword = encrypter.encrypt(password)
    const user = await createUserRepository.create({name, email, role, password: hashPassword})

    return user
  }     
}

export { CreateUserService }
