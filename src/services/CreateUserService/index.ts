import { prismaClient } from '../../utils/prisma'

export interface IUserProps {
  id?: string;
  email: string;
  mentor: boolean;
  name: string;
  password: string;
}

class CreateUserService {
  async execute({email, mentor, name, password}: IUserProps) {
    const user = await prismaClient.public_users.create({
      data: {
        email,
        mentor,
        name,
        password
      }
    })
    return user;
  }
}

export { CreateUserService }
