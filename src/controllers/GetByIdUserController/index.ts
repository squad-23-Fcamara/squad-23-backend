import { Request, Response } from 'express'
import { GetByIdUserService } from '../../services/GetByIdUserService'

class GetByIdUserController {
  async handle(req: Request, res: Response) {
  const service = new GetByIdUserService()
  const userUUID = req.params
  const user = await service.execute(userUUID)

  res.json(user)
  }
}

export { GetByIdUserController }