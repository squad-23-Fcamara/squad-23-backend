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
    if(getByIdUser){
      return getByIdUser;
    }else {
      throw new Error('User no existis') 
    }
  }
}

export { GetByIdUserRepository }