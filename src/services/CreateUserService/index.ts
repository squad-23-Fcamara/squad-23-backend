import { prismaClient } from '../../utils/prisma'
export interface IUserProps {
  id?: string;
  name: string;
  email: string;
  role: string;
  password: string;
}
class CreateUserService {
  async execute({ name, email, role, password } : IUserProps) {
    try {
      const user = await prismaClient.public_users.create({
        data: {
          name,
          email,
          role,
          password,
        }
      })
      return user;
    } catch (error: any) {
      throw { ...error, message: "Email already exists"}
    }
  }
}

export { CreateUserService }
