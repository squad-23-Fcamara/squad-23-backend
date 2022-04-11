import { prismaClient } from "../../utils/prisma";

class GetByIdUserRepository {
  async findUnique(id: string) {
    const getByIdUser = await prismaClient.public_users.findUnique({
      where: {
        id: id
      },
      include: {
        mentorings: true
      }
    })
    delete getByIdUser.password
    return getByIdUser;
  }
}

export { GetByIdUserRepository }