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
    try {
      const user: IUserProps = await prismaClient.public_users.create({
        data: {
          email,
          mentor,
          name,
          password
        }
      })
      return user;
    } catch (error: any) {
      throw { ...error, message: "Email already exists"}
    }
  }
}

export { CreateUserService }
