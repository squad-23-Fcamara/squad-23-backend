import { Request, Response } from 'express'
import { GetAllUserService } from '../../services/GetAllUserService'

class GetAllUserController {
  async handle(req: Request, res: Response) {
    try {
      const service = new GetAllUserService()
      const users = await service.execute()

      res.json(users)
    } catch (error) {
      res.status(500)
      res.json(error)
    }

  }
}

export { GetAllUserController }