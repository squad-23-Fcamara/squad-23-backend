import { Request, Response } from 'express'
import { GetByIdUserService } from '../../services/GetByIdUserService'

class GetByIdUserController {
  async handle(req: Request, res: Response) {
    try {
      const service = new GetByIdUserService()
      const { uuid } = req.params

      const user = await service.execute(uuid)

      res.json(user)
    } catch (error: any) {
      res.status(404)
      res.json(error.message)
    }
  }
}

export { GetByIdUserController }