import { prismaClient } from "../../utils/prisma";

class GetByEmailUserRepository {
  async findUnique(email: string) {
    const getByEmailUser = await prismaClient.public_users.findUnique({
      where: {
        email: email
      }
    })
  
    return getByEmailUser;
  }
}

export { GetByEmailUserRepository }