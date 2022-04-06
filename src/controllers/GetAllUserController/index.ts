import { Request, Response } from 'express'
import { GetAllUserService } from '../../services/GetAllUserService'

class GetAllUserController {
  async handle(req: Request, res: Response) {
    const service = new GetAllUserService()
    const users = await service.execute()

    res.json(users)
  }
}

export { GetAllUserController }