import { prismaClient } from "../../utils/prisma";

class GetByEmailUserRepository {
  async findUnique(email: string) {
    const getByEmailUser = await prismaClient.public_users.findUnique({
    where: {
      email: email,
    },
    select: {
      email: true,
    },
  })
  
  return getByEmailUser;
  }
}

export { GetByEmailUserRepository }