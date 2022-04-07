import { Request, Response } from 'express'
import { UpdateUserService } from '../../services/UpdateUserService'

class UpdateUserController {
  async handle(req: Request, res: Response) {

    const service = new UpdateUserService()
    const { id, mentor } = req.body

    try {
      const user = await service.execute(id, mentor)

      res.json(user)
    } catch (error: any) {
      res.status(409)
      res.json(error.message)
    }
  }
}

export { UpdateUserController }